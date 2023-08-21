import React, { useContext, useState } from 'react';
import { useRef, useEffect, FC } from 'react';
import { ICategory, IEvent } from '../../modeles/dataTDO';
import style from './CircleSlider.module.scss'
import { swiperParams } from './constants';
import DarkArrow from '../../assets/images/dark-arrow.svg'
import classNames from 'classnames';
import { CategoryContext } from '../../context/categoryContext';
import { addZero } from './utils';

//использован Swiper Element(WebComponent) https://swiperjs.com/react
export const CircleSlider: FC = () => {
  const { data, category, changeCategory } = useContext(CategoryContext);
  const swiperRef = useRef<HTMLElement & { initialize: () => void } | null>(null);
  const [activeSlide, setActiveSlide] = useState(1)


  const slides = data

  useEffect(() => {

    if (swiperRef.current) Object.assign(swiperRef.current, swiperParams);
    if (swiperRef.current?.initialize) swiperRef?.current?.initialize();

    swiperRef.current?.addEventListener('slidechange', (e: any) => {
      const [swiper] = e.detail;
      console.log(data ? data[swiper.activeIndex] : null)
      setActiveSlide(swiper.activeIndex + 1)
      //if(data&&changeCategory) console.log('category CURRENT', data[swiper.activeIndex-1], data)
      //if(category)console.log('category', category)
      if (data && changeCategory) changeCategory(data[swiper.activeIndex]);
    });
  }, []);


  useEffect(() => console.log(data), [data])
  useEffect(() => console.log(slides), [slides])
  return (
    <div className={style.circleSlider}>
      <swiper-container
        ref={swiperRef}
        init="false"
      >
        {slides?.map(slide => {
          return <swiper-slide key={slide.id}>
            <div className={style.circleSlider__circle}></div>
          </swiper-slide>
        })}

      </swiper-container>
      <div className={style.circleSlider__pagination}>
        {`${addZero(activeSlide)}/${addZero(data!.length)}`}
        <div className={style.circleSlider__btns}>
        <div className={classNames('circle-swiper-button-prev', style.circleSlider__prev)}>
          <img src={DarkArrow} className={style.circleSlider__btn_toLeft} />
        </div>
        <div className={classNames('circle-swiper-button-next', style.circleSlider__next)}>
          <img src={DarkArrow} />
        </div>
        </div>
      </div>
    </div >
  );
};