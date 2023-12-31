import React, { useContext, useState } from 'react';
import { useRef, useEffect, FC } from 'react';
import style from './CircleSlider.module.scss'
import { swiperParams } from './constants';
import DarkArrow from '../../assets/images/dark-arrow.svg'
import classNames from 'classnames';
import { CategoryContext } from '../../context/categoryContext';
import { addZero } from './utils';
import { AnimatedNumber } from '../AnimatedNumber/AnimatedNumber';
import Swiper from 'swiper';

//использован Swiper Element(WebComponent) https://swiperjs.com/react
export const CircleSlider: FC = () => {
  const { data, category, changeCategory } = useContext(CategoryContext);
  const swiperRef = useRef<HTMLElement & { initialize: () => void, swiper: Swiper } | null>(null);
  const [paginationString, setPaginationString] = useState<string>('')
  const slides = data

  useEffect(() => {
    if (swiperRef.current) Object.assign(swiperRef.current, swiperParams);
    if (swiperRef.current?.initialize) swiperRef?.current?.initialize();
    swiperRef.current?.addEventListener('slidechange', (e: any) => {
      const [swiper] = e.detail;
      if (data && changeCategory) changeCategory(data[swiper.activeIndex]);
      if (swiperRef.current)  setPaginationString(`${addZero(swiperRef.current.swiper.activeIndex + 1)}/${addZero(data!.length)}`)
    });
    if (swiperRef.current) setPaginationString(`${addZero(swiperRef.current.swiper.activeIndex + 1)}/${addZero(data!.length)}`)
  }, []);


  useEffect(() => {
    if (swiperRef.current && category?.id) swiperRef.current?.swiper.slideTo(category?.id - 1)
  }, [category]);

  return (
    <div className={style.circleSlider}>
      <swiper-container
        ref={swiperRef}
        init="false"
        pagination="true"
      >
        {slides?.map(slide => {
          return <swiper-slide key={slide.id}>
            <div className={style.circleSlider__circle} />
          </swiper-slide>
        })}
      </swiper-container>
      <div className={style.circleSlider__pagination}>
        {paginationString}
        <div className={style.circleSlider__btns}>
          <div className={classNames('circle-swiper-button-prev', style.circleSlider__prev)}>
            <img src={DarkArrow} className={style.circleSlider__btn_toLeft} />
          </div>
          <div className={classNames('circle-swiper-button-next', style.circleSlider__next)}>
            <img src={DarkArrow} />
          </div>
        </div>
      </div>
      <div className={style.circleSlider__numbers}>
        <AnimatedNumber
          number={category?.from || 0}
          className={style.circleSlider__from}
        />
        <AnimatedNumber
          number={category?.to || 0}
          className={style.circleSlider__to}
        />
      </div>
    </div >
  );
};
