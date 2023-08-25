import React from 'react'
import { useCompetition } from '../../../context/Competition'

function CircleContainer({index}) {

  // see gpt about how to search for hte e.target.id within the columms..
  const { turn, setTurn, competition, columns, marker, setMarker } = useCompetition()

  const handleClick = (e) => {
    if (turn === 'Player1') {
      console.log(e.target.id)
      const tile = e.target
      tile.classList.remove('bg-transparent')
      tile.classList.add('bg-[url("./assets/images/counter-red-small.svg")]','md:bg-[url("./assets/images/counter-red-large.svg")]')
      setTurn('Player2')
    } else {
      const tile = e.target
      tile.classList.remove('bg-transparent')
      tile.classList.add('bg-[url("./assets/images/counter-yellow-small.svg")]','md:bg-[url("./assets/images/counter-yellow-large.svg")]')
      setTurn('Player1')
    }
  }

  return (
    <>
        <div id={'parentCircle'+index} onClick={handleClick} className='w-[35px] h-[38px] rounded-[50%] bg-transparent bg-contain bg-no-repeat md:w-16 md:h-16 md:ml-1 cursor-pointer' />
    </>
  )
}

export default CircleContainer