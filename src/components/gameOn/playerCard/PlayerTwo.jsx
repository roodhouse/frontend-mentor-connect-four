import React from 'react'

function PlayerTwo() {
  // change the background image of player2 based and name on the competition
  return (
    <>
        <div id="playerTwoContainer">
            <div id="playerTwoBlock" className='flex flex-col justify-center items-center py-[10px] bg-white rounded-[20px] border-[3px] border-black shadow-[0px_10px_0px_0px_#000] w-[142px]'>
                <div id="playerTwo" className='text-base leading-normal font-bold'>
                  <p>PLAYER 2</p>
                </div>
                <div id="playerTwoScore" className='text-[32px] text-center leading-normal font-bold'>
                  <p>23</p>
                </div>
            </div>
            <div id="playerTwoFace" className='relative'>
                <div className='w-[54px] h-[59px] bg-[url("./assets/images/player-two.svg")] bg-no-repeat absolute bottom-[22px] left-[109px]' />
            </div>
        </div>
    </>
  )
}

export default PlayerTwo