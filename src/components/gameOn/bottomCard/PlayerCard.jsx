import React from 'react'

function PlayerCard() {
  return (
    <>
        <div id='bottomPlayerContainer' className='bg-[url("./assets/images/turn-background-red.svg")] w-[191px] h-[150px] bg-contain bg-no-repeat flex flex-col justify-center items-center absolute top-[-20px] z-30 left-[26%] pt-[41px] pb-4'>
                <div id="bottomPlayerContainer" className='text-base leading-normal font-bold text-center text-white pr-8 pl-5'>
                    <p>PLAYER 1'S TURN</p>
                </div>
                <div id="countdown" className='text-center text-[56px] leading-normal font-bold text-white'>
                    <p>15s</p>
                </div>

        </div>
    </>
  )
}

export default PlayerCard