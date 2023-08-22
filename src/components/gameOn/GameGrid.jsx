import React from 'react'

function GameGrid() {
  return (
    <>
        <div id="gameGridContainer" className='relative h-[310px]'>
            <div id="whiteLayer" className='w-[335px] h-[310px] bg-[url("./assets/images/board-layer-white-small.svg")] absolute z-20'/>
            <div id="blackLayer" className='w-[335px] h-[310px] bg-[url("./assets/images/board-layer-black-small.svg")] absolute z-10 rounded-[20px] shadow-[0px_10px_0px_0px_#000]'/>
        </div>
    </>
  )
}

export default GameGrid