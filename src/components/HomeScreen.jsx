import React from 'react'
import Logo from './homeScreen/Logo'
import VsCPU from './homeScreen/VsCPU'
import TwoPlayer from './homeScreen/TwoPlayer'
import GameRules from './homeScreen/GameRules'
import { useDisplayHome } from '../context/DisplayHome'
import { useCompetition } from '../context/Competition'

function HomeScreen() {

    const { hideHome } = useDisplayHome()
    const { competition, setCompetition } = useCompetition()

    const handleRulesClick = (e) => {
        // hide the home screen
        hideHome()
        // display rules module
        document.getElementById('rulesScreenWrapper').classList.remove('hidden')
    }

    const handleCPUclick = (e) => {
        hideHome()
        document.getElementById('gameOnWrapper').classList.remove('hidden')
        document.getElementById('gameOnWrapper').classList.add('xl:flex', 'xl:flex-col', 'xl:justify-end')
        document.getElementById('mainContainer').classList.add('md:h-full', 'xl:h-screen')
        setCompetition('CPU')
    }

    const handleTwoClick = (e) => {
        hideHome()
        document.getElementById('gameOnWrapper').classList.remove('hidden')
        document.getElementById('gameOnWrapper').classList.add('xl:flex', 'xl:flex-col', 'xl:justify-end')
        document.getElementById('mainContainer').classList.add('md:h-full', 'xl:h-screen')
        setCompetition('Human')
    }

    console.log(competition)
    
  return (
    <>
        <div id="homeScreenContainer" className='flex flex-col items-center md:w-[480px] md:h-[507px] md:pt-[70px] md:pb-[60px] md:justify-around md:bg-purple md:rounded-[40px] md:border-[3px] md:border-black md:shadow-[0px_10px_0px_0px_black]'>
            <div id="logoWrapper" className='mb-[79px]'>
                <Logo />
            </div>
            <div id="cpuWrapper" onClick={handleCPUclick} className='mb-[30px]'>
                <VsCPU />
            </div>
            <div id="twoPlayerWrapper" className='mb-[30px]' onClick={handleTwoClick}>
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