import React from 'react'
import PlayerCard from './bottomCard/PlayerCard'
import WinCard from './bottomCard/WinCard'
// need to change the color and text based on whos turn it is

function BottomCard() {
  return (
    <>
        <div id="bottomCardContainer" className='w-full h-[236px] rounded-[60px_60px_0px_0px] bg-darkPurple flex justify-center relative'>
            <div id="playerCardWrapper" className='hidden' >
                <PlayerCard />
            </div>
            <div id="winCardWrapper" className='absolute z-50 top-[-20px]'>
                <WinCard />
            </div>
        </div>
    </>
  )
}

export default BottomCard