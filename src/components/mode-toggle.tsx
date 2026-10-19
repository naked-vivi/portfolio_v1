"use client";

import { Button, type ButtonProps } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { forwardRef } from "react";

export const ModeToggle = forwardRef<HTMLButtonElement, ButtonProps>(function ModeToggle(
  { className, onClick, ...props },
  ref
) {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <Button
      ref={ref}
      type="button"
      variant="ghost"
      size="icon"
      aria-label="Toggle color theme"
      {...props}
      className={cn("cursor-pointer p-0", className)}
      onClick={(event) => {
        onClick?.(event);
        if (!event.defaultPrevented) {
          setTheme(resolvedTheme === "dark" ? "light" : "dark");
        }
      }}
    >
      <Moon className="size-5 pointer-events-none dark:hidden" aria-hidden="true" />
      <Sun className="hidden size-5 pointer-events-none dark:block" aria-hidden="true" />
    </Button>
  );
});
