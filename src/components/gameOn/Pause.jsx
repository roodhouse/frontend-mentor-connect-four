import React from 'react'
import PauseCopy from './pause/PauseCopy'
import Continue from './pause/Continue'
import RestartGame from './pause/RestartGame'
import Quit from './pause/Quit'
import { useDisplayHome } from '../../context/DisplayHome'
import { useCompetition } from '../../context/Competition'

function Pause() {

    const { displayHome } = useDisplayHome()
    const { playerOneScore, setPlayerOneScore, playerTwoCpuScore, setPlayerTwoCpuScore, startTimer, restart, setGameOn } = useCompetition()

    const handleContinueClick = () => {
        document.getElementById('pauseMenuWrapper').classList.add('hidden')
        startTimer()
    }

    const handleRestartClick = () => {
        document.getElementById('pauseMenuWrapper').classList.add('hidden')
        restart()
    }

  const handleQuit = (e) => {
    restart()
    displayHome()
    setGameOn(false)
    // hide pause module
    document.getElementById('pauseMenuWrapper').classList.add('hidden')
    // hide game grid
    document.getElementById('gameOnWrapper').classList.add('hidden')
    document.getElementById('gameOnWrapper').classList.remove('xl:flex', 'xl:flex-col', 'xl:justify-end')
    // reset score here
    setPlayerOneScore(0)
    setPlayerTwoCpuScore(0)

  }

  return (
    <>
        <div id="pauseLightBox" className='h-screen absolute w-full top-0 bg-black opacity-50 z-40' />
        <div id="pauseMenuContainer" className='h-screen flex justify-center items-center absolute top-0'>
            <div id="pauseItemsWrapper" className='w-[335px] h-[437px] md:w-[480px] md:h-[491px] z-50 top-0 bg-purple rounded-[40px] border-[3px] border-black shadow-[0px_10px_0px_0px_#000] flex flex-col justify-center items-center px-5 py-[30px] md:px-10 md:py-[50px]'>
                <div id="pauseCopyWrapper" className='md:mb-[30px]'>
                    <PauseCopy />
                </div>
                <div id="continueWrapper" onClick={handleContinueClick} className='w-full mb-[30px] cursor-pointer'>
                    <Continue />
                </div>
                <div id="restartWrapper" onClick={handleRestartClick} className='w-full mb-[30px] cursor-pointer'>
                    <RestartGame />
                </div>
                <div id="quitWrapper" onClick={handleQuit} className='w-full mb-[30px] cursor-pointer'>
                    <Quit />
                </div>
            </div>
        </div>
    </>
  )
}

export default Pause