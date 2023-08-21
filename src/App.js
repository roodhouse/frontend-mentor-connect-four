import React, {useState, useEffect} from 'react';
import './App.css';
import HomeScreen from './components/HomeScreen';
import RulesScreen from './components/RulesScreen';

// need to go back and adjust the cpu game based on the bonus specs
// bug 1: home screen needs to be dark purple at 768 and greater
    // change the background color on click of the buttons

function App() {

  return (
    <div className="App">
      <div id='mainWrapper'>
        <div id='mainContainer' className='bg-purple md:bg-darkPurple h-screen flex justify-center items-center px-5'>
          <div id='homeScreenWrapper' className=''>
            <HomeScreen />
          </div>
          <div id='rulesScreenWrapper' className='hidden w-full max-w-[480px]'>
            <RulesScreen />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
