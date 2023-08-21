import React from 'react'
import PlayerOne from './playerCard/PlayerOne'
import PlayerTwo from './playerCard/PlayerTwo'
import PlayerCpu from './playerCard/PlayerCpu'

function PlayerCard() {
  return (
    <>
        <div id="playerCardContainer" className='flex justify-around'>
            <div id="playerOneWrapper" className='mr-[21px] ml-[15px]'>
                <PlayerOne />
            </div>
            <div id="playerTwoWrapper" className='mr-[15px]'>
                <PlayerTwo />
            </div>
        </div>
    </>
  )
}

export default PlayerCard