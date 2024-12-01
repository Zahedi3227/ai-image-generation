import React from 'react'
import { assets } from '../assets/assets'
import { Link, useNavigate } from 'react-router-dom'
import { AppContext } from '../context/Context'
import { useContext } from 'react'
import { Wallet, LogOut, ChevronDown, Sparkles, Star, Crown } from 'lucide-react'

const NavBar = () => {
  const { user } = useContext(AppContext)
  const navigate = useNavigate()

  return (
    <div className='fixed top-0 left-0 right-0 z-50'>
      {/* Fantasy-inspired gradient border */}
      <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-purple-500/50 via-blue-500/50 to-purple-500/50"></div>

      <div className='bg-white/90 backdrop-blur-lg'>
        <div className='max-w-7xl mx-auto px-6'>
          <div className='flex justify-between items-center h-20'>
            {/* Enhanced Logo Section */}
            <Link to="/" className='flex items-center gap-3 group'>
              <div className="relative">
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 opacity-75 blur-lg group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative bg-white rounded-lg p-2">
                  <Star className="w-8 h-8 text-blue-500 group-hover:text-purple-500 transition-colors duration-300" />
                </div>
              </div>
              <h1 className='text-2xl md:text-3xl font-bold tracking-tight'>
                IMAGE<span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">XI</span>
              </h1>
            </Link>

            {/* Navigation Section */}
            <div>
              {user ? (
                <div className='flex items-center gap-5'>
                  {/* Credits Display with Fantasy Style */}
                  <div className='flex items-center gap-3 px-5 py-2.5 rounded-xl
                                bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-100
                                shadow-inner'>
                    <Crown className="w-5 h-5 text-yellow-500" />
                    <span className='bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-bold'>
                      10 Credits
                    </span>
                  </div>

                  {/* Buy Credits Button */}
                  <button
                    onClick={() => navigate('/buy-credits')}
                    className='px-5 py-2.5 text-blue-600 font-medium rounded-xl
                             relative group overflow-hidden'
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-blue-100 to-purple-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    <span className="relative flex items-center gap-2">
                      <Sparkles className="w-4 h-4" />
                      Get Credits
                    </span>
                  </button>

                  {/* User Profile */}
                  <div className='relative group'>
                    <button className="flex items-center gap-3 p-2.5 rounded-xl
                                     hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50
                                     transition-all duration-300">
                      <span className='text-gray-700 font-medium'>Hi, User</span>
                      <div className="flex items-center gap-2">
                        <div className="relative">
                          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 animate-pulse"></div>
                          <div className="relative rounded-xl overflow-hidden border-2 border-white">
                            <div className="w-9 h-9 bg-gradient-to-r from-blue-200 to-purple-200 flex items-center justify-center">
                              <span className="text-lg font-bold text-white">U</span>
                            </div>
                          </div>
                        </div>
                        <ChevronDown className="w-4 h-4 text-gray-400 group-hover:text-gray-600 transition-colors duration-300" />
                      </div>
                    </button>

                    {/* Enhanced Dropdown Menu */}
                    <div className="absolute right-0 mt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                      <div className="py-2 bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
                        <button className="w-full px-4 py-3 text-left text-sm text-gray-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 flex items-center gap-2 transition-colors duration-300">
                          <LogOut className="w-4 h-4" />
                          <span>Sign out</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className='flex items-center gap-6'>
                  <button
                    onClick={() => navigate('/buy-credits')}
                    className="text-gray-600 hover:text-gray-900 font-medium flex items-center gap-2"
                  >
                    <Crown className="w-5 h-5 text-yellow-500" />
                    Pricing
                  </button>
                  <button
                    onClick={() => navigate('/login')}
                    className="relative group px-6 py-2.5 rounded-xl overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 transition-transform duration-300 group-hover:scale-105"></div>
                    <span className="relative text-white font-medium">Login</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar
