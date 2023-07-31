"use client"
import styles from './page.module.css'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { motion, Variants, useAnimation } from 'framer-motion';
import React, { useState, useEffect, use } from 'react';
import Link from 'next/link';

interface Props {
  emoji: string;
  hueA: number;
  hueB: number;
}

const cardVariants: Variants = {
  offscreen: {
    y: 300
  },
  onscreen: {
    y: 50,
    rotate: -10,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8
    }
  }
};

const hue = (h: number) => `hsl(${h}, 100%, 50%)`;

function Card({ emoji, hueA, hueB }: Props) {
  const background = `linear-gradient(306deg, ${hue(hueA)}, ${hue(hueB)})`;

  return (
    <motion.div
      className="card-container"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
    >
      <div className="splash" style={{ background }} />
      <motion.div className={styles.card} variants={cardVariants}>
        {emoji}
      </motion.div>
    </motion.div>
  );
}


const OurJourneyStartSection: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className='pt-10 h-screen flex flex-col justify-end items-center'>
      <div className='flex flex-col justify-end items-center h-4/6 max-w-sm lg:max-w-lg 2xl:max-w-xl sm:mt-10 '>
        <img src='/img/logo1.png' className='object-cover w-3/4 lg:w-full'></img>
      </div>

      <div className='w-5 flex flex-col justify-end items-center h-2/6'>
        <div className={`w-5 h-1/6 ${styles.line}`}>
        </div>
      </div>
    </motion.div >
  );
};


const OurJourneySection: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      id='section3'
      className='mr-5' >
      <VerticalTimeline className='mr-0'>
        {/* <VerticalTimelineElement
          className="vertical-timeline-element--work"
          // contentStyle={{ background: 'rgba(82, 71, 59,1)', color: '#fff' }}
          // contentArrowStyle={{ borderRight: '7px solid  rgba(82, 71, 59,1)' }}
          date="2011 - present"
          // iconStyle={{ background: 'rgba(82, 71, 59,1)', color: '#fff' }}
        // icon={<WorkIcon />}
        >
          <Card emoji="👋" hueA={0} hueB={120} />
        </VerticalTimelineElement> */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2010 - 2011"
          iconStyle={{ background: 'rgba(82, 71, 59,1)', color: '#fff' }}
        // icon={<WorkIcon />}
        >
          <h1 className="vertical-timeline-element-title font-bold">Requirement Gathering with Ruth</h1>
          <p>
            Team 3A and 3B had a fantastic meeting with our esteemed client, Ruth, 
            at the Hunterian Museum. It was a delightful experience to explore the museum 
            together and gain invaluable insights about the artifacts and the project. We took 
            the opportunity to clarify any questions and concerns, ensuring a clear understanding 
            of the project's scope.  We are thrilled and eager to embark on the next phase of the project!
          </p>
          <p>
            Click <a className="text-amber-600"><Link href='/info'>here</Link></a>  to know more about what we gathered!
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2010 - 2011"
          iconStyle={{ background: 'rgba(82, 71, 59,1)', color: '#fff' }}
        // icon={<WorkIcon />}
        >
          <h1 className="vertical-timeline-element-title font-bold">Brainstorming with Team 3B</h1>
          <p>
            Team 3A had a productive meeting with Team 3B to kickstart our ideation process. 
            We gathered and brainstormed feasible ideas, ensuring there was no overlap between 
            our teams. We explored diverse solutions that meet all the criteria. By the end of the 
            day, Team 3A reached a consensus on three promising ideas!          </p>
          <p>
            Click <a className="text-amber-600"><Link href='/brainstormW3B'>here</Link></a> to be in the meeting with us!
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2010 - 2011"
          iconStyle={{ background: 'rgba(82, 71, 59,1)', color: '#fff' }}
        // icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title font-bold">Prototype/Storyboard</h3>
          <h4 className="vertical-timeline-element-subtitle ">Bug Collectibles</h4>
          <p>
            The game involves placing QR codes at bug exhibits throughout the museum. Kids can scan the codes to capture digital versions of bugs on their smartphones or provided devices. Each visit allows three random bug captures, encouraging repeat visits to collect different bugs. The digital bugs ask questions that require exploring the museum for answers, promoting learning. Correct answers may earn special bug cards, and kids can trade bugs with other visitors to complete their collection.
          </p>
          <p>
            Click <Link href='/info'>here</Link> for more information on the game!
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2010 - 2011"
          iconStyle={{ background: 'rgba(82, 71, 59,1)', color: '#fff' }}
        // icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title font-bold">Prototype/Storyboard</h3>
          <h4 className="vertical-timeline-element-subtitle ">Qr Code Quiz Trivia
          </h4>
          <p>
            The QR Code quiz/game is a museum scavenger hunt where visitors scan a QR code at the entrance, leading them on an adventure to find a mystery object. By solving quizzes and games related to exhibits, they receive hints to locate QR codes hidden throughout the museum. When the initial QR code matches the object's QR code, they win the game.
          </p>
          <p>
            Click <Link href='/info'>here</Link> for more information on the game!
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2010 - 2011"
          iconStyle={{ background: 'rgba(82, 71, 59,1)', color: '#fff' }}
        // icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title font-bold">Prototype/Storyboard</h3>
          <h4 className="vertical-timeline-element-subtitle ">Multiplayer Co-Op
          </h4>
          <p>
            The game is a multiplayer co-op where two players work together. One player gathers information from Part A location, and the other player gathers information from Part B location. To win, they must collaborate and share their findings to uncover the full information. Teamwork is essential for success.          </p>
          <p>
            Click <Link href='/info'>here</Link> for more information on the game!
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2010 - 2011"
          iconStyle={{ background: 'rgba(82, 71, 59,1)', color: '#fff' }}
        // icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title font-bold">Sharing Session with Ruth</h3>

          <p>
            We conducted an update meeting with Ruth to present our ideas and receive valuable feedback. During the meeting, we received helpful tips to enhance our proposals. Ruth shared her opinions and preferences regarding our ideas, providing us with valuable insights for further refinement.
          </p>
          <p>
            Click <a className="text-amber-600"><Link href='/zoomWRuth'>here</Link></a> to hear more about what was discussed!

          </p>
        </VerticalTimelineElement>


        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2010 - 2011"
          iconStyle={{ background: 'rgba(82, 71, 59,1)', color: '#fff' }}
        // icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title font-bold">Product Refinement</h3>

          <p>
            The team convened to have a comprehensive discussion about the project, and after careful consideration, it was decided to merge Idea 1 and Idea 2 into a cohesive concept. Excitement grew as the team moved forward with creating a High-Fidelity prototype to bring this combined vision to life!
          </p>
          <p>
            Click <Link href='/info'>here</Link> for more information on the game!
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2010 - 2011"
          iconStyle={{ background: 'rgba(82, 71, 59,1)', color: '#fff' }}
        // icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title font-bold">Testing prototype at the Museum</h3>

          <p>
            The team went to The Hunterian Museum to test out our prototype to ensure its usability and smooth flow of user experience.
          </p>
          <p>
            Chek out the video <a className="text-amber-600"><Link href='https://youtu.be/leZ4pftF0d4'>here</Link></a>!
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2010 - 2011"
          iconStyle={{ background: 'rgba(82, 71, 59,1)', color: '#fff' }}
        // icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title font-bold"> Meeting with Ruth</h3>

          <p>
            The team met up with Ruth to discuss our finalize idea to identify gaps and areas of improvements.
          </p>
          <p>
            Check out our meeting here.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2010 - 2011"
          iconStyle={{ background: 'rgba(82, 71, 59,1)', color: '#fff' }}
        // icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title font-bold"> Deployment Phase</h3>

          <p>
            TBC
          </p>
          <p>
            TBC

          </p>
        </VerticalTimelineElement>


        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2010 - 2011"
          iconStyle={{ background: 'rgba(82, 71, 59,1)', color: '#fff' }}
        // icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title font-bold"> Usability Testing</h3>

          <p>
            TBC
          </p>
          <p>
            TBC

          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </motion.div >
  );
};


const MainPage: React.FC = () => {
  const controls = useAnimation();

  const handleClick = async () => {
    // Scroll to Section 3
    const section3Element = document.getElementById('section3');
    if (section3Element) {
      await controls.start({
        opacity: 0,
        transition: { duration: 0.3 },
      });
      section3Element.scrollIntoView({ behavior: 'smooth' });
      await controls.start({
        opacity: 1,
        transition: { duration: 0.3 },
      });
    }
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={controls}
      exit={{ opacity: 0 }}
      className='pt-10 h-screen flex flex-col justify-end items-center'
    >
      <button className='rounded-full' onClick={handleClick}> click</button>
    </motion.div>
  );
};



export default function Home() {

  // const [isVisible, setIsVisible] = useState(true);
  // const [prevScrollPos, setPrevScrollPos] = useState(0);
  // const controls = useAnimation();

  // const handleScroll = () => {
  //   const section1Element = document.getElementById('section1');
  //   const section2Element = document.getElementById('section2');


  //   if (!section1Element || !section2Element) return;

  //   const section1BtmPos = section1Element?.offsetTop + section1Element?.clientHeight;
  //   const section2OffsetTop = section2Element?.offsetTop;
  //   const treshold = 30;
  //   // console.log(section2OffsetTop)
  //   // if (section2OffsetTop) {
  //   //   setIsVisible(currentScrollPos < section2OffsetTop || currentScrollPos < prevScrollPos);

  //   // }

  //   // const scrollPos = wi



  //   setIsVisible(section1BtmPos - section2OffsetTop > treshold);
  //   // setPrevScrollPos(currentScrollPos);
  // };

  // useEffect(() => {
  //   controls.start({ opacity: isVisible ? 1 : 0 });
  // }, [isVisible, controls]);

  // useEffect(() => {
  //   window.addEventListener('scroll', handleScroll);
  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, []);

  return (
    <div className="block justify-center item-center overflow-y-scroll h-screen">
      <MainPage />
      <OurJourneyStartSection />
      <OurJourneySection />

    </div>
  );
}
