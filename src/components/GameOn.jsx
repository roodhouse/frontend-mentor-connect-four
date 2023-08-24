import React from 'react'
import GameOnHeader from './gameOn/GameOnHeader'
import PlayerCard from './gameOn/PlayerCard'
import GameGrid from './gameOn/GameGrid'
import BottomCard from './gameOn/BottomCard'
import Pause from './gameOn/Pause'

function GameOn() {
  return (
    <>
        <div id="gameOnContainer">
            <div id="gameTopContainer" className='flex flex-col items-center'>
                <div id="gameOnHeaderWrapper" className='max-w-[375px] md:max-w-[632px] w-full mb-[50px] px-5 md:mb-8 md:px-0 xl:mb-[50px]'>
                    <GameOnHeader />
                </div>
                <div id="playerCardWrapper" className='max-w-[375px] md:max-w-[632px] xl:max-w-[initial] w-full mb-[50px] px-[9px] md:px-0 md:mb-8 xl:absolute xl:px-[124px] xl:pt-[272px] xl:mb-0'>
                    <PlayerCard />
                </div>
                <div id="gameGridWrapper" className='max-w-[375px] md:max-w-[632px] w-full px-5 md:p-0'>
                    <GameGrid />
                </div>
            </div>
            <div id="bottomCardWrapper" className=''>
                <BottomCard />
            </div>
            <div id="pauseMenuWrapper" className='hidden flex justify-center'>
                <Pause />
            </div>
        </div>
    </>
  )
}

export default GameOn