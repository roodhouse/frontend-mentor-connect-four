import React from 'react'
import RulesHeader from './rulesScreen/RulesHeader'
import Objective from './rulesScreen/Objective'
import HowToPlay from './rulesScreen/HowToPlay'
import ConfirmButton from './rulesScreen/ConfirmButton'

function RulesScreen({displayHome}) {
  return (
    <>
        <div id="rulesScreenContainer" className='bg-white rounded-[40px] pt-[30px] px-5 pb-[63px] flex flex-col items-center border-[3px] border-black shadow-[0px_10px_0px_0px_#000] md:items-start'>
            <div id="rulesHeaderWrapper" className='mb-[29px] md:self-center'>
                <RulesHeader />
            </div>
            <div id="objectiveWrapper" className='mb-[33px]'>
                <Objective />
            </div>
            <div id="howToPlayWrapper" className='self-start'>
                <HowToPlay />
            </div>
            <div id="confirmButtonWrapper" className='relative w-16 md:self-center'>
                <ConfirmButton displayHome={displayHome} />
            </div>
        </div>
    </>
  )
}

export default RulesScreen