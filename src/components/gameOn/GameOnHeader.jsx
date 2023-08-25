import React from 'react'
import Menu from './gameOnHeader/Menu'
import Logo from '../homeScreen/Logo'
import Restart from './gameOnHeader/Restart'


function GameOnHeader() {

    const handleMenuClick = () => {
        document.getElementById('pauseMenuWrapper').classList.remove('hidden')
        document.getElementById('pauseMenuContainer').classList.add('z-[101]')
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
            <div id="headerRestartButtonWrapper">
                <Restart />
            </div>
        </div>
    </>
  )
}

export default GameOnHeader