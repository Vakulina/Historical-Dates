import { ReactElement } from "react";
import { ICategory } from "../../modeles/dataTDO";
import Dot from "./Dot/Dot";
import React from "react";

type Props = {
    item: ICategory,
    index: number,
    circleWidth: number,
    angleStep: number
}

export const getDot = ({ item, index, circleWidth, angleStep }: Props): ReactElement => {
    const angle = -Math.PI / 2 + angleStep * (index+1) + angleStep / 2;
    const top = circleWidth / 2 + circleWidth / 2 * Math.sin(angle);
    const left = circleWidth / 2 + circleWidth / 2 * Math.cos(angle);
    
    
    return <Dot
        key={item.id}
        index={index}
        category={item}
        style={{ top: `${top}px`, left: `${left}px` }
        } />
}

export  const startAnimation = (animation: () => void, context:gsap.Context) => {
    context.kill();
    context.add(animation);
};
