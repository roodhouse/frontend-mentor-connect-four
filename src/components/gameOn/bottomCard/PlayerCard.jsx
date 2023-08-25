import React from 'react'
import { useCompetition } from '../../../context/Competition'

function PlayerCard() {

  const { turn, competition } = useCompetition()

  return (
    <>
        <div id='bottomPlayerContainer' className='bg-[url("./assets/images/turn-background-red.svg")] w-[191px] h-[150px] bg-contain bg-no-repeat flex flex-col justify-center items-center relative top-[-20px] md:top-[-40px] z-30 left-1 pt-[41px] pb-4'>
                <div id="bottomPlayerContainer" className='text-base leading-normal font-bold text-center text-white pr-8 pl-5'>
                    <p>{ competition === 'Human' ? (
                      turn === 'Player1' ? (
                        `PLAYER 1'S TURN`
                      ) : (
                        `PLAYER 2'S TURN`
                      )
                    ) : (
                      turn === 'Player1' ? (
                        `YOUR TURN`
                      ) : (
                        `CPU'S TURN`
                      )
                    ) }</p>
                </div>
                <div id="countdown" className='text-center text-[56px] leading-normal font-bold text-white'>
                    <p>15s</p>
                </div>

        </div>
    </>
  )
}

export default PlayerCard