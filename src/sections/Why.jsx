import React from 'react'
import '../styles/sections/Why.scss'
import Title from '../components/Title'
import { GoPlay } from 'react-icons/go'
import { useScroll } from '../components/useScroll'
import { topContainerAnimation, videoAnimation, reasonsAnimation } from '../utils/Animations'
import { motion } from 'framer-motion'

function Why() {
  const [element, controls] = useScroll()

  return (
    <div className='why-container' id='services' ref={element}>
      <div className='container'>
        <motion.div
          className='top'
          variants={topContainerAnimation}
          animate={controls}
          transition={{ duration: 1 }}
        >
          <Title title='Why CRYO' color='pink' lineCenter={true} />
          <div className='subTitle'>
            <p>
              Always stay updated with the technologies thus we help our clients by giving the best
              solutions for thier needs.
            </p>
          </div>
        </motion.div>
        <div className='content'>
          <motion.div
            variants={videoAnimation}
            animate={controls}
            transition={{ type: 'tween', duration: 0.5 }}
          >
            <div className='video'>
              <GoPlay />
            </div>
          </motion.div>
          <motion.div
            className='reasons'
            variants={reasonsAnimation}
            animate={controls}
            transition={{ type: 'tween', duration: 0.5 }}
          >
            <ul>
              <li>Over 10+ years of industry wide experience</li>
              <li>
                Provide solutions to our multiple global clients or website traffic generation and
                workflow
              </li>
              <li>Strong team of 150+ creative people</li>
              <li>99% adhere to service level contract</li>
              <li>Ready to receive service request 24/7</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Why
