import React from 'react'
import { useCompetition } from '../../../context/Competition'

function CircleContainer({index}) {

  const { turn, setTurn, competition } = useCompetition()

  const handleClick = (e) => {
    turn === 'Player1' ? setTurn('Player2') : setTurn('Player1')
    const tile = e.target
    // turn === 'Player1' ? (
    //   tile.classList.remove('bg-transparent')
    //   tile.classList.add('bg-[url("./assets/images/counter-red-large.svg")]')
    // ) : (
    //   ''
    // )
  }

  return (
    <>
        <div id={'parentCircle'+index} onClick={handleClick} className='w-[35px] h-[38px] rounded-[50%] bg-transparent bg-contain bg-no-repeat md:w-16 md:h-16 md:ml-1 cursor-pointer' />
    </>
  )
}

export default CircleContainer