import React, {useState, useEffect} from 'react';
import './App.css';
import HomeScreen from './components/HomeScreen';
import RulesScreen from './components/RulesScreen';
import GameOn from './components/GameOn';

// 1. need to build grid manaully
  // white grid
  // black grid
// 2. game screen

  // set up vs player screen
  // set up vs cpu screen
  // pause screen

function App() {

  function displayHome() {
    // display the home screen
    document.getElementById('homeScreenWrapper').classList.remove('hidden')
    // change the main screen background color
    document.getElementById('mainContainer').classList.remove('bg-purple') 
    document.getElementById('mainContainer').classList.add('bg-purple', 'md:bg-darkPurple')
    
  }

  return (
    <div className="App">
      <div id='mainWrapper'>
        <div id='mainContainer' className='bg-purple md:bg-darkPurple h-screen flex justify-center pt-[50px]'>
          <div id='homeScreenWrapper' className='hidden'>
            <HomeScreen />
          </div>
          <div id='rulesScreenWrapper' className='hidden w-full max-w-[480px]'>
            <RulesScreen displayHome={displayHome} />
          </div>
          <div id='gameOnWrapper' className='w-full'>
            <GameOn />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
