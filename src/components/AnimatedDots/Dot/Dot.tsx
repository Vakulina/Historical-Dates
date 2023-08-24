import { useRef, useLayoutEffect, useContext, CSSProperties } from 'react';
import { gsap } from 'gsap';
import { CategoryContext } from '../../../context/categoryContext';
import React from 'react';
import styles from './Dot.module.scss'
import { ICategory } from '../../../modeles/dataTDO';

interface DotProps {
    category: ICategory;
    index: number;
    style?: CSSProperties | undefined
}

export default function Dot({ category, index, style }: DotProps) {
    const { data, category: currentCategory, changeCategory } = useContext(CategoryContext);

    const dotRef = useRef<HTMLButtonElement | null>(null);

    const isActive = currentCategory!.id === index + 1
    const ctx = useRef<gsap.Context | null>(null);

 
    const onClick = () => {
        if (!isActive) {
            if (changeCategory && data) changeCategory(data[index])
        }
    };

    useLayoutEffect(() => {
        ctx.current = gsap.context(() => { }, dotRef);
        return () => ctx.current?.revert();
    }, []);

    useLayoutEffect(() => {
        ctx.current?.add(() => {
            gsap.set(`.dot:first-of-type .${styles.dot__category}`, {
                opacity: 1,
                display: 'flex',
            });
            gsap.set(`.dot:first-of-type .${styles.dot__index}`, {
                opacity: 1,
                display: 'flex',
            })
            gsap.to(`.${styles.dot__category}`, {
                opacity: isActive ? 1 : 0,
                display: isActive ? 'flex' : 'none',
                duration: isActive? 0.4: 0,
                delay: isActive? 1: 0,
            });
            gsap.to(`.${styles.dot__index}`, {
                opacity: isActive ? 1 : 0,
                display: isActive ? 'flex' : 'none',
                duration: isActive? 0.7: 0,
                delay: isActive? 0.2: 0,
            });
            //`.${styles.dot__index}`
        });

    }, [isActive]);


    const handleMouseEnter = () => {
        if(isActive) return
        ctx.current?.add(() => {
            gsap.to(`.${styles.dot__index}`, {
                opacity: 1,
                display: 'flex',
                duration: 0.8,
                delay: 0.2,
            });
        })
    };

    const handleMouseLeave = () => {
        if(isActive) return
        ctx.current?.add(() => {
            gsap.to(`.${styles.dot__index}`, {
                opacity: 0,
                display: 'none',
                duration: 0.8,
                delay: 0.2,
            });
        })
    };


    return (
        <>
            <button
                className={`dot ${styles.dot}`}
                ref={dotRef}
                type='button'
                onClick={onClick}
                style={style}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <span className={styles.dot__index} >{index + 1}</span>
                <span className={styles.dot__category}  >
                    {category.name}
                </span>
            </button>
        </>
    );
}

