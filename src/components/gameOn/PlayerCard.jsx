import React from 'react'
import PlayerOne from './playerCard/PlayerOne'
import PlayerTwo from './playerCard/PlayerTwo'
import PlayerCpu from './playerCard/PlayerCpu'

function PlayerCard() {
  return (
    <>
        <div id="playerCardContainer">
            <div id="playerOneWrapper">
                <PlayerOne />
            </div>
            <div id="playerTwoWrapper">
                <PlayerTwo />
            </div>
            <div id="playerCpuWrapper" className='hidden'>
                <PlayerCpu />
            </div>
        </div>
    </>
  )
}

export default PlayerCard