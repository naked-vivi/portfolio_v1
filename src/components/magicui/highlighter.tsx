"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { useInView, useReducedMotion } from "motion/react";
import { annotate, annotationGroup } from "rough-notation";
import type { RoughAnnotation, RoughAnnotationType } from "rough-notation/lib/model";
import { cn } from "@/lib/utils";

// Adapted from Magic UI's Highlighter component.
export type HighlighterAction =
  | RoughAnnotationType
  | "highlight-underline"
  | RoughAnnotationType[];

export interface AlternateAnnotation {
  action: RoughAnnotationType;
  color: string;
  strokeWidth?: number;
  iterations?: number;
  padding?: number;
  textClassName?: string;
}

interface HighlighterProps {
  children: ReactNode;
  action?: HighlighterAction;
  alternate?: AlternateAnnotation[];
  color?: string;
  highlightColor?: string;
  underlineColor?: string;
  strokeWidth?: number;
  animationDuration?: number;
  iterations?: number;
  padding?: number;
  multiline?: boolean;
  isView?: boolean;
}

export function Highlighter({
  children,
  action = "highlight",
  alternate,
  color = "#a855f7",
  highlightColor,
  underlineColor,
  strokeWidth = 2,
  animationDuration = 600,
  iterations = 1,
  padding = 2,
  multiline = true,
  isView = false,
}: HighlighterProps) {
  const elementRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(elementRef, { once: true, margin: "-10%" });
  const reducedMotion = useReducedMotion();
  const shouldShow = !isView || isInView;

  useEffect(() => {
    const element = elementRef.current;
    if (!shouldShow || !element) return;

    let cleanup = () => {};

    if (alternate && alternate.length > 0) {
      // Shuffled random turn on each page load.
      // Stays on this style until the page is refreshed!
      const randomIndex = Math.floor(Math.random() * alternate.length);
      const config = alternate[randomIndex];

      if (config.textClassName) {
        element.className = cn(
          "relative inline bg-transparent transition-colors duration-300",
          config.textClassName
        );
      }

      const annotation = annotate(element, {
        type: config.action,
        color: config.color,
        strokeWidth: config.strokeWidth ?? (config.action === "underline" ? 2.5 : strokeWidth),
        iterations: config.iterations ?? iterations,
        padding: config.padding ?? (config.action === "underline" ? 1 : padding),
        animationDuration,
        multiline,
        animate: !reducedMotion,
      });

      annotation.show();
      cleanup = () => {
        annotation.remove();
      };
    } else {
      const actionList: RoughAnnotationType[] = Array.isArray(action)
        ? action
        : action === "highlight-underline"
          ? ["highlight", "underline"]
          : [action as RoughAnnotationType];

      const annotations: RoughAnnotation[] = actionList.map((type) => {
        let annotationColor = color;
        if (type === "highlight" && highlightColor) {
          annotationColor = highlightColor;
        } else if (type === "underline" && underlineColor) {
          annotationColor = underlineColor;
        }

        return annotate(element, {
          type,
          color: annotationColor,
          strokeWidth: type === "underline" ? Math.max(strokeWidth, 2) : strokeWidth,
          animationDuration,
          iterations,
          padding: type === "underline" ? 1 : padding,
          multiline,
          animate: !reducedMotion,
        });
      });

      if (annotations.length > 1) {
        const group = annotationGroup(annotations);
        group.show();
      } else if (annotations[0]) {
        annotations[0].show();
      }

      cleanup = () => {
        annotations.forEach((a) => a.remove());
      };
    }

    return cleanup;
  }, [
    shouldShow,
    alternate,
    action,
    color,
    highlightColor,
    underlineColor,
    strokeWidth,
    animationDuration,
    iterations,
    padding,
    multiline,
    reducedMotion,
  ]);

  return (
    <span
      ref={elementRef}
      className="relative inline bg-transparent transition-colors duration-300"
    >
      {children}
    </span>
  );
}
