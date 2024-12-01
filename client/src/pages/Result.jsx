import React from 'react'
import { assets } from '../assets/assets'
import { Wand2, Stars, Sparkle, Download } from 'lucide-react'
import { useState } from 'react'
const Result = () => {
  const handleGenerateAnother = (e) => {
    e.preventDefault()
    // Add your generate logic here
  }


  const [image, setImage] = useState(assets.featureone)
  const [isImageLoaded, setIsImageLoaded] = useState(false)
  const [loading, setLoading] = useState(false)


  return (
    <div className="relative min-h-[90vh] bg-gradient-to-b from-white via-indigo-50/50 to-violet-50/50 overflow-hidden mt-12">
      {/* Decorative background elements */}
      <div className="absolute inset-0">
        <div className="absolute left-1/4 top-1/4 w-[500px] h-[500px] bg-indigo-200/30 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute right-1/4 bottom-1/4 w-[500px] h-[500px] bg-violet-200/30 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      <form className="relative z-10 flex flex-col items-center justify-center w-full max-w-4xl mx-auto px-4 py-12">
        {/* Header Badge */}
        <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-gradient-to-r from-indigo-50 to-violet-50 border border-indigo-100 backdrop-blur-sm mb-12">
          <Stars className="w-5 h-5 text-indigo-500" />
          <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent font-medium">
            AI Image Generation
          </span>
          <Sparkle className="w-5 h-5 text-violet-500" />
        </div>

        {/* Image Container */}
        <div className="relative group w-full max-w-sm mb-8">
          <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-indigo-500 via-violet-500 to-indigo-500 p-[2px]">
            <div className="relative rounded-2xl overflow-hidden bg-white">
              <img
                src={assets.featureone}
                alt=""
                className="w-full h-full object-cover rounded-2xl"
              />

              {/* Loading Progress Bar */}
              <div className="absolute bottom-0 left-0 w-full">
                <div className="h-1 bg-gradient-to-r from-indigo-500 via-violet-500 to-indigo-500 transition-all duration-[10s]"></div>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/60 via-violet-800/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>

          {/* Decorative Corner Elements */}
          <Sparkle className="absolute -top-2 -right-2 w-6 h-6 text-violet-500" />
          <Stars className="absolute -bottom-2 -left-2 w-6 h-6 text-indigo-500" />
        </div>

        {/* Loading Text */}
        <div className={`${loading ? 'flex items-center gap-3 mb-12' : 'hidden'}`}>
          <Wand2 className="w-6 h-6 text-indigo-600 animate-pulse" />
          <p className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
            Creating Magic...
          </p>
        </div>

        {/* Input Container */}

        {!isImageLoaded &&
          <div className="relative w-full max-w-xl">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-violet-500 to-indigo-500 rounded-full blur opacity-25"></div>
            <div className="relative flex w-full bg-white/80 backdrop-blur-sm text-gray-700 text-sm rounded-full border border-indigo-100/20 shadow-lg shadow-indigo-500/10">
              <input
                type="text"
                placeholder="Enter your prompt"
                className="flex-1 bg-transparent border-none outline-none px-8 py-4 placeholder-gray-400"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-violet-600 text-white rounded-full font-medium hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-300 mr-1 my-1 flex items-center gap-2 cursor-pointer"
              >
                <span>Generate</span>
                <Wand2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        }

        {/* Action Buttons */}

        {isImageLoaded && (
          <div className="relative flex items-center justify-center gap-6 mt-10">
            <button
              type="button"
              onClick={() => { setIsImageLoaded(false) }}
              className="group px-6 py-3 bg-gradient-to-r from-indigo-600 to-violet-600 text-white rounded-full
                font-medium transition-all duration-300 flex items-center gap-3
                hover:shadow-lg hover:shadow-indigo-500/25 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span className="relative">Generate Another</span>
              <Wand2 className="w-4 h-4 transition-transform duration-300 group-hover:rotate-[15deg] group-hover:scale-110" />
            </button>

            <a
              href={image}
              download="ai-generated-image.png"
              className="group px-6 py-3 bg-gradient-to-r from-indigo-600 to-violet-600 text-white rounded-full
                font-medium transition-all duration-300 flex items-center gap-3
                hover:shadow-lg hover:shadow-indigo-500/25 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              onClick={(e) => {
                console.log('Image downloaded')
              }}
            >
              <span className="relative">Download</span>
              <Download
                className="w-4 h-4 transition-transform duration-300 group-hover:scale-110 group-hover:translate-y-[1px]"
              />
            </a>
          </div>
        )}
      </form >
    </div >
  )
}

export default Result
