import React from 'react'

function WinCard() {
  return (
    <>
        <div id="winCardContainer" className='w-[285px] h-full bg-white rounded-[20px] border-[3px] border-black shadow-[0px_10px_0px_0px_#000] flex flex-col py-[17px] items-center'>
            <div id="declareWinnerContainer" className='text-black text-center text-base font-bold leading-[1.3]'>
                <p>PLAYER 2</p>
            </div>
            <div id="theWinContainer" className='text-center text-[56px] leading-[1.2] font-bold text-black'>
                <p>WINS</p>
            </div>
            <div id="playAgainContainer" className='w-[130px] flex justify-center bg-darkPurple rounded-[20px] py-[9px] text-white text-base font-bold leading-normal cursor-pointer'>
              <p>PLAY AGAIN</p>
            </div>
        </div>
    </>
  )
}

export default WinCard