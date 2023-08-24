import React from 'react'
// drop-shadow-[0px_10px_0px_#000]

function BlackCircleContainer({index}) {
  return (
    <>
      <div id={'blackCircle'+index} className='w-[34px] h-[34px] bg-purple rounded-[50%] border-[3px] border-black shadow-[inset_0px_10px_0px_0px_#000] md:w-16 md:h-16' />
    </>
  )
}

export default BlackCircleContainer