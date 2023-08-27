import React, { useEffect } from 'react'
import { useCompetition } from '../../../context/Competition'

function PlayerCard() {

  const { turn, setTurn, competition, cardStyle, cardBackground, turnText, setPlayerOneScore, playerOneScore, timer } = useCompetition()

  return (
    <>
        <div id='bottomPlayerContainer' className='w-[191px] h-[150px] bg-contain bg-no-repeat flex flex-col justify-center items-center relative top-[-20px] md:top-[-40px] z-30 left-1 pt-[41px] pb-4'
        style={{ backgroundImage: cardBackground() }}>
                <div id="bottomPlayerContainer" className='text-base leading-normal font-bold text-center text-white pr-8 pl-5' style={{
                  color: cardStyle()
                }}>
                    <p>{turnText()}</p>
                </div>
                <div id="countdown" className='text-center text-[56px] leading-normal font-bold text-white' style={{ color: cardStyle() }}>
                    <p>{timer}s</p>
                </div>

        </div>
    </>
  )
}

export default PlayerCard