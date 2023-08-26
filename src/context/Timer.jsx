import React, { useContext, createContext, useState, useEffect } from 'react'

// create the context
const TimerContext = createContext()

// define a provider component to wrap the portion of the app that needs this context
const TimerProvider = ({ children }) => {
    // define the function you want to share
    const [ timer, setTimer ] = useState(30)
    const [ intervalId, setIntervalId ] = useState(null)

    const startTimer = () => {
        if (intervalId === null && timer === 30) {
            const id = setInterval(() => {
                setTimer((prevTimer) => prevTimer -1)
            }, 1000)
            setIntervalId(id)
        } else if ( intervalId !== null && timer !== 30 ) {
            const id = setInterval(() => {
                setTimer((prevTimer) => prevTimer -1)
            }, 1000)
            setIntervalId(id)
        }
    }

    const pauseTimer = () => {
        clearInterval(intervalId)
    }
    
    // const stopTimer = () => {
    //     if (intervalId !== null) {
    //         clearInterval(intervalId)
    //         setIntervalId(null)
    //     } 
    // }

    const resetTimer = () => {
        // stopTimer()
        setTimer(30)
        // setIntervalId(null)
        startTimer()
    }

    // useEffect(() => {
    //     if ( timer === 25 ) {
    //         pauseTimer()
    //         console.log(intervalId)
    //     }

    //     // if ( intervalId === null ) {
    //     //     startTimer()
    //     // }
    // }, [timer])

    // useEffect(() => {
    //     console.log("intervalId changed:", intervalId);
    //     startTimer()
    //   }, [intervalId]);

    return (
        <TimerContext.Provider value={{ timer, setTimer, startTimer, resetTimer, pauseTimer }}>
            {children}
        </TimerContext.Provider>
    )
}

// create a custom hook for using the context
const useTimer = () => {
    const context = useContext(TimerContext)
    if (!context) {
        throw new Error('useTimer must be used within a TimerProvider')
    }
    return context
}

export { TimerProvider, useTimer}
