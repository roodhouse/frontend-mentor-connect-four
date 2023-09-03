import React, { useEffect } from 'react';
import { DisplayHomeProvider } from './context/DisplayHome';
import { CompetitionProvider, useCompetition } from './context/Competition';
import './App.css';
import HomeScreen from './components/HomeScreen';
import RulesScreen from './components/RulesScreen';
import GameOn from './components/GameOn';

// vs cpu animations...
  // disable the win delay when playing the cpu
// bug 5: dbl check height
    // when quitting the main menu height is off



function App() {

  useEffect(() => {
    if ( window.innerHeight < 475 ) {
      console.log(window.innerHeight)
      document.getElementById('mainContainer').classList.remove('h-screen')
      document.getElementById('mainContainer').classList.add('h-full', 'pb-10', 'pt-10')
      document.getElementById('mainContainer').classList.replace('md:pt-0','md:pt-10')
    }
  },[])

  

  return (
    <CompetitionProvider>
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
    </CompetitionProvider>
  );
}

export default App;
