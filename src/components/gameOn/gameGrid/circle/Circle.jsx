import React from 'react'
import { motion } from 'framer-motion'

function Circle({yAxis, duration, pieceBackground}) {

  return (
    <motion.div
      className='circle w-[35px] h-[38px] md:w-[70px] md:h-[75px] bg-contain bg-no-repeat'
      initial={{ y: yAxis}} // init position above the column
      animate={{ y: 0 }} // target position at the bottom of the column
      transition={{ duration: duration }} // duration of the transition
      style={{ backgroundImage: pieceBackground }}
      />
  )
}

export default Circle