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
            <div id="gameOnHeaderWrapper" className='mb-[50px] px-5 md:mb-8 md:px-0'>
                <GameOnHeader />
            </div>
            <div id="playerCardWrapper" className='mb-[50px] px-[9px] md:px-0'>
                <PlayerCard />
            </div>
            <div id="gameGridWrapper" className='px-5 md:p-0'>
                <GameGrid />
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