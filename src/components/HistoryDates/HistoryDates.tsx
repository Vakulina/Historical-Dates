import React, { useEffect, useState } from 'react';
import style from './HistoryDates.module.scss';
import { Title } from '../Title/Title';
import { LineSlider } from '../LineSlider/LineSlider';
import { getData } from '../../utiles/getData';
import { ICategory } from '../../modeles/dataTDO';

export const HistoryDates = () => {
    const [data, setData] = useState<ICategory[]>([])
    
    useEffect(() => {
        const data = getData().data
        setData(data)
    }, [])
    return (
        <div className={style.historyDates}>
            <div className={style.historyDates__content}>
            <Title />
            <LineSlider slides={data[0]?.events } />
            </div>
        </div>
    )
}
