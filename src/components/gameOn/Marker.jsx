import React from 'react'
import { useCompetition } from '../../context/Competition'

function Marker({index}) {

  const { marker } = useCompetition()

  return (
    <>
        <div id={'marker-'+index} className='aMarker w-8 h-[26px] bg-transparent bg-contain bg-no-repeat ml-[52px]' />
    </>
  )
}

export default Marker