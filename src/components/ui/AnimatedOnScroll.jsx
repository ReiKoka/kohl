import React, { useState, useEffect } from "react";
import { useIntersectionObserver } from "usehooks-ts";

export default function AnimatedOnScroll({
  children,
  animationClass,
  threshold = 0.2,
  once = true,
}) {
  const [hasAnimated, setHasAnimated] = useState(false);


  const { ref, isIntersecting } = useIntersectionObserver({
    threshold,
  });

  useEffect(() => {
    if (isIntersecting && once) {
      setHasAnimated(true);
    }
  }, [isIntersecting, once]);

  return (
    <div
      ref={ref}
      className={isIntersecting || hasAnimated ? animationClass : "opacity-0"}
    >
      {children}
    </div>
  );
}
