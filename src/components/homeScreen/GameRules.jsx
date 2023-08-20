import React from 'react'

function GameRules() {
  return (
    <>
      <div id="gameRulesContainer" className='w-[335px] h-[72px] rounded-[20px] border-[3px] border-black shadow-[0px_10px_0px_0px_black] bg-white flex pl-5 pr-[17px] justify-between items-center cursor-pointer hover:border-darkPurple hover:shadow-[0px_10px_0px_0px_#5C2DD5]'>
          <div id="gameRulesCopy" className='text-2xl leading-normal font-bold text-black'>
            <p>GAME RULES</p>
          </div>
      </div>
    </>
  )
}

export default GameRules