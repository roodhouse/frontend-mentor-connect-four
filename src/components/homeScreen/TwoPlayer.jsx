import React from 'react'

function TwoPlayer() {
  return (
    <>
      <div id="twoPlayerContainer" className='w-[335px] md:w-[400px] h-[72px] rounded-[20px] border-[3px] border-black shadow-[0px_10px_0px_0px_black] bg-yellow flex pl-5 pr-[17px] justify-between items-center cursor-pointer hover:border-darkPurple hover:shadow-[0px_10px_0px_0px_#5C2DD5]'>
          <div id="twoPlayerCopy" className='text-2xl leading-normal font-bold text-black'>
            <p>PLAY VS PLAYER</p>
          </div>
          <div id="cpuLogo" className='w-[82px] h-[46px] bg-[url("./assets/images/player-vs-player.svg")]'/>
      </div>
    </>
  )
}

export default TwoPlayer