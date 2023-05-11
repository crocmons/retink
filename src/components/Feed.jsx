import React from 'react'
import Card from './Card'
import Post from './Post'
import SignUp from './SignUp'

const Feed = () => {
  return (
    <main className='flex flex-col items-center justify-center my-4 p-4 gap-5'>
       <h2 className='hidden md:flex text-xl p-2 mt-4 font-bold text-violet-600'>
       EXPLAINER VIDEO
       </h2>
       <div className='hidden md:flex gap-5 p-3 my-3'>
       <iframe width="700" height="400" src="https://www.youtube.com/embed/ZBamrB-4niw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
       </div>
       {/* If Cards Info are dynamic then use here map function here */}
       {/* Card Component */}
       <Card />

       <div className='p-3 my-2 gap-3 flex flex-col justify-center items-center'>
         <h1 className='text-2xl font-bold text-violet-600'>Transform your Creation Process</h1>
         <p>With a new approach to ordering content, you can now stop juggling multiple 
          <br /> 
        documents and meetings and start publishing content faster and on demand</p>
       </div>
       <div className='p-3 my-3 gap-3 flex flex-col justify-center items-center'>
         <h1 className='text-2xl font-bold text-violet-600'>Activate your business growth with RetinkContent</h1>
         <p>Save time and maintain your brand identity within your budget range or 
        <br /> 
        sign up for affordable plans and still access multiple content services like:</p>
       </div>

       <Post />
       <SignUp />
    </main>
  )
}

export default Feed