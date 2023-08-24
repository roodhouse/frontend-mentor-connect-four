import React, {useContext, createContext} from 'react'

// create the context
const DisplayHome = createContext()

// define a provider component to wrap the app
const DisplayHomeProvider = ({ children }) => {
    // define the function(s) you want to share
    const displayHome = () => {
        // display the home screen
        document.getElementById('homeScreenWrapper').classList.remove('hidden')
        // change the main screen background color
        document.getElementById('mainContainer').classList.remove('bg-purple') 
        document.getElementById('mainContainer').classList.add('bg-purple', 'md:bg-darkPurple')
      }

    const hideHome = () => {
        // hide the home screen
        document.getElementById('homeScreenWrapper').classList.add('hidden')
        // change the main screen background color
        document.getElementById('mainContainer').classList.remove('bg-purple', 'md:bg-darkPurple')
        document.getElementById('mainContainer').classList.add('bg-purple') 
    }


      return (
            <DisplayHome.Provider value={{ displayHome, hideHome }}>
                {children}
            </DisplayHome.Provider>
        )
}

// create a custom hook for using the context
const useDisplayHome = () => {
    const context = useContext(DisplayHome)
    if (!context) {
        throw new Error('useYourContext must be used within a YourContextProvider')
    }
    return context
}

export { DisplayHomeProvider, useDisplayHome }