import React from 'react';
import { useRef, useEffect, FC } from 'react';
import { register } from 'swiper/element/bundle';
import { IEvent } from '../../modeles/dataTDO';
import style from './LineSlider.module.scss'
import Swiper from 'swiper';
import { swiperParams } from './constants';
import Arrow from '../../assets/images/arrow.svg'
import classNames from 'classnames';

interface LineSliderProps {
  slides: IEvent[];
}

export const LineSlider: FC<LineSliderProps> = ({ slides }) => {
  const swiperElRef = useRef<HTMLElement & { initialize: () => void } | null>(null);

  useEffect(() => {

    if (swiperElRef.current) Object.assign(swiperElRef.current, swiperParams);

    swiperElRef.current?.initialize();
    swiperElRef.current?.addEventListener('progress', (e: ProgressEvent<EventTarget>) => {
      //const [swiper, progress] = e.detail;
      console.log(e.target);
    });

    swiperElRef.current?.addEventListener('slidechange', (e) => {
      console.log('slide changed');
    });
  }, []);

  return (
    <div className={style.lineSlider}>
      <swiper-container
        ref={swiperElRef}
        init="false"
      >
        {slides && slides.map(slide => {
          return <swiper-slide key={slide.eventId}>
            <h3 className={style.lineSlider__title}>{slide.date}</h3>
            <p className={style.lineSlider__description}>{slide.description}</p>
          </swiper-slide>
        })}

      </swiper-container>
      <div className={classNames(style['swiper-button-prev'], 'swiper-button-prev')}>
        <img src={Arrow} className={style.lineSlider__btn_toLeft}/>
      </div>
      <div className={classNames('swiper-button-next', style['swiper-button-next'])}>
        <img src={Arrow} />
      </div>
    </div>
  );
};
