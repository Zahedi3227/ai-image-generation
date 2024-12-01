import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { ArrowRight, Sparkles, X, Wand2, Stars, Flame, Sparkle } from 'lucide-react'

const Header = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const images = [assets.recentone, assets.recenttwo, assets.recentthree, assets.recentone];

  return (
    <div className='relative flex flex-col items-center text-center pt-32 pb-10 overflow-hidden'>
      {/* Decorative background elements */}
      <div className="absolute inset-0">
        <div className="absolute left-1/4 top-1/4 w-[500px] h-[500px] bg-indigo-200/30 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute right-1/4 -bottom-1/4 w-[500px] h-[500px] bg-violet-200/30 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10">
        {/* Badge */}
        <div className='inline-flex items-center gap-2 px-6 py-2 rounded-full bg-gradient-to-r from-indigo-50 to-violet-50 border border-indigo-100 backdrop-blur-sm'>
          <Stars className="w-5 h-5 text-indigo-500" />
          <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent font-medium">
            Best AI Image Generator
          </span>
          <Sparkle className="w-5 h-5 text-violet-500" />
        </div>

        {/* Main Heading */}
        <div className="mt-12 space-y-6 max-w-[800px] mx-auto px-4 sm:px-8 md:px-4">
          <h1 className='text-[2.5rem] sm:text-[3.2rem] md:text-7xl font-bold leading-[1.1] sm:leading-tight'>
            <span className="inline-block">Generate AI</span>{' '}
            <span className='bg-gradient-to-r from-indigo-600 via-violet-600 to-indigo-600 bg-clip-text text-transparent inline-block'>
              Images
            </span>
            <span className='inline-block'> in Seconds</span>
          </h1>

          <p className='text-gray-600 text-lg sm:text-xl max-w-2xl mx-auto px-1'>
            Unleash your creativity with our AI image generator and create stunning, unique visuals instantly.
          </p>

          {/* Enhanced Magical CTA Button */}
          <button className="group relative inline-flex items-center gap-4 px-12 py-6 bg-gradient-to-r from-indigo-600 via-violet-600 to-indigo-600 text-white font-semibold text-lg rounded-full
                          shadow-lg shadow-indigo-200 hover:shadow-2xl hover:shadow-violet-300
                          transform hover:-translate-y-1 transition-all duration-500 mt-8 overflow-hidden">
            <div className="relative flex items-center gap-4">
              <div className="relative">
                <Wand2 className="w-7 h-7 transform group-hover:rotate-45 transition-transform duration-500" />
              </div>
              <span className="font-bold text-xl relative">
                Begin Your Magic Journey
              </span>
              <div className="relative">
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-500" />
              </div>
            </div>
            {/* Magical glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 via-violet-400 to-indigo-400 opacity-0 group-hover:opacity-30 transition-opacity duration-500 rounded-full blur-md"></div>
          </button>
        </div>

        {/* Redesigned Image Gallery */}
        <div className='mt-16 w-full max-w-6xl mx-auto px-4'>
          <div className='flex justify-center gap-4 flex-wrap sm:flex-nowrap'>
            {images.map((img, index) => (
              <div
                key={index}
                onClick={() => setSelectedImage(index)}
                className="group relative w-[160px] sm:w-[180px] aspect-square rounded-2xl overflow-hidden cursor-pointer
                           transform transition-all duration-500 ease-out
                           hover:scale-105 hover:-translate-y-1
                           hover:shadow-[0_8px_30px_rgb(99,102,241,0.2)]"
              >
                {/* Background Glow Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100
                              bg-gradient-to-t from-indigo-500/20 to-transparent
                              transition-opacity duration-300" />

                <img
                  src={img}
                  alt={`AI Art ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700
                           group-hover:scale-110"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/60 via-violet-800/20 to-transparent
                              opacity-0 group-hover:opacity-100 transition-all duration-300
                              flex items-end justify-center pb-4">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300
                                flex items-center gap-2">
                    <Stars className="w-4 h-4 text-white" />
                    <span className="text-white text-sm font-medium">View Magic</span>
                    <Sparkle className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Caption */}
          <div className='text-gray-600 text-center mt-6 flex items-center justify-center gap-2'>
            <Stars className="w-4 h-4 text-indigo-500" />
            <span className="text-sm font-medium">AI-Generated Masterpieces</span>
            <Sparkle className="w-4 h-4 text-violet-500" />
          </div>
        </div>

        {/* Enhanced Modal */}
        {selectedImage !== null && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-5xl w-full mx-4 transform transition-all duration-300 ease-out">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(null);
                }}
                className="absolute -top-12 right-0 text-white/80 hover:text-white
                         transition-colors p-2"
              >
                <X size={24} />
              </button>
              <div className="bg-gradient-to-r from-indigo-500/5 to-violet-500/5 p-2 rounded-2xl backdrop-blur-sm">
                <img
                  src={images[selectedImage]}
                  alt={`Expanded AI generated image ${selectedImage + 1}`}
                  className="w-full h-auto rounded-xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Header
