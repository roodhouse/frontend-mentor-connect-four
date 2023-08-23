import React from 'react'
import WhiteCircleContainer from './gameGrid/WhiteCircleContainer'
import BlackCircleContainer from './gameGrid/BlackCircleContainer'
import CircleContainer from './gameGrid/CircleContainer'

function GameGrid() {
  return (
    <>
        <div id="gameGridContainer" className='relative h-[310px]'>
          <div id="whiteGrid" className='bg-white h-full rounded-[20px] border-[3px] border-black grid grid-cols-7 w-[335px] px-[10px] pt-[10px] pb-8 justify-items-center items-center relative z-10'>
          {Array.from({ length: 42 }).map((_, index) => (
                <WhiteCircleContainer key={index}  index={index} />
            ))}
          </div>

          <div id="circleLayerWrapper" className='w-[335px] h-[310px] grid grid-cols-7 justify-items-center bottom-0 items-center absolute z-30 border-[3px] border-transparent pl-[10px] pr-[10px] pb-8 pt-[10px]'>
              {Array.from({ length: 42}).map((_, index) => (
                <CircleContainer key={index} index={index} />
              ))}
            </div>

          <div id="blackGrid" className='absolute top-0 h-full rounded-[20px] border-[3px] border-black grid grid-cols-7 w-[335px] px-[10px] pt-[10px] pb-8 justify-items-center items-center z-20 shadow-[0px_10px_0px_0px_#000]'>
          {Array.from({ length: 42 }).map((_, index) => (
                <BlackCircleContainer key={index}  index={index} />
            ))}
          </div>
        </div>
    </>
  )
}

export default GameGrid