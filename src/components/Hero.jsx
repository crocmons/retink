import React from 'react'
import Avatar from '../assets/Retink-avatar (1) 1mainlogo.png'

const Hero = () => {
  return (
    <div className="flex items-center justify-evenly md:text-5xl m-2 gap-5">
    <div className='flex flex-col gap-4 p-2'>
       <h1 className='font-extrabold md:text-4xl text-2xl p-2'>
       Get Advanced AI
       <br className='hidden md:block'/>
      + Expert Created
      <span className='md:text-4xl text-xl text-violet-600'> Logos</span>
       </h1>
       <p className='gap-3 md:text-xl text-sm'>
       Boost your sales 
       <span className='font-bold md:text-2xl text-sm text-violet-600'> 10x faster </span>
       with content customized by our
       <br />
       unique partnership of 
       <span className='font-bold md:text-2xl text-sm text-violet-600'> human creativity and AI optimization</span>
       </p>
    </div>

    <div>
        <img src={Avatar} alt='avatar' className='w-50 h-50'/>
    </div>
    </div>
  )
}

export default Hero