import React, {useState, useEffect} from 'react';
import './App.css';
import HomeScreen from './components/HomeScreen';
import RulesScreen from './components/RulesScreen';


// 2. game screen

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
        <div id='mainContainer' className='bg-purple md:bg-darkPurple h-screen flex justify-center items-center px-5'>
          <div id='homeScreenWrapper' className=''>
            <HomeScreen />
          </div>
          <div id='rulesScreenWrapper' className='hidden w-full max-w-[480px]'>
            <RulesScreen displayHome={displayHome} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
