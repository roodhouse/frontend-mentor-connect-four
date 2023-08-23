import React from 'react'
import PlayerCard from './bottomCard/PlayerCard'
import WinCard from './bottomCard/WinCard'

function BottomCard() {
  return (
    <>
        <div id="bottomCardContainer" className='w-full h-[236px] rounded-[60px_60px_0px_0px] bg-darkPurple flex justify-center relative'>
            <div id="playerCardWrapper" className='' >
                <PlayerCard />
            </div>
            <div id="winCardWrapper" className='hidden h-[164px] absolute z-50 top-[-20px]'>
                <WinCard />
            </div>
        </div>
    </>
  )
}

export default BottomCard