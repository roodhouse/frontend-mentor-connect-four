import React from 'react'
import Menu from './gameOnHeader/Menu'
import Logo from '../homeScreen/Logo'
import Restart from './gameOnHeader/Restart'
import { useCompetition } from '../../context/Competition'

function GameOnHeader() {

    const { pauseTimer, restart } = useCompetition()

    const handleMenuClick = () => {
        document.getElementById('pauseMenuWrapper').classList.remove('hidden')
        document.getElementById('pauseMenuContainer').classList.add('z-[101]')
        pauseTimer() 
    }


  return (
    <>
        <div id="gameOnHeaderContainer" className='flex items-center justify-between' >
            <div id="headerMenuButtonWrapper" onClick={handleMenuClick}>
                <Menu />
            </div>
            <div id="headerLogoWrapper">
                <Logo />
            </div>
            <div id="headerRestartButtonWrapper" onClick={restart}>
                <Restart />
            </div>
        </div>
    </>
  )
}

export default GameOnHeader