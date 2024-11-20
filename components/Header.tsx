import React from 'react'
import Image from 'next/image';

const Header = () => {
  return (
    <div className='bg-[#A29875] h-[130x] w-auto '>
      <Image className='py-7 ml-7 h-34 w-auto' src={'/image/MANZZARI.svg'} alt='MANZZARI' width={100} height={100}/>
      </div>
  )
}

export default Header;
