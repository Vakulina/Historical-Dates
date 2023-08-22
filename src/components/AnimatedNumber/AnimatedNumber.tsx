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

  useLayoutEffect(() => {
    const  ctx = gsap.context(() => {
        gsap.to(numberRef.current, {
            duration: 1,
            textContent: number,
            roundProps: 'textContent',
          })
    });
    return () => ctx.current?.revert();
  }, [number]);

 
  return (
    <div className={className} ref={numberRef}>
      {initValue}
    </div>
  );
}

