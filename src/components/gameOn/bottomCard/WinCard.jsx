import React from 'react'
import { useCompetition } from '../../../context/Competition'

function WinCard() {

  const { winner, competition, playAgain } = useCompetition()

  return (
    <>
        <div id="winCardContainer" className='w-[285px] h-full bg-white rounded-[20px] border-[3px] border-black shadow-[0px_10px_0px_0px_#000] flex flex-col py-[17px] items-center'>
            <div id="declareWinnerContainer" className='text-black text-center text-base font-bold leading-[1.3]'>
                <p>{ winner === 'Player1' ? (
                  competition === 'Human' ? (
                    'PLAYER 1'
                  ) : (
                    'YOU'
                  )
                ) : (
                  (
                    competition === 'Human' ? (
                      'PLAYER 2'
                    ) : (
                      'CPU'
                    )
                  )
                )}</p>
            </div>
            <div id="theWinContainer" className='text-center text-[56px] leading-[1.2] font-bold text-black'>
                <p>{ competition === 'Human' ? 'WINS' : 'WON' }</p>
            </div>
            <div id="playAgainContainer" onClick={playAgain} className='w-[130px] flex justify-center bg-darkPurple rounded-[20px] py-[9px] text-white text-base font-bold leading-normal pointer-events-none opacity-50 cursor-not-allowed'>
              <p>PLAY AGAIN</p>
            </div>
        </div>
    </>
  )
}

export default WinCard