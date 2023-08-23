import React from 'react'
import GameOnHeader from './gameOn/GameOnHeader'
import PlayerCard from './gameOn/PlayerCard'
import GameGrid from './gameOn/GameGrid'
import BottomCard from './gameOn/BottomCard'

function GameOn() {
  return (
    <>
        <div id="gameOnContainer">
            <div id="gameOnHeaderWrapper" className='mb-[50px] px-5'>
                <GameOnHeader />
            </div>
            <div id="playerCardWrapper" className='mb-[50px] px-[9px]'>
                <PlayerCard />
            </div>
            <div id="gameGridWrapper" className='px-5'>
                <GameGrid />
            </div>
            <div id="bottomCardWrapper" className=''>
                <BottomCard />
            </div>
            <div id="pauseMenu" className='h-screen absolute w-full top-0 bg-black opacity-50 z-40'>

            </div>
        </div>
    </>
  )
}

export default GameOn