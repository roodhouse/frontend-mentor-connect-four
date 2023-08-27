import React, {useEffect, useRef} from 'react'
import PlayerCard from './bottomCard/PlayerCard'
import WinCard from './bottomCard/WinCard'
import { useCompetition } from '../../context/Competition'

function BottomCard() {
  const { playerOneScore, playerTwoCpuScore, winner } = useCompetition()
  const prevPlayerOneScoreRef = useRef(playerOneScore)
  const prevPlayerTwoCpuScoreRef = useRef(playerTwoCpuScore)

  useEffect(() => {
    const playerBottomCardWrapper = document.getElementById('playerBottomCardWrapper');
    const winCardWrapper = document.getElementById('winCardWrapper');

    // Check if either playerOneScore or playerTwoCpuScore has changed
    if (playerOneScore !== prevPlayerOneScoreRef.current ||
        playerTwoCpuScore !== prevPlayerTwoCpuScoreRef.current) {
      // Update the previous values
      prevPlayerOneScoreRef.current = playerOneScore;
      prevPlayerTwoCpuScoreRef.current = playerTwoCpuScore;

      // Your logic to add/remove classes here
      if (playerBottomCardWrapper && winCardWrapper) {
        playerBottomCardWrapper.classList.add('hidden');
        winCardWrapper.classList.remove('hidden');
      }
    }
  }, [playerOneScore, playerTwoCpuScore]);

  useEffect(() => {
    if ( winner === null ) {
      document.getElementById('bottomCardContainer').style.backgroundColor = '#5C2DD5'
    } else if (  winner === 'Player1') {
      document.getElementById('bottomCardContainer').style.backgroundColor = '#FD6687'
      document.getElementById('playerBottomCardWrapper').classList.add('hidden')
      document.getElementById('winCardWrapper').classList.remove('hidden')
    } else {
      document.getElementById('bottomCardContainer').style.backgroundColor = '#FFCE67'
      document.getElementById('playerBottomCardWrapper').classList.add('hidden')
      document.getElementById('winCardWrapper').classList.remove('hidden')
    }
  }, [winner])

  return (
    <>
        <div id="bottomCardContainer" className='w-full h-[236px] rounded-[60px_60px_0px_0px] flex justify-center relative'>
            <div id="playerBottomCardWrapper" className='' >
                <PlayerCard />
            </div>
            <div id="winCardWrapper" className='hidden h-[164px] absolute z-50 top-[-20px] md:top-[-40px]'>
                <WinCard />
            </div>
        </div>
    </>
  )
}

export default BottomCard