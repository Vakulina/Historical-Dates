import React, { useEffect, useState } from 'react';
import style from './HistoryDates.module.scss';
import { Title } from '../Title/Title';
import { LineSlider } from '../LineSlider/LineSlider';
import { getData } from '../../utiles/getData';
import { ICategory } from '../../modeles/dataTDO';
import { CircleSlider } from '../CircleSlider/CircleSlider';
import { CategoryContext } from '../../context/categoryContext';
import { AnimatedDots } from '../AnimatedDots/AnimatedDots';

export const HistoryDates = () => {
    const [data, setData] = useState<ICategory[]>([])
    const [activeCategory, setActiveCategory] = useState<Partial<ICategory>>({})

    const value = React.useMemo(() => {
        return { data, category: activeCategory, changeCategory: setActiveCategory }
    }, [activeCategory, data])

    // useEffect(()=>console.log("DATAT",value),[activeCategory])

    useEffect(() => {
        const data = getData().data
        setData(data)
        // console.log(data)
        setActiveCategory(data[0])
    }, [])

    return (
        <div className={style.historyDates}>
            {data.length && <CategoryContext.Provider value={value}>
                <div className={style.historyDates__content}>
                    <Title />
                    <CircleSlider />
                    <LineSlider />
                    <AnimatedDots />
                </div>
            </CategoryContext.Provider>}
        </div>
    )
}
