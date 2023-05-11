import React from 'react'
import AI from '../assets/artificial-intelligence-svgrepo-com 1brain.svg'
import FilesIcon from '../assets/Groupbrand (1).svg'
import VectorIcon from '../assets/Vector.svg'
import CustomerIcon from '../assets/direct-customer-svgrepo-com 1.png'
import VectorPublishIcon from '../assets/Vectorpublish.svg'

const Card = () => {
  return (
    <div className='flex flex-wrap justify-center md:space-x-10 items-center gap-6 p-3 my-10'>

    <div className="max-w-sm bg-white border border-gray-400 rounded-lg shadow dark:border-gray-700">
    <a href="#">
        <img src={AI} alt="AI" className='items-center ml-12 pt-2'/>
    </a>
    <div className="p-2 m-3 gap-2">
        <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">MakeAI-assisted
            <br />
            Content Choices</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700">Access and Order from an extensive catalogue in any language and on your budget’s terms. If unsure, our AI guides you to the best.</p>
        
    </div>
    </div>
        <div className="max-w-sm bg-white border border-gray-400 rounded-lg shadow dark:border-gray-700">
    <a href="#">
        <img src={FilesIcon} alt="AI" className='items-center ml-12 pt-2'/>
    </a>
    <div className="p-2 m-3 gap-2">
        <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Upload and Maintain
            <br />
            your Brand Identity</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700">Add your preferences and brand assets to ensure the contents is consistent with your brand identity. No brand asset? We can make for you!</p>
        
    </div>
        </div>
        <div className="max-w-sm bg-white border border-gray-400 rounded-lg shadow dark:border-gray-700">
    <a href="#">
        <img src={VectorIcon} alt="AI" className='items-center ml-12 py-3'/>
    </a>
    <div className="p-2 m-3 gap-2">
        <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Be informed as we create
            </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700">Your details are translated and sent to the AI, FP, or both (per your choice) as you relax and receive continuous updates.</p>
        
    </div>
        </div>
        <div className="max-w-sm bg-white border border-gray-400 rounded-lg shadow dark:border-gray-700">
    <a href="#">
        <img src={CustomerIcon} alt="AI" className='items-center ml-12 pt-2'/>
    </a>
    <div className="p-2 m-3 gap-2">
        <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Receive and Review</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700">The finished content is delivered and you can make corrections that we will effect to satisfy your requirements.</p>
        
    </div>
        </div>
        <div className="max-w-sm bg-white border border-gray-400 rounded-lg shadow dark:border-gray-700">
    <a href="#">
        <img src={VectorPublishIcon} alt="AI" className='items-center ml-12 pt-2'/>
    </a>
    <div className="p-2 m-3 gap-2">
        <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Publish and Monitor
            <br />
            your contents’ progress</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700">The finished content is delivered and you can make corrections that we will effect to satisfy your requirements.</p>
        
    </div>
        </div>
</div>
  )
}

export default Card