import React from 'react'
import { StepsData } from '../assets/assets.js'
import { ChevronRight } from 'lucide-react'

const Steps = () => {
  return (
    <div className='flex flex-col items-center justify-center py-32 bg-gradient-to-b from-blue-50/50 via-white to-blue-50/30'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section with enhanced styling */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-blue-50 border border-blue-100 mb-6">
            <span className="text-blue-600 font-medium">Simple Process</span>
            <div className="w-2 h-2 rounded-full bg-blue-500"></div>
          </div>
          <h1 className='text-4xl sm:text-5xl font-bold text-gray-900 mb-6'>
            Create Images in <span className="text-blue-500">3 Simple Steps</span>
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
              className="flex items-center gap-8 p-8 bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_4px_20px_rgba(0,0,0,0.1)] transform hover:-translate-y-1 transition-all duration-300 border border-gray-100"
            >
              {/* Step Number */}
              <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center text-white font-bold text-2xl shadow-lg shadow-blue-200">
                {index + 1}
              </div>

              {/* Icon */}
              <div className="flex-shrink-0 w-20 h-20 flex items-center justify-center bg-blue-50 rounded-2xl">
                {React.createElement(step.icon, {
                  size: 36,
                  className: "text-blue-500 stroke-[1.5px]"
                })}
              </div>

              {/* Content */}
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA button at the bottom */}
        <div className="text-center mt-16">
          <button className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold text-lg rounded-full shadow-lg shadow-blue-200 hover:shadow-xl hover:shadow-blue-200 transform hover:-translate-y-0.5 transition-all duration-300">
            Start Creating Now
            <ChevronRight
              size={20}
              className="group-hover:translate-x-1 transition-transform duration-300"
            />
          </button>
        </div>

        {/* Optional: Added subtle pattern for visual interest */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>
      </div>
    </div>
  )
}

export default Steps
