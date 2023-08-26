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
        for (const columnKey in columns) {
            const column = columns[columnKey]
            for (let i = 0; i < column.length; i++) {
                const item = document.getElementById(column[i])
                if (item && item.style.background !== '') {
                    item.style.background = ''
                }
            }
        }
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
        // reset marker
        setMarker('marker5')
        startTimer()
      }

    return (
        <CompetitionContext.Provider value={{ competition, setCompetition, turn, setTurn, playerOneScore, 
        setPlayerOneScore, playerTwoCpuScore, setPlayerTwoCpuScore, cardStyle, 
        cardBackground, turnText, player1Text, player1Face, player2Text, player2Face, 
        marker, setMarker, columns, playerOneArray, setPlayerOneArray, playerTwoArray, 
        setPlayerTwoArray, allowedToClick, setAllowedToClick, timer, setTimer, startTimer, resetTimer, pauseTimer, winner, setWinner, restart }}>
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