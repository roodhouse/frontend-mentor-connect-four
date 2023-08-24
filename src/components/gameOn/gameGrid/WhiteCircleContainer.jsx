import React from 'react'

function WhiteCircleContainer({index}) {
  return (
    <>
      <div id={'whiteCircle'+index} className='w-[34px] h-[34px] bg-purple rounded-[50%] border-[3px] border-black md:w-16 md:h-16'>
      </div>
    </>
  )
}

export default WhiteCircleContainer