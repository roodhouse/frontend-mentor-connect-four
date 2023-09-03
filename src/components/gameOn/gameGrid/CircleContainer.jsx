import React, { useState, useEffect } from 'react'
import { useCompetition } from '../../../context/Competition'
import Circle from './circle/Circle'
import './circle.css'

function CircleContainer({index}) {

  const { turn, setTurn, columns, setMarker, playerOneArray, setPlayerOneArray, 
          playerTwoArray, setPlayerTwoArray, allowedToClick, setAllowedToClick, 
          resetTimer, winner, rows, winAnnouncement, newGame, setNewGame, competition } = useCompetition()
  
  const [ circlePosition, setCirclePosition ] = useState(null)
  const [ yAxis, setYaxis ] = useState()
  const [ duration, setDuration ] = useState(4)
  const [ pieceBackground, setPieceBackground ] = useState()

  useEffect(() => {
    winAnnouncement(duration)
  },[duration])

  
  useEffect(() => {
    setPieceBackground('')
    setCirclePosition(null)
    setNewGame(false)
  },[newGame])

  const handleClick = (e) => {

    const tile = e.target
    let pieceId = tile.id
    
    if ( winner === null ) {
      if ( allowedToClick.includes(pieceId)) {
        let pieceArray = (pieceId.split('-'))
          if (pieceArray[1] > 6) {
            let newClickable = pieceArray[1] - 7
            newClickable = 'parentCircle-'+newClickable
            
            let newArray = allowedToClick.filter((item) => item !== pieceId ) 
            newArray.push(newClickable)
            setAllowedToClick(newArray)
          }

          // animation handling
          const clickX = e.clientX
          const clickY = e.clientY
          
          setCirclePosition({ x: clickX, y: clickY })

          if ( competition === 'CPU' ) {
            setYaxis(0)
            setDuration(0)
          } else {
            let rowIndex = -1
                for (const [rowName, rowItems] of Object.entries(rows)) {
                  if (rowItems.includes(pieceId)) {
                      rowIndex = parseInt(rowName.slice(3), 10)
                      break;
                    }
                  }
                  if ( window.innerWidth >= 768 ) { 
                    if (rowIndex === 1 ) {
                      setYaxis(-500)
                      setDuration(4)
                    } else if ( rowIndex === 2 ) {
                      setYaxis(-416)
                      setDuration(4)
                    }
                    else if ( rowIndex === 3 ) {
                      setYaxis(-332)
                      setDuration(4)
                    } else if ( rowIndex === 4 ) {
                      setYaxis(-248)
                      setDuration(3)
                    } else if ( rowIndex === 5 ) {
                      setYaxis(-164)
                      setDuration(2)
                    } else if ( rowIndex === 6 ) {
                      setYaxis(-80)
                      setDuration(2)
                    }
                  } else if ( window.innerWidth < 768 ) {
                    if (rowIndex === 1 ) {
                      setYaxis(-270)
                      setDuration(4)
                    } else if ( rowIndex === 2 ) {
                      setYaxis(-210)
                      setDuration(4)
                    }
                    else if ( rowIndex === 3 ) {
                      setYaxis(-160)
                      setDuration(4)
                    } else if ( rowIndex === 4 ) {
                      setYaxis(-110)
                      setDuration(3)
                    } else if ( rowIndex === 5 ) {
                      setYaxis(-70)
                      setDuration(2)
                    } else if ( rowIndex === 6 ) {
                      setYaxis(-30)
                      setDuration(2)
                    }
                  }
          }
    
        if ( tile.style.background === '') {
          if ( turn === 'Player1' ) {
            if ( window.innerWidth < 768 ) {
              setPieceBackground('url("./assets/images/counter-red-small.svg")')
            } else if ( window.innerWidth >= 768 ) {
              setPieceBackground('url("./assets/images/counter-red-large.svg")')
            }
            setPlayerOneArray([...playerOneArray, tile.id])
            setTurn('Player2')
          } else if ( turn === 'Player2') {
            if ( window.innerWidth < 768 ) {
              setPieceBackground('url("./assets/images/counter-yellow-small.svg")')
            } else if ( window.innerWidth >= 768 ) {
              setPieceBackground('url("./assets/images/counter-yellow-large.svg")')
            }
            setPlayerTwoArray([...playerTwoArray, tile.id])
            setTurn('Player1')
          }
        } else {
          return
        }
      } else {
        console.log('nay')
        return
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
      console.log('circle container reset')
      resetTimer()
    } else if (winner !== null) {
      console.log(' a winner found ')
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
              duration={duration}
              pieceBackground={pieceBackground}
              />
          )}


        </div>
        
    </>
  )
}

export default CircleContainer