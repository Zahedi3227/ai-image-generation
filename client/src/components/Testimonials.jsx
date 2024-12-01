import React from 'react'
import { TestimonialData } from '../assets/assets'
import { Stars, Sparkle, Quote, MessageCircle } from 'lucide-react'

const Testimonials = () => {
  return (
    <div className='relative flex flex-col items-center justify-center py-24 overflow-hidden'>
      {/* Decorative background elements */}
      <div className="absolute inset-0">
        <div className="absolute left-1/4 top-1/4 w-[500px] h-[500px] bg-indigo-200/30 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute right-1/4 -bottom-1/4 w-[500px] h-[500px] bg-violet-200/30 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-gradient-to-r from-indigo-50 to-violet-50 border border-indigo-100 backdrop-blur-sm mb-6">
            <MessageCircle className="w-5 h-5 text-indigo-500" />
            <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent font-medium">
              Customer Stories
            </span>
            <Stars className="w-5 h-5 text-violet-500" />
          </div>
          <h2 className='text-4xl sm:text-5xl font-bold text-gray-900 mb-4'>
            Magical{' '}
            <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-indigo-600 bg-clip-text text-transparent">
              Experiences
            </span>
          </h2>
          <p className='text-xl text-gray-600 max-w-2xl mx-auto'>
            Discover what our community is saying about their creative journey
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto'>
          {TestimonialData.map((item, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl bg-white/80 backdrop-blur-sm
                         shadow-[0_4px_20px_rgba(99,102,241,0.05)] hover:shadow-[0_4px_20px_rgba(99,102,241,0.2)]
                         border border-indigo-100/20 transform hover:-translate-y-1 transition-all duration-300"
            >
              {/* Quote icon */}
              <Quote className="absolute top-6 right-6 w-8 h-8 text-indigo-100 transform -rotate-6" />

              {/* Content */}
              <div className='flex gap-6'>
                {/* Avatar */}
                <div className='relative flex-shrink-0'>
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-indigo-500 via-violet-500 to-indigo-500 p-[2px]">
                    <img
                      className='w-full h-full object-cover rounded-full ring-2 ring-white'
                      src={item.image}
                      alt={item.name}
                    />
                  </div>
                  {/* Decorative elements */}
                  <Sparkle className="absolute -top-2 -right-2 w-4 h-4 text-violet-500 opacity-0 group-hover:opacity-100 transform group-hover:rotate-12 transition-all duration-300" />
                </div>

                {/* Text Content */}
                <div className='flex-1 space-y-3'>
                  <p className='text-gray-700 text-lg leading-relaxed'>
                    {item.review}
                  </p>

                  {/* Rating */}
                  <div className="flex items-center gap-1 text-indigo-500">
                    {[...Array(5)].map((_, i) => (
                      <Stars key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>

                  {/* Author Info */}
                  <div className='space-y-1'>
                    <h3 className='font-semibold text-gray-900'>{item.name}</h3>
                    <p className='text-sm text-gray-500'>{item.role}</p>
                  </div>
                </div>
              </div>

              {/* Decorative corner gradients */}
              <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-indigo-500/5 to-transparent rounded-tl-2xl"></div>
              <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-violet-500/5 to-transparent rounded-br-2xl"></div>
            </div>
          ))}
        </div>

        {/* Bottom Caption */}
        <div className='text-center mt-12 space-y-2'>
          <div className='flex items-center justify-center gap-3'>
            <Stars className="w-5 h-5 text-indigo-500" />
            <span className="text-base font-medium bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
              Join Our Growing Community
            </span>
            <Sparkle className="w-5 h-5 text-violet-500" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials
