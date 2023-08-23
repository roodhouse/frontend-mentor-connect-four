import React from 'react'

function WhiteCircleContainer({index}) {
  return (
    <>
      <div id={'whiteCircle'+index} className='w-[34px] h-[34px] bg-purple rounded-[50%] border-[3px] border-black'>

        {/* use below as template */}
      {/* <div id={'parentSquare'+index} className='parentSquare w-[96px] h-[96px] bg-semiDarkNavy rounded-[10px] shadow-[inset_0px_-8px_0px_0px_#10212A] flex justify-center px-[28px] py-6 mb-5 md:w-[140px] md:h-[140px] md:items-center cursor-pointer'>
            <Square turn={turn} changeTurn={changeTurn} index={index} playerXarray={playerXarray} playerOarray={playerOarray} restarted={restarted} newRound={newRound} theCompetition={theCompetition} theGrid={theGrid} updateGrid={updateGrid} cpuChoice={cpuChoice} />
        </div> */}
      </div>
    </>
  )
}

export default WhiteCircleContainer