import React from 'react'

function PlayerOne() {
  return (
    <>
        <div id="playerOneContainer">
            <div id="playerOneBlock" className='flex flex-col justify-center items-center py-[10px] bg-white rounded-[20px] border-[3px] border-black shadow-[0px_10px_0px_0px_#000] w-[142px]'>
                <div id="playerOne" className='text-base leading-normal font-bold'>
                  <p>PLAYER 1</p>
                </div>
                <div id="playerOneScore" className='text-[32px] text-center leading-normal font-bold'>
                  <p>12</p>
                </div>
            </div>
            <div id="playerOneFace" className='relative'>
                <div className='w-[54px] h-[59px] bg-[url("./assets/images/player-one.svg")] bg-no-repeat absolute bottom-[22px] right-[109px]' />
            </div>
        </div>
    </>
  )
}

export default PlayerOne