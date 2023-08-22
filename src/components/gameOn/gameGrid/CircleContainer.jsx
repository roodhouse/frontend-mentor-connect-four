import React from 'react'
import Circle from './circle/Circle'

function CircleContainer({index}) {
  return (
    <>
        <div id={'parentCircle'+index} className='w-[34px] h-[34px] rounded-[50%] bg-red bg-contain bg-no-repeat mr-[13px]'>
            {/* <Circle /> */}
        </div>
    </>
  )
}

export default CircleContainer