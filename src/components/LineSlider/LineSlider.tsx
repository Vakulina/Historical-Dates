import React, { useContext } from 'react';
import { useRef, useEffect, FC } from 'react';
import style from './LineSlider.module.scss'
import { swiperParams } from './constants';
import Arrow from '../../assets/images/arrow.svg'
import classNames from 'classnames';
import { CategoryContext } from '../../context/categoryContext';
import './index.css'

//использован Swiper Element(WebComponent) https://swiperjs.com/react
export const LineSlider: FC = () => {
  const { category } = useContext(CategoryContext);
  const swiperElRef = useRef<HTMLElement & { initialize: () => void } | null>(null);

  const init = async () => {
    if (swiperElRef.current)  await Object.assign(swiperElRef.current, swiperParams);
    if (swiperElRef) await swiperElRef.current?.initialize();


    swiperElRef.current?.addEventListener('progress', (e: ProgressEvent<EventTarget>) => {
      //const [swiper, progress] = e.detail;
    //  console.log(e.target);
    });

    swiperElRef.current?.addEventListener('slidechange', (e) => {
      console.log('slide changed');
    });
  }

  useEffect(() => {
    init()
  }, []);

  return (
    <div className={style.lineSlider}>
      <swiper-container
        ref={swiperElRef}
        init="false"
      >
        {category && category.events?.map(slide => {
          return <swiper-slide key={slide.eventId}>
            <h3 className={style.lineSlider__title}>{slide.date}</h3>
            <p className={style.lineSlider__description}>{slide.description}</p>
          </swiper-slide>
        })}

      </swiper-container>
      <div className={classNames(style['swiper-button-prev'], 'swiper-button-prev')}>
        <img src={Arrow} className={style.lineSlider__btn_toLeft} />
      </div>
      <div className={classNames('swiper-button-next', style['swiper-button-next'])}>
        <img src={Arrow} />
      </div>
    </div>
  );
};
