import React from 'react'
import { assets } from '../assets/assets'
const Description = () => {
  return (
    <div className='flex flex-col items-center justify-center my-24 p-6 md:px-28'>
      <h1 className='text-3xl sm:text-4xl font-bold text-center mb-2'>Transform words into Stunning Images</h1>
      <p className='text-lg text-gray-600 text-center mb-10'>Generate stunning images with AI</p>


      <div>
        <img src={assets.featureone} alt="feature" className='rounded-lg w-80 xl:w-96 ' />


      </div>


    </div>
  )
}

export default Description
