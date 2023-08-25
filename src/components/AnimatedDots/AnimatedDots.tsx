import React, { useContext, useLayoutEffect, useRef, useState } from "react"
import { CategoryContext } from "../../context/categoryContext";
import style from './AnimatedDots.module.scss'
import { useDimensions } from "../../utiles/useDimensions";
import { gsap } from 'gsap';
import { getDot } from "./utiles";

export const AnimatedDots = () => {
    const { data, category } = useContext(CategoryContext);
    const circleRef = useRef<HTMLDivElement | null>(null);
    const circleWidth = useDimensions(circleRef).width;
    const numItems = data!.length;
    const angleStep = (360 / numItems) * (Math.PI / 180);
    const animateRef = useRef<gsap.Context | null>(null);
    const ctx = useRef<gsap.Context | null>(null);

    useLayoutEffect(() => {
        ctx.current = gsap.context(() => {
            gsap.set(`.dot:first-of-type span:nth-of-type(2)`, {
                opacity: 1,
                display: 'flex',
            });
            gsap.set(`.dot:first-of-type span:first-of-type `, {
                opacity: 1,
                display: 'flex',
                width: '56px',
                height: '56px',
            })
        }, circleRef);

        return () => ctx.current?.revert();
    }, []);


    useLayoutEffect(() => {
      if(category!.id !== 1)  ctx.current?.revert();
    }, [category]);

    useLayoutEffect(() => {
        animateRef.current = gsap.context(() => { }, circleRef);
        return () => animateRef.current?.revert();
    }, []);

    return (
        <div className={style.animatedDots}>
            <div className={style.animatedDots__circle} ref={circleRef}>
                {data && data.map((item, index) => getDot({ item, index, circleWidth, angleStep }))}
            </div>

        </div>
    )
}
