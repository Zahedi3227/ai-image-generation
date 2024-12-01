import React from 'react'
import { StepsData } from '../assets/assets.js'
import { Stars, Sparkle, Sparkles } from 'lucide-react'

const Steps = () => {
  return (
    <div className='relative flex flex-col items-center justify-center py-32 bg-gradient-to-b from-indigo-50/50 via-white to-violet-50/30 overflow-hidden'>
      {/* Decorative background elements */}
      <div className="absolute inset-0">
        <div className="absolute left-1/4 top-1/4 w-[500px] h-[500px] bg-indigo-200/30 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute right-1/4 -bottom-1/4 w-[500px] h-[500px] bg-violet-200/30 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section with enhanced styling */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-gradient-to-r from-indigo-50 to-violet-50 border border-indigo-100 backdrop-blur-sm mb-6">
            <Stars className="w-5 h-5 text-indigo-500" />
            <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent font-medium">
              Simple Process
            </span>
            <Sparkle className="w-5 h-5 text-violet-500" />
          </div>
          <h1 className='text-4xl sm:text-5xl font-bold text-gray-900 mb-6'>
            Create Images in{' '}
            <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-indigo-600 bg-clip-text text-transparent">
              3 Simple Steps
            </span>
          </h1>
          <p className='text-xl text-gray-600 max-w-2xl mx-auto'>
            Transform your imagination into stunning visuals with our powerful AI
          </p>
        </div>

        {/* Steps Cards with enhanced styling */}
        <div className="space-y-8 w-full max-w-4xl mx-auto">
          {StepsData.map((step, index) => (
            <div
              key={index}
              className="group flex items-center gap-8 p-8 bg-white/80 backdrop-blur-sm rounded-2xl
                         shadow-[0_4px_20px_rgba(99,102,241,0.05)] hover:shadow-[0_4px_20px_rgba(99,102,241,0.15)]
                         transform hover:-translate-y-1 transition-all duration-300
                         border border-indigo-100/20"
            >
              {/* Magical Icon Container */}
              <div className="relative flex-shrink-0">
                <div className="w-20 h-20 flex items-center justify-center bg-gradient-to-r from-indigo-50 to-violet-50 rounded-2xl
                              group-hover:shadow-lg group-hover:shadow-indigo-200/50 transition-shadow duration-300">
                  {React.createElement(step.icon, {
                    size: 36,
                    className: "text-indigo-600 stroke-[1.5px] group-hover:scale-110 transition-transform duration-300"
                  })}
                </div>
                {/* Decorative elements */}
                <Sparkles
                  className="absolute -top-2 -right-2 w-5 h-5 text-violet-500 opacity-0 group-hover:opacity-100 transform group-hover:rotate-12 transition-all duration-300"
                />
                <Stars
                  className="absolute -bottom-2 -left-2 w-5 h-5 text-indigo-500 opacity-0 group-hover:opacity-100 transform group-hover:-rotate-12 transition-all duration-300"
                />
              </div>

              {/* Content */}
              <div className="flex-1">
                <h2 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent mb-3">
                  {step.title}
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Steps
