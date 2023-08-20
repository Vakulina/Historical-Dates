import React from 'react';
import './assets/styles/index.css'
import style from './App.module.scss';
import gsap from 'gsap';
import Swiper from 'swiper';
import 'swiper/css';
import { HistoryDates } from './components/HistoryDates/HistoryDates';

const App: React.FC = () => {
  return (
    <div className={style.app}>
      <HistoryDates/>
</div>
  );
};

export default App;
