import React from 'react'

function BottomCard() {
  return (
    <>
        <div id="bottomCardContainer" className='w-[375px] h-[236px] rounded-[60px_60px_0px_0px] bg-darkPurple flex justify-center'>
            <div id="bottomCard" className='bg-[url("./assets/images/turn-background-red.svg")] w-[191px] h-[150px] bg-contain bg-no-repeat flex flex-col justify-center items-center'>
                <div id="bottomPlayerContainer">
                    <p>PLAYER 1'S TURN</p>
                </div>
                <div id="countdown">
                    <p>15s</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default BottomCard