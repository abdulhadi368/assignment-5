import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Hero = () => {
  return (
    <div>
      <div>
        <button className='absolute top-[650px] left-[125px]'>
          <img src='/image/Frame 11.svg'/>
         </button>
        <Image className='absolute top-[470px] left-[120px] h-[150px] w-auto' src={"/image/An example of intricate workmanship and detail, elegant necklaces and long and short chains form a part of our desirable collection..svg"} alt=' ' height={100} width={100}/>
        <Image className='absolute top-[280px] left-[120px] h-[150px] w-auto' src={"/image/IMPECCABLE CRAFTSMANSHIP AND FINESSE.svg"} alt='' height={100} width={100}/>
        <Image className='absolute top-[180px] right-[170px] h-[600px] w-auto ' src={"/image/rs-layer-wrap ⏵ rs-layer.svg"} alt='girl' width={100} height={100}/>
        <Image className='absolute top-[205px] right-[189px] h-[548px] w-auto' src={"/image/rs-layer-wrap ⏵ rs-layer (1).svg"} alt='frame' width={100} height={100}/>
      </div>
    </div>
  )
}

export default Hero;
