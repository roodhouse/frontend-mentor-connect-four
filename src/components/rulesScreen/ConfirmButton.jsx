import React from 'react'
import { useDisplayHome } from '../../context/DisplayHome'

function ConfirmButton() {
  const { displayHome } = useDisplayHome()

  const handleClick = (e) => {
    displayHome()
    // hide rules module
    document.getElementById('rulesScreenWrapper').classList.add('hidden')

  }

  return (
    <>
      <div id="confirmButtonContainer" className='absolute w-16 h-16'>
        <div id="confirmButton" onClick={handleClick} className='w-16 h-16 bg-[url("./assets/images/icon-check.svg")] bg-no-repeat bg-contain hover:bg-[url("./assets/images/icon-check-hover.svg")] cursor-pointer absolute bottom-[-55%]'/>
      </div>
    </>
  )
}

export default ConfirmButton