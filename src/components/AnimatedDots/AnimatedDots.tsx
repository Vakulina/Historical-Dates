import React, { useContext } from "react"
import { CategoryContext } from "../../context/categoryContext";
import style from './AnimatedDots.module.scss'

export const AnimatedDots = () => {
    const { data, category, changeCategory } = useContext(CategoryContext);
    /*    id: number;
    from: number;
    to: number;
    category?: string;
    events: IEvent[];*/
    const dotsCount = data?.length;
    const delta = dotsCount ? Math.PI * 2 / dotsCount : 0;
    var x = 0, y = 0, angle = 0;

    return (
        <div className={style.animatedDots}>
            <div className={style.animatedDots__circle}/>
            { data && data.map(category=>{
                return  <div className={style.animatedDots__dot}/>
            })}


        </div>
    )
}
