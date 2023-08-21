import React from 'react'
import GameOnHeader from './gameOn/GameOnHeader'
import PlayerCard from './gameOn/PlayerCard'

function GameOn() {
  return (
    <>
        <div id="gameOnContainer">
            <div id="gameOnHeaderWrapper" className='mb-[50px]'>
                <GameOnHeader />
            </div>
            <div id="playerCardWrapper">
                <PlayerCard />
            </div>
        </div>
    </>
  )
}

export default GameOn