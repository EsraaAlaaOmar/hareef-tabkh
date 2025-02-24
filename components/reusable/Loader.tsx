import React from 'react'
import Image from 'next/image'
const Loader = () => {
  return (
    <Image   alt='loading' src="/images/Rolling.gif" style={{  margin:" 20px auto"}} width={100} height={100}  /> 
  )
}

export default Loader