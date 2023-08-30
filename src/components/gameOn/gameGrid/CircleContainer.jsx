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
  const [ yAxis, setYaxis ] = useState()



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

  // document.addEventListener("mousemove", (e) => {
  //   let mousex = e.clientX; // Gets Mouse X
  //   let mousey = e.clientY; // Gets Mouse Y
  //   console.log([mousex, mousey]); // Prints data
  // });

  const handleClick = (e) => {
    console.log(e.target.id)
    // console.log(columns)
   let circleLayerWrapper = e.target
    const clickX = e.clientX
    const clickY = e.clientY
    // console.log(clickY)
    
    setCirclePosition({ x: clickX, y: clickY })

    // this will work but I need a to use a row grid, not a column grid...
    let columnIndex = -1
        for (const [colName, columnItems] of Object.entries(columns)) {
          console.log(colName, columnItems)
          if (columnItems.includes(e.target.id)) {
              columnIndex = parseInt(colName.slice(3), 10)
              console.log(columnIndex)
              break;
            }
          }
          console.log(columnIndex)

          if (columnIndex === 1 ) {
            setYaxis(-500)
          }
  }

  return (
    <>
        <div id={'parentCircle-'+index} onClick={handleClick} className='w-[35px] h-[38px] rounded-[50%] md:w-16 md:h-16 md:ml-1 cursor-pointer'>

          { circlePosition && (
            <Circle
              style={{
                position: 'absolute',
                left: circlePosition.x + 'px',
                top: circlePosition.y + 'px',
              }}
              yAxis={yAxis}
              />
          )}


        </div>
        
    </>
  )
}

export default CircleContainer