import React from 'react'
import { motion } from 'framer-motion'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
import '../styles/components/Blog.scss'
import Button from './Button'

function Blog({ image, title, subTitle, variants, animate }) {
  return (
    <motion.div className='blog-container' variants={variants} animate={animate}>
      <div className='image'>
        <img src={image} alt='Blog' />
      </div>
      <div className='content'>
        <div className='title'>
          <h3>{title}</h3>
        </div>
        <div className='subTitle'>
          <p>{subTitle}</p>
        </div>
        <Button content='Read more' color='inverse' icon={<HiOutlineArrowNarrowRight />} />
      </div>
    </motion.div>
  )
}

export default Blog
