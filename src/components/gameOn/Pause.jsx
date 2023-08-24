import React from 'react'
import PauseCopy from './pause/PauseCopy'
import Continue from './pause/Continue'
import RestartGame from './pause/RestartGame'
import Quit from './pause/Quit'

function Pause() {
  return (
    <>
        <div id="pauseLightBox" className='h-screen absolute w-full top-0 bg-black opacity-50 z-40' />
        <div id="pauseMenuContainer" className='h-screen flex justify-center items-center absolute top-0'>
            <div id="pauseItemsWrapper" className='w-[335px] h-[437px] z-50 top-0 bg-purple rounded-[40px] border-[3px] border-black shadow-[0px_10px_0px_0px_#000] flex flex-col justify-center items-center px-5 py-[30px]'>
                <div id="pauseCopyWrapper" className=''>
                    <PauseCopy />
                </div>
                <div id="continueWrapper" className='w-full mb-[30px]'>
                    <Continue />
                </div>
                <div id="restartWrapper" className='w-full mb-[30px]'>
                    <RestartGame />
                </div>
                <div id="quitWrapper" className='w-full mb-[30px]'>
                    <Quit />
                </div>
            </div>
        </div>
    </>
  )
}

export default Pause