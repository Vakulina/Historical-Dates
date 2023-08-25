import { useLayoutEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import React from 'react';

type AnimateNumberProps = {
  number: number;
  className?: string;
}

export const AnimatedNumber=({ number, className }: AnimateNumberProps)=> {
  const [initValue] = useState(number);
  const numberRef = useRef<HTMLDivElement | null>(null);
  const animateRef = useRef<gsap.Context | null>(null);

  useLayoutEffect(() => {
    animateRef.current = gsap.context(() => {});
    return () => animateRef.current?.revert();
  }, []);

  useLayoutEffect(() => {
    if (animateRef.current) animateRef.current.add(()=>{
        gsap.to(numberRef.current, {
            duration: 1,
            textContent: number,
            roundProps: 'textContent',
          })
    });
  }, [number]);
 
  return (
    <div className={className} ref={numberRef}>
      {initValue}
    </div>
  );
}

