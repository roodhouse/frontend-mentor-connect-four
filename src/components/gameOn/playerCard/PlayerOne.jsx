import React from 'react'
import { useCompetition } from '../../../context/Competition'

function PlayerOne() {

  const { playerOneScore, setPlayerOneScore, competition } = useCompetition()

  console.log(competition)
  return (
    <>
        <div id="playerOneContainer">
            <div id="playerOneBlock" className='flex flex-col justify-center items-center py-[10px] bg-white rounded-[20px] border-[3px] border-black shadow-[0px_10px_0px_0px_#000] w-[142px] md:w-[272px] md:h-[100px] xl:w-[141px] xl:h-[160px] md:flex-row md:pl-11 md:pr-5 md:justify-around md:py-[14px] xl:flex-col xl:p-0 xl:justify-end'>
                <div id="playerOne" className='text-base leading-normal font-bold md:text-xl md:leading-normal'>
                  <p>{ competition === 'Human' ? (
                    'PLAYER 1'
                  ) : (
                    'YOU'
                  ) }</p>
                </div>
                <div id="playerOneScore" className='text-[32px] text-center leading-normal font-bold md:text-[56px]'>
                  <p>{playerOneScore}</p>
                </div>
            </div>
            <div id="playerOneFace" className='relative'>
                <div className='w-[54px] h-[59px] bg-no-repeat absolute bottom-[22px] right-[109px] md:right-[88%] md:bottom-[18px] xl:bottom-[125px] xl:right-[32%]' style={{
                  backgroundImage: `url(./assets/images/${ competition === 'Human' ? 'player-one' : 'you'}.svg)`
                }} />
            </div>
        </div>
    </>
  )
}

export default PlayerOne