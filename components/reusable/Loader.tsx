import React from 'react'
import Image from 'next/image'
const Loader = () => {
  return (
    <Image  width={100}height={100} alt='loading' src="/images/rolling.gif" style={{  margin:" 20px auto"}} /> 
  )
}

export default Loader