import React from 'react'
import PlayerOne from './playerCard/PlayerOne'
import PlayerTwo from './playerCard/PlayerTwo'

function PlayerCard() {
  return (
    <>
        <div id="playerCardContainer" className='flex justify-around md:justify-between'>
            <div id="playerOneWrapper" className='mr-[21px] ml-[15px] md:mx-0'>
                <PlayerOne />
            </div>
            <div id="playerTwoWrapper" className='mr-[15px] md:mx-0'>
                <PlayerTwo />
            </div>
        </div>
    </>
  )
}

export default PlayerCard