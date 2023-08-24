import React, { MutableRefObject, RefObject, useContext, useEffect, useLayoutEffect, useRef } from "react"
import { CategoryContext } from "../../context/categoryContext";
import style from './AnimatedDots.module.scss'
import { useDimensions } from "../../utiles/useDimensions";
import { gsap } from 'gsap';
import Dot from "./Dot/Dot";
import { getDot } from "./utiles";


export const AnimatedDots = () => {
    const { data, category, changeCategory } = useContext(CategoryContext);
    const circleRef = useRef<HTMLDivElement | null>(null)
    const circleWidth = useDimensions(circleRef).width
    const numItems = data!.length;
    const angleStep = (360 / numItems) * (Math.PI / 180);
    const animateRef = useRef<gsap.Context | null>(null);

   useLayoutEffect(() => {
        animateRef.current = gsap.context(() => {}, circleRef);
        return () => animateRef.current?.revert();
      }, []);
    
      useLayoutEffect(() => {
        if (animateRef.current) animateRef.current.add(()=>{
            /*gsap.to('.dot', {
                duration: 1,
                textContent: number,
                roundProps: 'textContent',
              })*/
        });
      }, [category]);

    return (
        <div className={style.animatedDots}>
            <div className={style.animatedDots__circle} ref={circleRef}>
                {data && data.map((item, index) => getDot({ item, index, circleWidth, angleStep }))}
            </div>

        </div>
    )
}
