import React from 'react'
import logoPost from '../assets/logoPost.png'
import blogPost from '../assets/blogPost.png'
import animatedVideos from '../assets/animatedVideos.png'
import productDemo from '../assets/productDemo.png'
import copyrightPost from '../assets/copywriting.png'
import socialMediaAds from '../assets/socialMediaAds.png'


const Post = () => {
  return (
    <div className='flex flex-wrap max-w-screen-md items-center justify-center space-x-6 mx-auto gap-6 my-4 group'>

        <div className='flex flex-col bg-white rounded-lg shadow-md w-full m-4 overflow-hidden sm:w-52 cursor-pointer group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 duration-500'>
            <img src={logoPost} alt='logoPost' className='h-30'/>
            <h4 className='text-xl px-2 font-bold'>Logos</h4>
            <p className='text-sm p-3 '>
            Have a unique & creative logo designed to express and represent your brand identity.
            </p>
        </div>

        <div className='flex flex-col bg-white rounded-lg shadow-md w-full m-8 overflow-hidden sm:w-52 cursor-pointer group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 duration-500'>
            <img src={blogPost} alt='blogPost' className='h-25'/>
            <h4 className='text-xl px-2 mt-2 font-bold'>Blog Writing</h4>
            <p className='text-sm p-3 '>
            Write SEO enriched blog posts as long or short articles on any topic of your choice .
            </p>
        </div>

        <div className='flex flex-col bg-white rounded-lg shadow-md w-full m-6 overflow-hidden sm:w-52 cursor-pointer group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 duration-500'>
            <img src={animatedVideos} alt='animatedPost' className='h-30'/>
            <h4 className='text-xl px-2 font-bold'>Animated Videos</h4>
            <p className='text-sm p-3 '>
            Bring animated characters to life to keep your viewers engaged and  entertained.
            </p>
        </div>

        <div className='flex flex-col bg-white rounded-lg shadow-md w-full m-6 overflow-hidden sm:w-52 cursor-pointer group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 duration-500'>
            <img src={productDemo} alt='logoPost' className='h-30'/>
            <h4 className='text-xl px-2 font-bold'>Product Demo</h4>
            <p className='text-sm p-3 '>
            Introduce your product to potential customers in a clear and creative video.
            </p>
        </div>

        <div className='flex flex-col bg-white rounded-lg shadow-md w-full m-6 overflow-hidden sm:w-52 cursor-pointer group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 duration-500'>
            <img src={copyrightPost} alt='logoPost' className='h-30'/>
            <h4 className='text-xl px-2 font-bold'>Copywriting</h4>
            <p className='text-sm p-3 '>
            Have creative and compelling copies written to boost your product, brand, service or company.
            </p>
        </div>
        <div className='flex flex-col bg-white rounded-lg shadow-md w-full m-6 overflow-hidden sm:w-52 cursor-pointer group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 duration-500'>
            <img src={socialMediaAds} alt='logoPost' className='h-30'/>
            <h4 className='text-xl px-2 font-bold'>Social Media Ads</h4>
            <p className='text-sm p-3 '>
            Boost sales and awareness with tailor made ads from experts.
            </p>
        </div>
    </div>
  )
}

export default Post