import React from 'react'

function HowToPlay() {
  return (
    <>
      <div id="howToContainer">
        <div id="howToHeading" className='text-purple text-xl font-bold leading-normal mb-4'>
          <h2>HOW TO PLAY</h2>
        </div>
        <div id="howToCopy" className='text-base leading-normal font-medium'>
          <p className='pl-[25px] indent-[-25px]'><span className='mr-4 font-bold text-base'>1</span><span className='font-medium opacity-[0.6611]'>Red goes first in the first game.</span></p>
          <p className='pl-[25px] indent-[-25px]'><span className='mr-4 font-bold text-base'>2</span><span className='font-medium opacity-[0.6611]'>Players must alternate turns, and only one disc can be dropped in each turn.</span></p>
          <p className='pl-[25px] indent-[-25px]'><span className='mr-4 font-bold text-base'>3</span><span className='font-medium opacity-[0.6611]'>The game ends when there is a 4-in-a-row or a stalemate.</span></p>
          <p className='pl-[25px] indent-[-25px]'><span className='mr-4 font-bold text-base'>4</span><span className='font-medium opacity-[0.6611]'>The starter of the previous game goes second on the next game.</span></p>
        </div>
      </div>
    </>
  )
}

export default HowToPlay