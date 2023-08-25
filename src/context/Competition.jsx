import React, { useContext, createContext, useState } from 'react'

// create the context
const CompetitionContext = createContext()

// define a provider component to wrap the app
const CompetitionProvider = ({ children }) => {
    // define the function you want to share
    const [ competition, setCompetition ] = useState('')
    const [ turn, setTurn ] = useState('Player1')
    return (
        <CompetitionContext.Provider value={{ competition, setCompetition, turn, setTurn }}>
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