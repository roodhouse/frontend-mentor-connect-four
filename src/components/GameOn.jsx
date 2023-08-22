import React from 'react'
import GameOnHeader from './gameOn/GameOnHeader'
import PlayerCard from './gameOn/PlayerCard'
import GameGrid from './gameOn/GameGrid'
import BottomCard from './gameOn/BottomCard'

function GameOn() {
  return (
    <>
        <div id="gameOnContainer">
            <div id="gameOnHeaderWrapper" className='mb-[50px]'>
                <GameOnHeader />
            </div>
            <div id="playerCardWrapper" className='mb-[50px]'>
                <PlayerCard />
            </div>
            <div id="gameGridWrapper" className=''>
                <GameGrid />
            </div>
            <div id="bottomCardWrapper" className=''>
                <BottomCard />
            </div>
        </div>
    </>
  )
}

export default GameOn