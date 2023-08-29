import React from 'react'
import { motion } from 'framer-motion'

function Circle() {
  return (
    <motion.div
      className='circle w-16 h-16 bg-[url("./assets/images/counter-red-large.svg")] bg-contain bg-no-repeat'
      initial={{ y: -100}} // init position above the column
      animate={{ y: 0 }} // target position at the bottom of the column
      transition={{ duration: 2 }} // duration of the transition
      />
  )
}

export default Circle