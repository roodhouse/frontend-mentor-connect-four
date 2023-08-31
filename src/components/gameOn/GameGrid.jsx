import React from 'react'
import WhiteCircleContainer from './gameGrid/WhiteCircleContainer'
import BlackCircleContainer from './gameGrid/BlackCircleContainer'
import CircleContainer from './gameGrid/CircleContainer'
import WinnerCircle from './gameGrid/WinnerCircle'

function GameGrid() {
  return (
    <>
        <div id="gameGridContainer" className='relative h-[310px] md:w-full md:h-[584px]'>
          <div id="whiteGrid" className='bg-[url("./assets/images/whiteGrid.svg")] bg-contain absolute bottom-0 h-full rounded-[20px] grid grid-cols-7 w-[335px] px-[10px] pt-[10px] pb-8 justify-items-center items-center z-20 md:w-full md:h-full md:pt-5 md:px-5 md:pb-[60px] pointer-events-none' />
          <div id="circleLayerWrapper" className='w-[335px] h-[310px] grid grid-cols-7 justify-items-center bottom-0 items-center absolute z-[15] pl-[10px] pr-[10px] pb-8 pt-[10px] md:w-full md:h-full md:pt-5 md:px-5 md:pb-[60px]'>
              {Array.from({ length: 42}).map((_, index) => (
                <CircleContainer key={index} index={index} />
              ))}
            </div>
            <div id="winnerCircleWrapper" className='w-[335px] h-[310px] grid grid-cols-7 bottom-0 z-[1] absolute pl-[10px] pr-[10px] pb-8 pt-[10px] md:w-full md:h-full md:pt-5 md:px-5 md:pb-[60px]'>
              {Array.from({ length: 42}).map((_, index) => (
                <WinnerCircle key={index} index={index} />
              ))}
            </div>
          <div id="blackGrid" className='absolute bg-[url("./assets/images/blackGrid.svg")] bg-cover top-0 h-full rounded-[27px] grid grid-cols-7 w-[335px] px-[10px] pt-[10px] pb-8 justify-items-center items-center z-10 shadow-[0px_10px_0px_0px_#000] md:w-full md:h-full md:pt-5 md:px-5 md:pb-[60px]' />
        </div>
    </>
  )
}

export default GameGrid