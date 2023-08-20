import React from 'react'
import Logo from './homeScreen/Logo'
import VsCPU from './homeScreen/VsCPU'
import TwoPlayer from './homeScreen/TwoPlayer'
import GameRules from './GameRules'

function HomeScreen() {
  return (
    <>
        <div id="homeScreenContainer" className='flex flex-col items-center'>
            <div id="logoWrapper" className='mb-[79px]'>
                <Logo />
            </div>
            <div id="cpuWrapper" className='mb-[30px]'>
                <VsCPU />
            </div>
            <div id="twoPlayerWrapper" className='mb-[30px]'>
                <TwoPlayer />
            </div>
            <div id="gameRulesWrapper">
                {/* <GameRules /> */}
            </div>
        </div>
    </>
  )
}

export default HomeScreen