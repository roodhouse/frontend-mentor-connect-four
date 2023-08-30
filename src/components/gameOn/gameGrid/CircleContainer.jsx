import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useCompetition } from '../../../context/Competition'
import Circle from './circle/Circle'
import './circle.css'

// integrate the old code with new code so far

function CircleContainer({index}) {

  const { turn, setTurn, columns, setMarker, playerOneArray, setPlayerOneArray, 
          playerTwoArray, setPlayerTwoArray, allowedToClick, setAllowedToClick, resetTimer, winner  } = useCompetition()
  
  const [ circlePosition, setCirclePosition ] = useState(null)

  // const handleClick = (e) => {

  //   const tile = e.target
  //   let pieceId = tile.id
  //   if ( winner === null ) {
  //     if ( allowedToClick.includes(pieceId)) {
  //       let pieceArray = (pieceId.split('-'))
  //         if (pieceArray[1] > 6) {
  //           let newClickable = pieceArray[1] - 7
  //           newClickable = 'parentCircle-'+newClickable
            
  //           let newArray = allowedToClick.filter((item) => item !== pieceId ) 
  //           newArray.push(newClickable)
  //           setAllowedToClick(newArray)
  //         }
    
  //       if ( tile.style.background === '') {
  //         if ( turn === 'Player1' ) {
  //           if ( window.innerWidth < 768 ) {
  //             tile.style.background = 'url("./assets/images/counter-red-small.svg")'
  //             tile.style.backgroundSize = 'contain'
  //             tile.style.backgroundRepeat = 'no-repeat'
  //           } else if ( window.innerWidth >= 768 ) {
  //             tile.style.background = 'url("./assets/images/counter-red-large.svg")'
  //             tile.style.backgroundSize = 'contain'
  //             tile.style.backgroundRepeat = 'no-repeat'
  //           }
  //           setPlayerOneArray([...playerOneArray, tile.id])
  //           setTurn('Player2')
  //         } else if ( turn === 'Player2') {
  //           if ( window.innerWidth < 768 ) {
  //             tile.style.background = 'url("./assets/images/counter-yellow-small.svg")'
  //             tile.style.backgroundSize = 'contain'
  //             tile.style.backgroundRepeat = 'no-repeat'
  //           } else if ( window.innerWidth >= 768 ) {
  //             tile.style.background = 'url("./assets/images/counter-yellow-large.svg")'
  //             tile.style.backgroundSize = 'contain'
  //             tile.style.backgroundRepeat = 'no-repeat'
  //           }
  //           setPlayerTwoArray([...playerTwoArray, tile.id])
  //           setTurn('Player1')
  //         }
  //       } else {
  //         return
  //       }
  //     } else {
  //       console.log('nay')
  //       return
  //     }
  //     // find the correct column and place the marker
  //     const clickedCircle = e.target.id
  //     let columnIndex = -1
  
  //     for (const [colName, columnItems] of Object.entries(columns)) {
  //       if (columnItems.includes(clickedCircle)) {
  //         columnIndex = parseInt(colName.slice(3), 10)
  //         break;
  //       }
  //     }
  
  //     if (columnIndex !== -1) {
  //       let markerCol = `col${columnIndex}`
  //       setMarker(columns[markerCol][0])
  //     } else {
  //       console.log('not found')
  //     }
  //     console.log('circle container reset')
  //     resetTimer()
  //   } else if (winner !== null) {
  //     console.log(' a winner found ')
  //   }
  // }

  const handleClick = (e) => {
   let circleLayerWrapper = e.target.parentElement
  //  circleLayerWrapper.classList.replace('z-[100]', 'z-[15]')
    const clickX = e.clientX
    const clickY = e.clientY
    
    setCirclePosition({ x: clickX, y: clickY })

    setTimeout(() => {
      // circleLayerWrapper.classList.replace('z-[15]', 'z-[100]')
      // find the all black circles and if they have a piece then change their box shadow to 0 

      // error here 

      
      console.log(e.target)
      let blackTarget = e.target.id.split('-')
      blackTarget = blackTarget[1]
      console.log(blackTarget)
      blackTarget = 'blackCircle-' + blackTarget
      console.log(blackTarget)
      blackTarget = document.getElementById(blackTarget)
      console.log(blackTarget)
      blackTarget.style.boxShadow = '0px 0px 0px 0px'

    }, 2200)

  }

  // circleLayerWrapper z-index = 100 (where the game pieces are) on click this changes to z index of 15
  // whiteGrid z-index = 10
  // blackGrid z-index = 20
  // winnerCircleWrapper z-index = 30 (only displays when a winner is found)

  return (
    <>
        {/* <div id={'parentCircle-'+index} onClick={handleClick} className='w-[35px] h-[38px] rounded-[50%] md:w-16 md:h-16 md:ml-1 cursor-pointer' /> */}
        <div id={'parentCircle-'+index} onClick={handleClick} className='w-[35px] h-[38px] rounded-[50%] md:w-16 md:h-16 md:ml-1 cursor-pointer'>

          { circlePosition && (
            <Circle
              style={{
                position: 'absolute',
                left: circlePosition.x + 'px',
                top: circlePosition.y + 'px',
              }}
              />
          )}


        </div>
        
    </>
  )
}

export default CircleContainer