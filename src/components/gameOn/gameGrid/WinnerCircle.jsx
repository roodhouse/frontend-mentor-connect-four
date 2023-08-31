import React from 'react'
import './circle.css'

function WinnerCircle({index}) {
  return (
    <>
        <div id={'winnerCircle-'+index} className='winningCircle w-5 h-5 rounded-[20px] border-[6px] border-transparent md:w-[34px] md:h-[34px]' />
    </>
  )
}

export default WinnerCircle