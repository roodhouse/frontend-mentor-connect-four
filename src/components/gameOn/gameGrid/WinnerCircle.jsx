import React from 'react'

function WinnerCircle({index}) {
  return (
    <>
        <div id={'winnerCircle'+index} className='w-5 h-5 rounded-[20px] border-[6px] border-transparent' />
    </>
  )
}

export default WinnerCircle