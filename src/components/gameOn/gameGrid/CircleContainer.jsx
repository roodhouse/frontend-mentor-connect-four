import React from 'react'
import Circle from './circle/Circle'

function CircleContainer({index}) {
  return (
    <>
        <div id={'parentCircle'+index} className='w-[35px] h-[38px] rounded-[50%] bg-transparent bg-contain bg-no-repeat'>
            {/* <Circle /> */}
        </div>
    </>
  )
}

export default CircleContainer