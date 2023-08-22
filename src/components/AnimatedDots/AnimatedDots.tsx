import React, { useContext, useRef } from "react"
import { CategoryContext } from "../../context/categoryContext";
import style from './AnimatedDots.module.scss'
import { useDimensions } from "../../utiles/useDimensions";

export const AnimatedDots = () => {
    const { data, category, changeCategory } = useContext(CategoryContext);
    const circleRef = useRef<HTMLDivElement | null>(null)
    /*    id: number;
    from: number;
    to: number;
    category?: string;
    events: IEvent[];*/
    const dotsCount = data?.length;
    const delta = dotsCount ? Math.PI * 2 / dotsCount : 0;
    let angle = 0;
    const circleWidth = useDimensions(circleRef).width
    console.log(circleWidth)

    return (
        <div className={style.animatedDots}>
            <div className={style.animatedDots__circle} ref={circleRef}>
                {data && data.map(category => {
                    const top = (circleWidth / 2) * Math.cos(angle);
                    const left = (circleWidth / 2) * Math.sin(angle);

                    angle += delta;
                    return <div className={style.animatedDots__dot} style={{ top:`${top}px`, left:`${left}px` }} />
                })}
            </div>

        </div>
    )
}
