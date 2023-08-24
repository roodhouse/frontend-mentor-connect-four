import React from 'react';
import { DisplayHomeProvider } from './context/DisplayHome';
import './App.css';
import HomeScreen from './components/HomeScreen';
import RulesScreen from './components/RulesScreen';
import GameOn from './components/GameOn';

// logic
  // competition
  // turn
  // win logic
    // display circles of 4 pieces that won
  // marker logic, display when the row is column is clicked
// 30 sec timer logic
// all button logic
// animation

// bug 1: height issue

function App() {

  return (
    <DisplayHomeProvider>
      <div className="App">
        <div id='mainWrapper' className=''>
          <div id='mainContainer' className='bg-purple md:bg-darkPurple h-screen flex justify-center pt-[50px] md:items-center md:pt-0'>
            <div id='homeScreenWrapper' className=''>
              <HomeScreen />
            </div>
            <div id='rulesScreenWrapper' className='hidden w-full max-w-[480px] px-5 md:p-0'>
              <RulesScreen/>
            </div>
            <div id='gameOnWrapper' className='hidden w-full md:h-full md:pt-[30px]'>
              <GameOn />
            </div>
          </div>
        </div>
      </div>
    </DisplayHomeProvider>
  );
}

export default App;
