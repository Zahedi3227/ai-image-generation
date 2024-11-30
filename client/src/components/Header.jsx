import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { ArrowRight, Sparkles, X, Wand2 } from 'lucide-react'

const Header = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    assets.recentone,
    assets.recenttwo,
    assets.recentthree,
    assets.recentone // Using recentone again as 4th image, replace with another if available
  ];

  return (
    <div className='flex flex-col items-center text-center pt-20 pb-10'>
      {/* Badge */}
      <div className='text-gray-800 inline-flex text-center gap-3 bg-white/80 backdrop-blur-sm px-6 py-2.5 rounded-full border border-gray-200 items-center shadow-md hover:shadow-lg transition-all duration-300'>
        <Sparkles className="w-5 h-5 text-blue-500" />
        <p className="font-medium">Best AI Image Generator</p>
      </div>

      {/* Main Heading */}
      <div className="mt-12 space-y-6 max-w-4xl mx-auto px-4">
        <h1 className='text-4xl sm:text-6xl md:text-7xl font-bold leading-tight'>
          Generate AI{' '}
          <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-600'>
            Images
          </span>
          {' '}in Seconds
        </h1>

        <p className='text-gray-600 text-lg sm:text-xl max-w-2xl mx-auto'>
          Unleash your creativity with our AI image generator and create stunning, unique visuals instantly.
        </p>

        {/* Enhanced CTA Button */}
        <button className="group relative inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold text-lg rounded-2xl
                        shadow-[0_8px_30px_rgb(59,130,246,0.3)]
                        hover:shadow-[0_8px_30px_rgb(59,130,246,0.5)]
                        transform hover:-translate-y-0.5 transition-all duration-300 mt-8
                        overflow-hidden">
          {/* Animated background effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[length:200%_100%] animate-shimmer"></div>

          {/* Button content */}
          <div className="relative flex items-center gap-3">
            {/* Magic wand icon with animation */}
            <Wand2 className="w-6 h-6 transform group-hover:rotate-12 transition-transform duration-300" />

            <span className="font-bold">Start Creating</span>

            {/* Arrow with enhanced animation */}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />

            {/* Sparkle effects */}
            <Sparkles className="absolute -top-8 -right-8 w-16 h-16 text-blue-200 opacity-0 group-hover:opacity-50 transform group-hover:rotate-45 transition-all duration-500" />
            <Sparkles className="absolute -bottom-8 -left-8 w-16 h-16 text-blue-200 opacity-0 group-hover:opacity-50 transform group-hover:-rotate-45 transition-all duration-500" />
          </div>
        </button>
      </div>

      {/* Redesigned Image Gallery */}
      <div className='mt-16 w-full max-w-6xl mx-auto px-4'>
        {/* Images Container */}
        <div className='flex justify-center gap-4 flex-wrap sm:flex-nowrap'>
          {images.map((img, index) => (
            <div
              key={index}
              onClick={() => setSelectedImage(index)}
              className="group relative w-[160px] sm:w-[180px] aspect-square rounded-2xl overflow-hidden cursor-pointer
                         transform transition-all duration-500 ease-out
                         hover:scale-105 hover:-translate-y-1
                         hover:shadow-[0_8px_30px_rgb(59,130,246,0.2)]"
            >
              {/* Background Glow Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100
                            bg-gradient-to-t from-blue-500/20 to-transparent
                            transition-opacity duration-300" />

              {/* Image */}
              <img
                src={img}
                alt={`AI Art ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-700
                         group-hover:scale-110"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent
                            opacity-0 group-hover:opacity-100 transition-all duration-300
                            flex items-end justify-center pb-4">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300
                              flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-white" />
                  <span className="text-white text-sm font-medium">Expand</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Caption */}
        <p className='text-gray-600 text-center mt-6 flex items-center justify-center gap-2'>
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500/50"></span>
          <span className="text-sm font-medium">AI-Generated Masterpieces</span>
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500/50"></span>
        </p>
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
            <div className="bg-white/5 p-2 rounded-2xl backdrop-blur-sm">
              <img
                src={images[selectedImage]}
                alt={`Expanded AI generated image ${selectedImage + 1}`}
                className="w-full h-auto rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      )}

      {/* Decorative Elements */}
      <div className="absolute top-40 left-0 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
      <div className="absolute top-40 right-0 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
    </div>
  )
}

export default Header
