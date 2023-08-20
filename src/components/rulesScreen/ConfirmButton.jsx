import React from 'react'

function ConfirmButton() {
  return (
    <>
      <div id="confirmButtonContainer">
        <div id="confirmButton" className='w-16 h-16 bg-[url("./assets/images/icon-check.svg")] bg-no-repeat bg-contain hover:bg-[url("./assets/images/icon-check-hover.svg")] cursor-pointer'/>
      </div>
    </>
  )
}

export default ConfirmButton