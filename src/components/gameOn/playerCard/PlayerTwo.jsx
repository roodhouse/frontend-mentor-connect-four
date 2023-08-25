import React from 'react'
import { useCompetition } from '../../../context/Competition'

function PlayerTwo() {

  // change the background image of player2 based and name on the competition

  const { playerTwoCpuScore, setPlayerTwoCpuScore, competition } = useCompetition()

  return (
    <>
        <div id="playerTwoContainer">
            <div id="playerTwoBlock" className='flex flex-col justify-center items-center py-[10px] bg-white rounded-[20px] border-[3px] border-black shadow-[0px_10px_0px_0px_#000] w-[142px] md:w-[272px] md:h-[100px] xl:w-[141px] xl:h-[160px] md:flex-row md:pl-5 md:pr-11 md:justify-around md:py-[14px] xl:flex-col xl:p-0 xl:justify-end'>
                <div id="playerTwo" className='text-base leading-normal font-bold md:text-xl md:leading-normal md:order-2 xl:order-1'>
                  <p>{ competition === 'Human' ? (
                    'PLAYER 2'
                  ) : (
                    'CPU'
                  ) }</p>
                </div>
                <div id="playerTwoScore" className='text-[32px] text-center leading-normal font-bold md:text-[56px] md:order-1 xl:order-2'>
                  <p>{playerTwoCpuScore}</p>
                </div>
            </div>
            <div id="playerTwoFace" className='relative'>
                <div className='w-[54px] h-[59px] bg-no-repeat absolute bottom-[22px] left-[109px] md:left-[88%] md:bottom-[18px] xl:bottom-[125px] xl:left-[32%]' style={{
                  backgroundImage: `url(./assets/images/${ competition === 'Human' ? 'player-two' : 'cpu'}.svg)`
                }} />
            </div>
        </div>
    </>
  )
}

export default PlayerTwo

// bg-[url("./assets/images/${ competition === 'Human' ? 'player-one' : 'you'}.svg")]