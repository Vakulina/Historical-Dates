import { useRef, useLayoutEffect, useContext, CSSProperties } from 'react';
import { gsap } from 'gsap';
import { CategoryContext } from '../../../context/categoryContext';
import React from 'react';
import styles from './Dot.module.scss'
import { ICategory } from '../../../modeles/dataTDO';
import { startAnimation } from '../utiles';

interface DotProps {
    category: ICategory;
    index: number;
    style?: CSSProperties | undefined
}

export default function Dot({ category, index, style }: DotProps) {
    const { data, category: currentCategory, changeCategory } = useContext(CategoryContext);
    const dotRef = useRef<HTMLButtonElement | null>(null);
    const isActive = currentCategory!.id === index + 1
    const hoverCtx = useRef<gsap.Context | null>(null);
    const activeCtx = useRef<gsap.Context | null>(null);

    const onClick = () => {
        if (!isActive && changeCategory && data) {
            changeCategory(data[index])
        }
    };

    useLayoutEffect(() => {
        activeCtx.current = gsap.context(() => {
        }, dotRef);
        return () => activeCtx.current?.revert();
    }, []);


    useLayoutEffect(() => {
        if (!isActive&& activeCtx.current) {
            startAnimation(() => {
                gsap.to(`.${styles.dot__category}`, {
                    opacity: 0,
                    display: 'none',
                    duration: 0,
                });
                gsap.to(`.${styles.dot__index}`, {
                    opacity: 0,
                    display: 'none',
                    duration: 0.4,
                    width: 0,
                    height: 0,
                });
            }, activeCtx.current);
        }
    }, [isActive]);
    
    useLayoutEffect(() => {
        if (isActive&&activeCtx.current) {
            startAnimation(() => {
                gsap.to(`.${styles.dot__category}`, {
                    opacity: isActive ? 1 : 0,
                    display: isActive ? 'flex' : 'none',
                    duration: isActive ? 0.4 : 0,
                    delay: isActive ? 0.6 : 0,
                });
                gsap.to(`.${styles.dot__index}`, {
                    opacity: isActive ? 1 : 0,
                    display: isActive ? 'flex' : 'none',
                    duration: 0.4,
                    width: isActive ? '56px' : 0,
                    height: isActive ? '56px' : 0,
                });
            }, activeCtx.current);
        }
    }, [isActive]);


    const handleMouseEnter = () => {
        if (isActive) return
        hoverCtx.current = gsap.context(() => {
            gsap.to(`.${styles.dot__index}`, {
                opacity: 1,
                display: 'flex',
                duration: 0.4,
                width: '56px',
                height: '56px',
            });
        }, dotRef)

    };

    const handleMouseLeave = () => {
        if (!isActive) {
            hoverCtx.current?.add(() => {
                gsap.to(`.${styles.dot__index}`, {
                    opacity: 0,
                    display: 'none',
                    duration: 0.4,
                    width: '0',
                    height: '0',
                })
            })
        }
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

