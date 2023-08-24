import React from 'react';
import './App.css';
import HomeScreen from './components/HomeScreen';
import RulesScreen from './components/RulesScreen';
import GameOn from './components/GameOn';

// refactor to use useContext
// logic
  // competition
  // turn
  // win logic
    // display circles of 4 pieces that won
  // marker logic, display when the row is column is clicked
// 30 sec timer logic
// all button logic

// bug 1: height issue

function App() {

  function displayHome() {
    // display the home screen
    document.getElementById('homeScreenWrapper').classList.remove('hidden')
    // change the main screen background color
    document.getElementById('mainContainer').classList.remove('bg-purple') 
    document.getElementById('mainContainer').classList.add('bg-purple', 'md:bg-darkPurple')
  }

  function hideHome() {
    // hide the home screen
    document.getElementById('homeScreenWrapper').classList.add('hidden')
    // change the main screen background color
    document.getElementById('mainContainer').classList.remove('bg-purple', 'md:bg-darkPurple')
    document.getElementById('mainContainer').classList.add('bg-purple') 
}

  return (
    <div className="App">
      <div id='mainWrapper' className=''>
        <div id='mainContainer' className='bg-purple md:bg-darkPurple h-screen flex justify-center pt-[50px] md:items-center md:pt-0'>
          <div id='homeScreenWrapper' className=''>
            <HomeScreen hideHome={hideHome} />
          </div>
          <div id='rulesScreenWrapper' className='hidden w-full max-w-[480px] px-5 md:p-0'>
            <RulesScreen displayHome={displayHome} />
          </div>
          <div id='gameOnWrapper' className='hidden w-full md:h-full md:pt-[30px]'>
            <GameOn />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
