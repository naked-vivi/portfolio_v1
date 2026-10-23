"use client";

import { useEffect, useState, type RefObject } from "react";
import { ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function ScrollTopBtn({
  scrollContainerRef,
}: {
  scrollContainerRef?: RefObject<HTMLElement | null>;
}) {
  const [showBtn, setShowBtn] = useState(false);

  useEffect(() => {
    const container = scrollContainerRef?.current;
    const target = container ?? window;
    const handleScroll = () => {
      setShowBtn((container ? container.scrollTop : window.scrollY) > 50);
    };

    handleScroll();
    target.addEventListener("scroll", handleScroll, { passive: true });
    return () => target.removeEventListener("scroll", handleScroll);
  }, [scrollContainerRef]);

  const scrollToTop = () => {
    const target = scrollContainerRef?.current ?? window;
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    target.scrollTo({ top: 0, behavior: reducedMotion ? "instant" : "smooth" });
  };

  return (
    <Button
      onClick={scrollToTop}
      type="button"
      size="icon"
      id="to-top"
      aria-label="Scroll to top"
      aria-hidden={!showBtn}
      tabIndex={showBtn ? 0 : -1}
      className={cn(
        "fixed bottom-24 right-5 z-40 size-9 cursor-pointer rounded-full bg-primary text-primary-foreground shadow-md transition-all duration-200 ease-in-out hover:bg-primary/90 motion-reduce:transition-none motion-reduce:translate-y-0 sm:bottom-5",
        showBtn
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-10 pointer-events-none"
      )}
    >
      <ChevronUp className="size-4.5" aria-hidden="true" />
    </Button>
  );
}
