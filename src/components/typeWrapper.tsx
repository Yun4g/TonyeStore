import React, { useEffect, useRef } from "react";
import TypedJs from "typed.js";

interface TypedProps {
  strings: string[];
  typeSpeed?: number;
  backSpeed?: number;
  loop?: boolean;
  className?: string;
  backDelay?: number;
}

export const Typed: React.FC<TypedProps> = ({
  strings,
  typeSpeed = 50,
  backSpeed = 30,
  loop = true,
  className,
  backDelay = 1500,
}) => {
  const el = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!el.current) return;

    const typed = new TypedJs(el.current, {
      strings,
      typeSpeed,
      backSpeed,
      backDelay,
      loop,
      showCursor: true,
      cursorChar: "|",
    });

    return () => typed.destroy();
  }, [strings, typeSpeed, backSpeed, loop, backDelay]);

  return <span ref={el} className={className}></span>;
};
