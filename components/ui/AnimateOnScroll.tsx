"use client";

import { motion, useInView, type Variants } from "framer-motion";
import { useRef, type ReactNode, Children } from "react";

type Direction = "up" | "down" | "left" | "right" | "none";

const directionOffset = (d: Direction): { x: number; y: number } => {
  switch (d) {
    case "up":
      return { x: 0, y: 32 };
    case "down":
      return { x: 0, y: -32 };
    case "left":
      return { x: 32, y: 0 };
    case "right":
      return { x: -32, y: 0 };
    default:
      return { x: 0, y: 0 };
  }
};

export interface AnimateOnScrollProps {
  children: ReactNode;
  /** Animation direction; "none" = fade only */
  direction?: Direction;
  /** Delay before animation starts (seconds) */
  delay?: number;
  /** Duration in seconds */
  duration?: number;
  /** Trigger only once when in view (default true) */
  once?: boolean;
  /** Amount of element visible to trigger (0-1, default 0.2) */
  amount?: number;
  /** Extra class for the motion wrapper */
  className?: string;
}

export function AnimateOnScroll({
  children,
  direction = "up",
  delay = 0,
  duration = 0.5,
  once = true,
  amount = 0.2,
  className,
}: AnimateOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, amount });
  const offset = directionOffset(direction);

  const variants: Variants = {
    hidden: {
      opacity: 0,
      x: direction === "none" ? 0 : offset.x,
      y: direction === "none" ? 0 : offset.y,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/** Container that staggers its direct children when they scroll into view */
export interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  /** Stagger delay between each child (seconds) */
  staggerDelay?: number;
  /** Direction for each child */
  direction?: Direction;
  /** Amount of element visible to trigger (0-1) */
  amount?: number;
  as?: "div" | "section";
}

export function StaggerContainer({
  children,
  className,
  staggerDelay = 0.1,
  direction = "up",
  amount = 0.15,
  as = "div",
}: StaggerContainerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount });
  const offset = directionOffset(direction);

  const childVariants: Variants = {
    hidden: {
      opacity: 0,
      x: offset.x,
      y: offset.y,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const Component = as === "section" ? motion.section : motion.div;

  return (
    <Component
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
            delayChildren: 0.05,
          },
        },
      }}
      className={className}
    >
      {Children.map(children, (child) => (
        <motion.div variants={childVariants}>
          {child}
        </motion.div>
      ))}
    </Component>
  );
}
