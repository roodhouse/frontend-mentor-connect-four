import React from 'react'
import GameOnHeader from './gameOn/GameOnHeader'

function GameOn() {
  return (
    <>
        <div id="gameOnContainer">
            <div id="gameOnHeaderWrapper" className='mb-[50px]'>
                <GameOnHeader />
            </div>
        </div>
    </>
  )
}

export default GameOn