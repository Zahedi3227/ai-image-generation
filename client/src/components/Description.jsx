import React from 'react'
import { Sparkles, Stars, Wand2 } from 'lucide-react'

const Description = () => {
  return (
    <div className='relative flex flex-col items-center justify-center my-24 p-6 md:px-28 overflow-hidden'>
      {/* Decorative background elements */}
      <div className="absolute inset-0">
        <div className="absolute left-1/4 top-1/4 w-96 h-96 bg-purple-200/30 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute right-1/4 bottom-1/4 w-96 h-96 bg-blue-200/30 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10">
        {/* Header badge */}
        <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-100 mb-6">
          <Sparkles className="w-5 h-5 text-purple-500" />
          <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent font-medium">
            AI-Powered Magic
          </span>
        </div>

        {/* Main heading */}
        <h1 className='text-4xl sm:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 bg-clip-text text-transparent'>
          Transform Words into Stunning Images
        </h1>

        <p className='text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto'>
          Experience the magic of AI as your imagination comes to life with breathtaking visuals
        </p>

        {/* Fantasy-themed showcase container */}
        <div className="relative group">
          {/* Main showcase area */}
          <div className="relative w-full max-w-3xl mx-auto p-8 rounded-2xl bg-gradient-to-r from-purple-50 via-white to-blue-50 border border-purple-100/50 shadow-xl">
            {/* Floating elements */}
            <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform">
              <Stars className="w-6 h-6 text-white" />
            </div>
            <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform">
              <Wand2 className="w-6 h-6 text-white" />
            </div>

            {/* Content grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {[...Array(6)].map((_, index) => (
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

          {/* Decorative glow effects */}
          <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </div>

        {/* Call to action */}
        <div className="mt-16 text-center">
          <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-semibold text-lg shadow-lg shadow-purple-200 hover:shadow-xl hover:shadow-purple-300 transform hover:-translate-y-0.5 transition-all duration-300">
            Start Creating Magic
          </button>
        </div>
      </div>
    </div>
  )
}

export default Description
