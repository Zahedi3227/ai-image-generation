import React from 'react'
import { Sparkles, Stars, Wand2 } from 'lucide-react'

const Description = () => {
  return (
    <div className='relative flex flex-col items-center justify-center my-12 sm:my-24 p-4 sm:p-6 md:px-28 overflow-hidden'>
      {/* Decorative background elements */}
      <div className="absolute inset-0">
        <div className="absolute left-1/4 top-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-purple-200/30 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute right-1/4 bottom-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-blue-200/30 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 w-full max-w-7xl">
        {/* Header section - centered column */}
        <div className="flex flex-col items-center mb-8 sm:mb-16">
          {/* Header badge */}
          <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 rounded-full bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-100 mb-4 sm:mb-6">
            <Sparkles className="w-4 sm:w-5 h-4 sm:h-5 text-purple-500" />
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent font-medium text-sm sm:text-base">
              AI-Powered Magic
            </span>
          </div>
        </div>

        {/* Content section - row layout */}
        <div className="flex flex-col lg:flex-row items-start gap-8 sm:gap-12 px-2 sm:px-4">
          {/* Fantasy-themed showcase container - Left side */}
          <div className="relative group w-full lg:w-1/2">
            {/* Main showcase area */}
            <div className="relative w-full max-w-2xl mx-auto p-4 sm:p-8 rounded-2xl bg-gradient-to-r from-purple-50 via-white to-blue-50 border border-purple-100/50 shadow-xl">
              {/* Floating elements - Hidden on mobile */}
              <div className="hidden sm:flex absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full items-center justify-center shadow-lg transform hover:scale-110 transition-transform">
                <Stars className="w-6 h-6 text-white" />
              </div>
              <div className="hidden sm:flex absolute -bottom-6 -left-6 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full items-center justify-center shadow-lg transform hover:scale-110 transition-transform">
                <Wand2 className="w-6 h-6 text-white" />
              </div>

              {/* Content grid */}
              <div className="grid grid-cols-2 gap-3 sm:gap-6">
                {[...Array(4)].map((_, index) => (
                  <div
                    key={index}
                    className="aspect-square rounded-xl bg-gradient-to-br from-purple-100/50 to-blue-100/50 p-1"
                  >
                    <div className="w-full h-full rounded-lg bg-white/80 backdrop-blur-sm flex items-center justify-center">
                      <div className="w-full h-full rounded-lg bg-gradient-to-br from-purple-500/5 to-blue-500/5 animate-pulse"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Decorative glow effects - Hidden on mobile */}
            <div className="hidden sm:block absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>

          {/* Right side content */}
          <div className="flex-1 max-w-xl lg:max-w-none w-full lg:w-1/2">
            {/* Adjusted heading with added top margin */}
            <h1 className='text-2xl sm:text-3xl font-bold mb-4 bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 bg-clip-text text-transparent px-2 mt-4 sm:mt-8'>
              Transform Words into Stunning Images
            </h1>

            <p className='text-lg sm:text-xl text-gray-600 leading-relaxed mb-8 px-2'>
              Experience the magic of AI as your imagination comes to life with breathtaking visuals. Our advanced AI technology transforms your words into stunning, unique images that capture the essence of your vision.
            </p>

            {/* Call to action - Hidden on mobile */}
            <button className="hidden sm:inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-semibold text-lg shadow-lg shadow-purple-200 hover:shadow-xl hover:shadow-purple-300 transform hover:-translate-y-0.5 transition-all duration-300">
              <Wand2 className="w-5 h-5" />
              Start Creating Magic
              <Stars className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Description
