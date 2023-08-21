import React from 'react'
import Logo from './homeScreen/Logo'
import VsCPU from './homeScreen/VsCPU'
import TwoPlayer from './homeScreen/TwoPlayer'
import GameRules from './homeScreen/GameRules'

function HomeScreen() {

    function hideHome() {
        // hide the home screen
        document.getElementById('homeScreenWrapper').style.display = 'none'
        // change the main screen background color
        document.getElementById('mainContainer').style.backgroundColor = '#7945FF'
    }

    const handleRulesClick = (e) => {
        // hide the home screen
        hideHome()
        // display rules module
        document.getElementById('rulesScreenWrapper').classList.remove('hidden')
    }
  return (
    <>
        <div id="homeScreenContainer" className='flex flex-col items-center md:w-[480px] md:h-[507px] md:pt-[70px] md:pb-[60px] md:justify-around md:bg-purple md:rounded-[40px] md:border-[3px] md:border-black md:shadow-[0px_10px_0px_0px_black]'>
            <div id="logoWrapper" className='mb-[79px]'>
                <Logo />
            </div>
            <div id="cpuWrapper" className='mb-[30px]'>
                <VsCPU />
            </div>
            <div id="twoPlayerWrapper" className='mb-[30px]'>
                <TwoPlayer />
            </div>
            <div id="gameRulesWrapper" onClick={handleRulesClick}>
                <GameRules />
            </div>
        </div>
    </>
  )
}

export default HomeScreen