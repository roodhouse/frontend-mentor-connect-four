import React from 'react'
import RulesHeader from './rulesScreen/RulesHeader'
import Objective from './rulesScreen/Objective'
import HowToPlay from './rulesScreen/HowToPlay'
import ConfirmButton from './rulesScreen/ConfirmButton'

function RulesScreen() {
  return (
    <>
        <div id="rulesScreenContainer" className='bg-white rounded-[40px] pt-[30px] px-5 pb-[63px] flex flex-col items-center border-[3px] border-black shadow-[0px_10px_0px_0px_#000]'>
            <div id="rulesHeaderWrapper">
                <RulesHeader />
            </div>
            <div id="objectiveWrapper">
                <Objective />
            </div>
            <div id="howToPlayWrapper">
                <HowToPlay />
            </div>
            <div id="confirmButtonWrapper">
                <ConfirmButton />
            </div>
        </div>
    </>
  )
}

export default RulesScreen