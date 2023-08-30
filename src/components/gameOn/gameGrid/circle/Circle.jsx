import React from 'react'
import { motion } from 'framer-motion'

function Circle({yAxis}) {

  console.log(yAxis)
  return (
    <motion.div
      className='circle w-[35px] h-[38px] md:w-[70px] md:h-[75px] bg-[url("./assets/images/counter-red-large.svg")] bg-contain bg-no-repeat'
      initial={{ y: yAxis}} // init position above the column
      animate={{ y: 0 }} // target position at the bottom of the column
      transition={{ duration: 4 }} // duration of the transition
      />
  )
}

export default Circle