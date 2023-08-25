import React, { useContext, createContext, useState } from 'react'

// create the context
const CompetitionContext = createContext()

// define a provider component to wrap the app
const CompetitionProvider = ({ children }) => {
    // define the function you want to share
    const [ competition, setCompetition ] = useState('')
    const [ turn, setTurn ] = useState('Player1')
    const [ playerOneScore, setPlayerOneScore ] = useState(0)
    const [ playerTwoCpuScore, setPlayerTwoCpuScore ] = useState(0)

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

    return (
        <CompetitionContext.Provider value={{ competition, setCompetition, turn, setTurn, playerOneScore, setPlayerOneScore, playerTwoCpuScore, setPlayerTwoCpuScore, cardStyle, cardBackground, turnText, player1Text, player1Face, player2Text, player2Face }}>
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