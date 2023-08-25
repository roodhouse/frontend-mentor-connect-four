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
    const [ marker, setMarker ] = useState('marker5')

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
        col1: ['parentCircle0','parentCircle7','parentCircle14','parentCircle21','parentCircle28','parentCircle35'],
        col2: ['parentCircle1','parentCircle8','parentCircle15','parentCircle22','parentCircle29','parentCircle36'],
        col3: ['parentCircle2','parentCircle9','parentCircle16','parentCircle23','parentCircle30','parentCircle37'],
        col4: ['parentCircle3','parentCircle10','parentCircle17','parentCircle24','parentCircle31','parentCircle38'],
        col5: ['parentCircle4','parentCircle11','parentCircle18','parentCircle25','parentCircle32','parentCircle39'],
        col6: ['parentCircle5','parentCircle12','parentCircle19','parentCircle26','parentCircle33','parentCircle40'],
        col7: ['parentCircle6','parentCircle13','parentCircle20','parentCircle27','parentCircle34','parentCircle41'],
    }

    return (
        <CompetitionContext.Provider value={{ competition, setCompetition, turn, setTurn, playerOneScore, setPlayerOneScore, playerTwoCpuScore, setPlayerTwoCpuScore, cardStyle, cardBackground, turnText, player1Text, player1Face, player2Text, player2Face, marker, setMarker, columns }}>
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