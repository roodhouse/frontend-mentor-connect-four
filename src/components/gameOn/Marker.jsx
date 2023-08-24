import React from 'react'

function Marker({index}) {
  return (
    <>
        <div id={'marker'+index} className='w-8 h-[26px] bg-transparent bg-contain bg-no-repeat ml-[52px]' />
    </>
  )
}

export default Marker