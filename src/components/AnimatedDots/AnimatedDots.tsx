import React, { useContext, useRef } from "react"
import { CategoryContext } from "../../context/categoryContext";
import style from './AnimatedDots.module.scss'

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

    return (
        <div className={style.animatedDots}>
            <div className={style.animatedDots__circle} ref={circleRef}>
                {data && data.map(category => {

                    const left = 100 * Math.cos(angle) + 'px';
                    const top = 100 * Math.sin(angle) + 'px';
                    angle += delta;
                    return <div className={style.animatedDots__dot} />
                })}
            </div>

        </div>
    )
}
