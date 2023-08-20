import React from 'react'
import Logo from './homeScreen/Logo'
import VsCPU from './homeScreen/VsCPU'
import TwoPlayer from './homeScreen/TwoPlayer'
import GameRules from './GameRules'

function HomeScreen() {
  return (
    <>
        <div id="homeScreenContainer">
            <div id="logoWrapper">
                <Logo />
            </div>
            <div id="cpuWrapper">
                {/* <VsCPU /> */}
            </div>
            <div id="twoPlayerWrapper">
                {/* <TwoPlayer /> */}
            </div>
            <div id="gameRulesWrapper">
                {/* <GameRules /> */}
            </div>
        </div>
    </>
  )
}

export default HomeScreen