"use client"
import styles from './page.module.css'
import ScrollingBox from './component/scrolling-box';
import { motion, useAnimation } from 'framer-motion';
import React, { useState, useEffect, use } from 'react';

interface Section1Props {
  isVisible: boolean;
}

const Section1: React.FC<Section1Props> = ({ isVisible }) => {
  return (
    <motion.div key="section1"
      initial={{ opacity: 1 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      exit={{ opacity: 0 }}
      className='pt-10 h-screen flex flex-col justify-end items-center'>
      <div className='flex flex-col justify-end items-center h-4/6 max-w-sm lg:max-w-lg 2xl:max-w-xl sm:mt-10 '>
        <img src='/img/logo1.png' className='object-cover w-3/4 lg:w-full'></img>
      </div>

      <div className='w-5 flex flex-col justify-end items-center h-2/6'>
        <div className={`w-5 h-1/6 ${styles.line}`}>
        </div>
      </div>
    </motion.div>
  );
};


const Section2: React.FC = () => {
  return (
    <div id='section2'
      className='pt-10 h-screen flex flex-col justify-end items-center'>
      <div className='flex flex-col justify-end items-center h-4/6 max-w-sm lg:max-w-lg 2xl:max-w-xl sm:mt-10 '>
        <img src='/img/logo1.png' className='object-cover w-3/4 lg:w-full'></img>
      </div>

      <div className='w-5 flex flex-col justify-start items-center h-2/6'>
        <div className={`w-5 h-1/6 ${styles.line}`}>
        </div>
      </div>
    </div>
  );
};



export default function Home() {

  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const controls = useAnimation();

  const handleScroll = () => {
    const section1Element = document.getElementById('section1');
    const section2Element = document.getElementById('section2');


    if (!section1Element || !section2Element) return;

    const section1BtmPos = section1Element?.offsetTop + section1Element?.clientHeight;
    const section2OffsetTop = section2Element?.offsetTop;
    const treshold = 30;
    // console.log(section2OffsetTop)
    // if (section2OffsetTop) {
    //   setIsVisible(currentScrollPos < section2OffsetTop || currentScrollPos < prevScrollPos);

    // }

    // const scrollPos = wi



    setIsVisible(section1BtmPos - section2OffsetTop > treshold);
    // setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    controls.start({ opacity: isVisible ? 1 : 0 });
  }, [isVisible, controls]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.div className="block justify-center item-center overflow-y-scroll h-screen">
      <Section1 isVisible={isVisible} />
      <Section2 />

    </motion.div>
  );
}
