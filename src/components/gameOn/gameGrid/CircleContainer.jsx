import React from 'react'
import { useCompetition } from '../../../context/Competition'

function CircleContainer({index}) {

  const { turn, setTurn, columns, setMarker, playerOneArray, setPlayerOneArray, 
          playerTwoArray, setPlayerTwoArray, allowedToClick, setAllowedToClick  } = useCompetition()

  const handleClick = (e) => {
    const tile = e.target
    let pieceId = tile.id
    if ( allowedToClick.includes(pieceId)) {
      let pieceArray = (pieceId.split('-'))
        if (pieceArray[1] > 6) {
          let newClickable = pieceArray[1] - 7
          newClickable = 'parentCircle-'+newClickable
          setAllowedToClick([...allowedToClick, newClickable])
        }
  
      if ( tile.style.background === '') {
        if ( turn === 'Player1' ) {
          if ( window.innerWidth < 768 ) {
            tile.style.background = 'url("./assets/images/counter-red-small.svg")'
            tile.style.backgroundSize = 'contain'
            tile.style.backgroundRepeat = 'no-repeat'
          } else if ( window.innerWidth >= 768 ) {
            tile.style.background = 'url("./assets/images/counter-red-large.svg")'
            tile.style.backgroundSize = 'contain'
            tile.style.backgroundRepeat = 'no-repeat'
          }
          setPlayerOneArray([...playerOneArray, tile.id])
          setTurn('Player2')
        } else if ( turn === 'Player2') {
          if ( window.innerWidth < 768 ) {
            tile.style.background = 'url("./assets/images/counter-yellow-small.svg")'
            tile.style.backgroundSize = 'contain'
            tile.style.backgroundRepeat = 'no-repeat'
          } else if ( window.innerWidth >= 768 ) {
            tile.style.background = 'url("./assets/images/counter-yellow-large.svg")'
            tile.style.backgroundSize = 'contain'
            tile.style.backgroundRepeat = 'no-repeat'
          }
          setPlayerTwoArray([...playerTwoArray, tile.id])
          setTurn('Player1')
        }
      } else {
        return
      }
    } else {
      console.log('nay')
    }
    // find the correct column and place the marker
    const clickedCircle = e.target.id
    let columnIndex = -1

    for (const [colName, columnItems] of Object.entries(columns)) {
      if (columnItems.includes(clickedCircle)) {
        columnIndex = parseInt(colName.slice(3), 10)
        break;
      }
    }

    if (columnIndex !== -1) {
      let markerCol = `col${columnIndex}`
      setMarker(columns[markerCol][0])
    } else {
      console.log('not found')
    }
  }

  return (
    <>
        <div id={'parentCircle-'+index} onClick={handleClick} className='w-[35px] h-[38px] rounded-[50%] md:w-16 md:h-16 md:ml-1 cursor-pointer' />
    </>
  )
}

export default CircleContainer