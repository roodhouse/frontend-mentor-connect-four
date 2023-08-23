import React from 'react'
import WhiteCircleContainer from './gameGrid/WhiteCircleContainer'
import BlackCircleContainer from './gameGrid/BlackCircleContainer'
import CircleContainer from './gameGrid/CircleContainer'

// need to change the gap size?
// create custom white and black grid based off of grid then adjust piece grid

function GameGrid() {
  return (
    <>
        <div id="gameGridContainer" className='relative h-[310px'>
          {/* <div id="whiteGrid" className='bg-white'>
          {Array.from({ length: 42 }).map((_, index) => (
                <WhiteCircleContainer key={index}  index={index} />
            ))}
          </div>

          <div id="blackGrid" className='bg-black'>
          {Array.from({ length: 42 }).map((_, index) => (
                <BlackCircleContainer key={index}  index={index} />
            ))}
          </div> */}
        
            <div id="whiteLayer" className=' hidden w-[335px] h-[310px] bg-[url("./assets/images/board-layer-white-small.svg")] absolute z-20'/>
            {/* <div id="circleLayerWrapper" className='w-[335px] h-[310px] flex flex-wrap ml-[10px] items-center pt-[1px]'>
              {Array.from({ length: 42}).map((_, index) => (
                <CircleContainer key={index} index={index} />
              ))}
            </div> */}
            <div id="circleLayerWrapper" className='w-[335px] h-[310px] grid grid-cols-7'>
              {Array.from({ length: 42}).map((_, index) => (
                <CircleContainer key={index} index={index} />
              ))}
            </div>
            <div id="blackLayer" className='w-[335px] h-[310px] bg-[url("./assets/images/board-layer-black-small.svg")] absolute z-10 rounded-[20px] shadow-[0px_10px_0px_0px_#000]'/>
        </div>
    </>
  )
}

export default GameGrid