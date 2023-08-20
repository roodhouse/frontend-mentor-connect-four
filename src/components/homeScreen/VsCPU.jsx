import React from 'react'

function VsCPU() {
  return (
    <>
      <div id="cpuContainer" className='w-[335px] h-[72px] rounded-[20px] border-[3px] border-black shadow-[0px_10px_0px_0px_black] bg-red flex pl-5 pr-[17px] justify-between items-center cursor-pointer hover:border-darkPurple hover:shadow-[0px_10px_0px_0px_darkPurple]'>
          <div id="cpuCopy" className='text-2xl leading-normal font-bold text-white'>
            <p>PLAY VS CPU</p>
          </div>
          <div id="cpuLogo" className='w-[82px] h-[46px] bg-[url("./assets/images/player-vs-cpu.svg")]'/>
      </div>
    </>
  )
}

export default VsCPU