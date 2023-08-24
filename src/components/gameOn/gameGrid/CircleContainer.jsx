import React from 'react'

function CircleContainer({index}) {
  return (
    <>
        <div id={'parentCircle'+index} className='w-[35px] h-[38px] rounded-[50%] bg-transparent bg-contain bg-no-repeat md:w-16 md:h-16 md:ml-1' />
    </>
  )
}

export default CircleContainer