import React, { useContext, createContext, useState, useEffect, useRef } from 'react'

// create the context
const CompetitionContext = createContext()

// define a provider component to wrap the app
const CompetitionProvider = ({ children }) => {
    // define the function you want to share
    const [ competition, setCompetition ] = useState('')
    const [ turn, setTurn ] = useState('Player1')
    const [ playerOneScore, setPlayerOneScore ] = useState(0)
    const [ playerTwoCpuScore, setPlayerTwoCpuScore ] = useState(0)
    const [ marker, setMarker ] = useState('marker5')
    const [ playerOneArray, setPlayerOneArray ] = useState([])
    const [ playerTwoArray, setPlayerTwoArray ] = useState([])
    const [ allowedToClick, setAllowedToClick ] = useState(['parentCircle-35', 'parentCircle-36', 'parentCircle-37', 'parentCircle-38', 'parentCircle-39', 'parentCircle-40', 'parentCircle-41'])
    const [ timer, setTimer ] = useState(30)
    const [ intervalId, setIntervalId ] = useState(null)
    const [ winner, setWinner ] = useState(null)
    const [ firstTurn, setFirstTurn ] = useState('Player1')
    const [ newGame, setNewGame ] = useState(false)
    const [ paused, setPaused ] = useState(false)
    const [ gameOn, setGameOn ] = useState(false)
    const [ winDelay, setWinDelay ] = useState(4)

    const cardStyle = () => {
        if ( turn === 'Player1') {
            return '#fff'
        } else {
            return '#000'
        }
    }

    const cardBackground = () => {
        if ( turn === 'Player1' ) {
            return 'url(./assets/images/turn-background-red.svg)'
        } else {
            return 'url(./assets/images/turn-background-yellow.svg)'
        }
    }

    const turnText = () => {
        if ( competition === 'Human' ) {
            if ( turn === 'Player1' ) {
                return `PLAYER 1'S TURN`
            } else {
                return `PLAYER 2'S TURN`
            }
        } else {
            if ( turn === 'Player1' ) {
                return `YOUR TURN`
            } else {
                return `CPU'S TURN`
            }
        }
    }

    const player1Text = () => {

        if ( competition === 'Human' ) {
            return `PLAYER 1`
        } else {
            return `YOU`
        }
    }

    const player1Face = () => {
        
        if ( competition === 'Human' ) {
            return `url(./assets/images/player-one.svg)`
        } else {
            return `url(./assets/images/you.svg)`
        }
    }

    const player2Text = () => {

        if ( competition === 'Human' ) {
            return `PLAYER 2`
        } else {
            return `CPU`
        }
    }

    const player2Face = () => {

        if ( competition === 'Human' ) {
            return `url(./assets/images/player-two.svg)`
        } else {
            return `url(./assets/images/cpu.svg)`
        }
    }

    const columns = {
        col1: ['marker-0','parentCircle-0','parentCircle-7','parentCircle-14','parentCircle-21','parentCircle-28','parentCircle-35'],
        col2: ['marker-1','parentCircle-1','parentCircle-8','parentCircle-15','parentCircle-22','parentCircle-29','parentCircle-36'],
        col3: ['marker-2','parentCircle-2','parentCircle-9','parentCircle-16','parentCircle-23','parentCircle-30','parentCircle-37'],
        col4: ['marker-3','parentCircle-3','parentCircle-10','parentCircle-17','parentCircle-24','parentCircle-31','parentCircle-38'],
        col5: ['marker-4','parentCircle-4','parentCircle-11','parentCircle-18','parentCircle-25','parentCircle-32','parentCircle-39'],
        col6: ['marker-5','parentCircle-5','parentCircle-12','parentCircle-19','parentCircle-26','parentCircle-33','parentCircle-40'],
        col7: ['marker-6','parentCircle-6','parentCircle-13','parentCircle-20','parentCircle-27','parentCircle-34','parentCircle-41'],
    }

    const rows = {
        row1: ['parentCircle-35','parentCircle-36','parentCircle-37','parentCircle-38','parentCircle-39','parentCircle-40','parentCircle-41'],
        row2: ['parentCircle-28','parentCircle-29','parentCircle-30','parentCircle-31','parentCircle-32','parentCircle-33','parentCircle-34',],
        row3: ['parentCircle-21','parentCircle-22','parentCircle-23','parentCircle-24','parentCircle-25','parentCircle-26','parentCircle-27',],
        row4: ['parentCircle-14','parentCircle-15','parentCircle-16','parentCircle-17','parentCircle-18','parentCircle-19','parentCircle-20',],
        row5: ['parentCircle-7','parentCircle-8','parentCircle-9','parentCircle-10','parentCircle-11','parentCircle-12','parentCircle-13',],
        row6: ['parentCircle-0','parentCircle-1','parentCircle-2','parentCircle-3','parentCircle-4','parentCircle-5','parentCircle-6',]
    }

    // vs cpu logic
    useEffect(() => {
        if ( competition === 'CPU') {
            if (newGame) {
                setNewGame(false)
            }
            if ( turn === 'Player2') {
                if ( winner === null ) {
                    // select a random piece from the allowedToClick array
                    if ( allowedToClick.length === 7 ) {
                        const randomIndex = Math.floor(Math.random() * allowedToClick.length);
                        const randomSelection = allowedToClick[randomIndex];
                        // remove item from allowedToClick
                        setAllowedToClick(prevAllowedToClick => prevAllowedToClick.filter((item) => item !== randomSelection))
        
                        let timeout = [1000,2000,3000,4000]
                        let timeoutIndex = Math.floor(Math.random() * timeout.length)
                        setTimeout(() => {
                            // change background
                            let randomSelectionDiv = document.getElementById(randomSelection)
                            if ( window.innerWidth < 768 ) {
                                randomSelectionDiv.style.background = 'url("./assets/images/counter-yellow-small.svg")'
                                randomSelectionDiv.style.backgroundSize = 'contain'
                                randomSelectionDiv.style.backgroundRepeat = 'no-repeat'
                              } else if ( window.innerWidth >= 768 ) {
                                randomSelectionDiv.style.background = 'url("./assets/images/counter-yellow-large.svg")'
                                randomSelectionDiv.style.backgroundSize = 'contain'
                                randomSelectionDiv.style.backgroundRepeat = 'no-repeat'
                              }
                              // add new item to allowedToClickArray
                              setAllowedToClick(prevAllowedToClick => {
                                  let pieceArray = randomSelection.split('-')
                                  if (pieceArray[1] > 6) {
                                      let newClickable = pieceArray[1] - 7
                                      newClickable = 'parentCircle-' + newClickable
                                      return [...prevAllowedToClick, newClickable]
                                  }
                                  return [prevAllowedToClick]
                              })
                              // set marker
                              let columnIndex = -1
                              for (const [colName, columnItems] of Object.entries(columns)) {
                                if (columnItems.includes(randomSelection)) {
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
                                  setTurn('Player1')
                                  resetTimer()
                        }, timeout[timeoutIndex])
                    } 
                } else if ( winner !== null ) {
                    console.log('winner found')
                }
            }
        }
    }, [turn, newGame])

    // timer functions
    const intervalIdRef = useRef(null)

    const startTimer = () => {
        if (intervalIdRef.current === null) {
          const id = setInterval(() => {
            setTimer((prevTimer) => {
              if (prevTimer > 0) {
                return prevTimer - 1;
              } else {
                clearInterval(id);
                intervalIdRef.current = null; // Clear the ref
                return prevTimer; // Timer reached 0, don't decrement further
              }
            });
          }, 1000);
          intervalIdRef.current = id; // Set the ref
        }
      }
    
      const pauseTimer = () => {
        clearInterval(intervalIdRef.current);
        intervalIdRef.current = null; // Clear the ref
      }

    const stopTimer = () => {
        clearInterval(intervalId)
        setIntervalId(null)
    }
    
    const resetTimer = () => {
        
        setIntervalId(null)
        setTimer(30)
    }

    useEffect(() => {
        if (timer === 0) {
          if (turn === 'Player1') {
            let score = playerTwoCpuScore;
            setPlayerTwoCpuScore(score + 1);
            stopTimer();
            setTurn('Player2');
            // set winner
            setWinner('Player2')
          } else if (turn === 'Player2') {
            let score = playerOneScore;
            setPlayerOneScore(score + 1);
            stopTimer();
            setTurn('Player1');
            // set Winner
            setWinner('Player1')
          }
        }
      }, [timer]);

      // clear piece background
      function clearNonEmptyBackgrounds() {
        // for (const columnKey in columns) {
        //     const column = columns[columnKey]
        //     for (let i = 0; i < column.length; i++) {
        //         const item = document.getElementById(column[i])
        //         if (item.firstChild) {
        //             console.log(item)
        //             let firstChild = item.firstChild
        //             item.removeChild(firstChild)
        //         } else {
        //             console.log('nada')
        //         }
        //     }
        // }
      }

      function clearWinningCircles() {
        const winnerCircleWrapper = document.getElementById('winnerCircleWrapper')
            winnerCircleWrapper.classList.replace('z-[100]', 'z-[1]')
        let allCircles = document.querySelectorAll('.winningCircle')
        
        allCircles.forEach((circle) => {
            if ( circle.classList.contains('border-white')) {
                circle.classList.replace('border-white', 'border-transparent')
            }
        })
      }

      // restart click
      const restart = () => {
        // clear the current player piece array
        setPlayerOneArray([])
        setPlayerTwoArray([])
        // reset the allowed to click array
        setAllowedToClick(['parentCircle-35', 'parentCircle-36', 'parentCircle-37', 'parentCircle-38', 'parentCircle-39', 'parentCircle-40', 'parentCircle-41'])
        // reset timer
        resetTimer()
        // reset board to all blanks
        clearNonEmptyBackgrounds()
        clearWinningCircles()
        // reset marker
        setMarker('marker5')
        startTimer()
      }

      // play again click
      const playAgain = () => {
        const playerBottomCardWrapper = document.getElementById('playerBottomCardWrapper');
        const winCardWrapper = document.getElementById('winCardWrapper');
        // remove the win screen and display the turn and counter screen
        playerBottomCardWrapper.classList.remove('hidden')
        winCardWrapper.classList.add('hidden')
        // determin whos turn it is based on who went first last time
        if (firstTurn === 'Player1') {
            setTurn('Player2')
            setFirstTurn('Player2')
        } else {
            setTurn('Player1')
            setFirstTurn('Player1')
        }
        // set the winner back to null
        setWinner(null)
        setNewGame(true)
        
        // reset the allowed to click array
        setAllowedToClick(['parentCircle-35', 'parentCircle-36', 'parentCircle-37', 'parentCircle-38', 'parentCircle-39', 'parentCircle-40', 'parentCircle-41'])
        // reset timer
        resetTimer()
        // reset board to all blanks
        clearNonEmptyBackgrounds()
        clearWinningCircles()
        // reset marker
        setMarker('marker5')
        startTimer()

      }

      // win logic
      let ways2win = 
        {
            row01: 'parentCircle-35,parentCircle-36,parentCircle-37,parentCircle-38',
            row02: 'parentCircle-28,parentCircle-29,parentCircle-30,parentCircle-31',
            row03: 'parentCircle-21,parentCircle-22,parentCircle-23,parentCircle-24',
            row04: 'parentCircle-14,parentCircle-15,parentCircle-16,parentCircle-17',
            row05: 'parentCircle-7,parentCircle-8,parentCircle-9,parentCircle-10',
            row06: 'parentCircle-0,parentCircle-1,parentCircle-2,parentCircle-3',
            row07: 'parentCircle-36,parentCircle-37,parentCircle-38,parentCircle-39',
            row08: 'parentCircle-29,parentCircle-30,parentCircle-31,parentCircle-32',
            row09: 'parentCircle-22,parentCircle-23,parentCircle-24,parentCircle-25',
            row10: 'parentCircle-15,parentCircle-16,parentCircle-17,parentCircle-18',
            row11: 'parentCircle-8,parentCircle-8,parentCircle-10,parentCircle-11',
            row12: 'parentCircle-1,parentCircle-2,parentCircle-3,parentCircle-4',
            row13: 'parentCircle-37,parentCircle-38,parentCircle-39,parentCircle-40',
            row14: 'parentCircle-30,parentCircle-31,parentCircle-32,parentCircle-33',
            row15: 'parentCircle-23,parentCircle-24,parentCircle-25,parentCircle-26',
            row16: 'parentCircle-16,parentCircle-17,parentCircle-18,parentCircle-19',
            row17: 'parentCircle-9,parentCircle-10,parentCircle-11,parentCircle-12',
            row18: 'parentCircle-2,parentCircle-3,parentCircle-4,parentCircle-5',
            row19: 'parentCircle-38,parentCircle-39,parentCircle-40,parentCircle-41',
            row20: 'parentCircle-31,parentCircle-32,parentCircle-33,parentCircle-34',
            row21: 'parentCircle-24,parentCircle-25,parentCircle-26,parentCircle-27',
            row22: 'parentCircle-17,parentCircle-18,parentCircle-19,parentCircle-20',
            row23: 'parentCircle-10,parentCircle-11,parentCircle-12,parentCircle-13',
            row24: 'parentCircle-3,parentCircle-4,parentCircle-5,parentCircle-6',
            col01: 'parentCircle-35,parentCircle-28,parentCircle-21,parentCircle-14',
            col02: 'parentCircle-36,parentCircle-29,parentCircle-22,parentCircle-15',
            col03: 'parentCircle-37,parentCircle-30,parentCircle-23,parentCircle-16',
            col04: 'parentCircle-38,parentCircle-31,parentCircle-24,parentCircle-17',
            col05: 'parentCircle-39,parentCircle-32,parentCircle-25,parentCircle-18',
            col06: 'parentCircle-40,parentCircle-33,parentCircle-26,parentCircle-19',
            col07: 'parentCircle-41,parentCircle-34,parentCircle-27,parentCircle-20',
            col08: 'parentCircle-28,parentCircle-21,parentCircle-14,parentCircle-7',
            col09: 'parentCircle-29,parentCircle-22,parentCircle-15,parentCircle-8',
            col10: 'parentCircle-30,parentCircle-23,parentCircle-16,parentCircle-9',
            col11: 'parentCircle-31,parentCircle-24,parentCircle-17,parentCircle-10',
            col12: 'parentCircle-32,parentCircle-25,parentCircle-18,parentCircle-11',
            col13: 'parentCircle-33,parentCircle-26,parentCircle-19,parentCircle-12',
            col14: 'parentCircle-34,parentCircle-27,parentCircle-20,parentCircle-13',
            col15: 'parentCircle-21,parentCircle-14,parentCircle-7,parentCircle-0',
            col16: 'parentCircle-22,parentCircle-15,parentCircle-8,parentCircle-1',
            col17: 'parentCircle-23,parentCircle-16,parentCircle-9,parentCircle-2',
            col18: 'parentCircle-24,parentCircle-17,parentCircle-10,parentCircle-3',
            col19: 'parentCircle-25,parentCircle-18,parentCircle-11,parentCircle-4',
            col20: 'parentCircle-26,parentCircle-19,parentCircle-12,parentCircle-5',
            col21: 'parentCircle-27,parentCircle-20,parentCircle-13,parentCircle-6',
            dia01: 'parentCircle-35,parentCircle-29,parentCircle-23,parentCircle-17',
            dia02: 'parentCircle-36,parentCircle-30,parentCircle-24,parentCircle-18',
            dia03: 'parentCircle-37,parentCircle-31,parentCircle-25,parentCircle-19',
            dia04: 'parentCircle-38,parentCircle-32,parentCircle-26,parentCircle-20',
            dia05: 'parentCircle-28,parentCircle-22,parentCircle-16,parentCircle-10',
            dia06: 'parentCircle-29,parentCircle-23,parentCircle-17,parentCircle-11',
            dia07: 'parentCircle-30,parentCircle-24,parentCircle-18,parentCircle-12',
            dia08: 'parentCircle-31,parentCircle-25,parentCircle-19,parentCircle-13',
            dia09: 'parentCircle-22,parentCircle-16,parentCircle-10,parentCircle-4',
            dia10: 'parentCircle-23,parentCircle-17,parentCircle-11,parentCircle-5',
            dia11: 'parentCircle-24,parentCircle-18,parentCircle-12,parentCircle-6',
            dia12: 'parentCircle-41,parentCircle-33,parentCircle-25,parentCircle-17',
            dia13: 'parentCircle-40,parentCircle-32,parentCircle-24,parentCircle-16',
            dia14: 'parentCircle-39,parentCircle-31,parentCircle-23,parentCircle-15',
            dia15: 'parentCircle-38,parentCircle-30,parentCircle-22,parentCircle-14',
            dia16: 'parentCircle-34,parentCircle-26,parentCircle-18,parentCircle-10',
            dia17: 'parentCircle-33,parentCircle-25,parentCircle-17,parentCircle-9',
            dia18: 'parentCircle-32,parentCircle-24,parentCircle-16,parentCircle-8',
            dia19: 'parentCircle-27,parentCircle-19,parentCircle-11,parentCircle-3',
            dia20: 'parentCircle-26,parentCircle-18,parentCircle-10,parentCircle-2',
            dia21: 'parentCircle-25,parentCircle-17,parentCircle-9,parentCircle-1',
            dia22: 'parentCircle-24,parentCircle-16,parentCircle-8,parentCircle-0',
            dia23: 'parentCircle-31,parentCircle-23,parentCircle-15,parentCircle-7',
        }

        // Player one win
        let playerOneArrayString = playerOneArray.toString()
        let playerOneItems = playerOneArrayString.split(',')

        let playerOneWinningPieces = [];
        let playerOneWin = Object.entries(ways2win).some(([combinationName, combination]) => {
            const items = combination.split(',');
            const isWin = items.every(item => playerOneItems.includes(item));
            if (isWin) {
            playerOneWinningPieces = [...playerOneWinningPieces, ...items];
            }
            return isWin;
        });

        // set condition here for if playerOneWin is true
        if (playerOneWin) {
            setTimeout(() => {
                setWinner('Player1')
                setPlayerOneArray([])
                setPlayerTwoArray([])
                stopTimer()
                let score = playerOneScore + 1
                setPlayerOneScore(score)
                
                const winnerCircleWrapper = document.getElementById('winnerCircleWrapper')
                winnerCircleWrapper.classList.replace('z-[1]', 'z-[100]')
                const winningCircles = playerOneWinningPieces.map(piece => piece.replace('parent', 'winner'))
    
                winningCircles.forEach((piece) => {
                    let whiteCircle = document.getElementById(piece)
                    whiteCircle.classList.remove('border-transparent')
                    whiteCircle.classList.add('border-white')
                })
            }, winDelay*1000)
        }

        // Player two or cpu win
        let playerTwoArrayString = playerTwoArray.toString()
        let playerTwoItems = playerTwoArrayString.split(',')

        let playerTwoWinningPieces = [];
        let playerTwoWin = Object.entries(ways2win).some(([combinationName, combination]) => {
            const items = combination.split(',');
            const isWin = items.every(item => playerTwoItems.includes(item));
            if (isWin) {
            playerTwoWinningPieces = [...playerTwoWinningPieces, ...items];
            }
            return isWin;
        });

        // set condition here for if playerOneWin is true
        if (playerTwoWin) {
            setTimeout(() => {
                setWinner('Player2')
                setPlayerOneArray([])
                setPlayerTwoArray([])
                stopTimer()
                let score = playerTwoCpuScore + 1
                setPlayerTwoCpuScore(score)
                
                const winnerCircleWrapper = document.getElementById('winnerCircleWrapper')
                winnerCircleWrapper.classList.replace('z-[1]', 'z-[100]')
                const winningCircles = playerTwoWinningPieces.map(piece => piece.replace('parent', 'winner'))
    
                winningCircles.forEach((piece) => {
                    let whiteCircle = document.getElementById(piece)
                    whiteCircle.classList.remove('border-transparent')
                    whiteCircle.classList.add('border-white')
                })
            }, winDelay*1000)
        }

        // win annoucement delay
        const winAnnouncement = (e) => {
            setWinDelay(e)
        }


    return (
        <CompetitionContext.Provider value={{ competition, setCompetition, turn, setTurn, playerOneScore, 
        setPlayerOneScore, playerTwoCpuScore, setPlayerTwoCpuScore, cardStyle, 
        cardBackground, turnText, player1Text, player1Face, player2Text, player2Face, 
        marker, setMarker, columns, playerOneArray, setPlayerOneArray, playerTwoArray, 
        setPlayerTwoArray, allowedToClick, setAllowedToClick, timer, setTimer, startTimer, 
        resetTimer, pauseTimer, winner, setWinner, restart, playAgain, setPaused, gameOn, setGameOn, rows, winAnnouncement }}>
            {children}
        </CompetitionContext.Provider>
    )

}

// create a custom hook for using the context
const useCompetition = () => {
    const context = useContext(CompetitionContext)
    if (!context) {
        throw new Error('useCompetition must be used within a CompetitionProvider')
    }
    return context
}


export { CompetitionProvider, useCompetition }