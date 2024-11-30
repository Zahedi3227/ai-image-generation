import React from 'react'
import { assets } from '../assets/assets'
import { Link, useNavigate } from 'react-router-dom'
import { AppContext } from '../context/Context'
import { useContext } from 'react'


const NavBar = () => {

  const { user } = useContext(AppContext)
  const navigate = useNavigate()


  return (

    <div className='flex justify-between items-center py-4'>

      <div className=''>
        <Link to="/" className='flex items-center gap-2'>
          <img src={assets.logo} alt="logo" className='w-8 sm:w-10 md:w-12 lg:w-14' />
          <h1 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold'>
            IMAGEXI
          </h1>
        </Link>
      </div>


      <div>
        {user ?
          <div className='flex items-center gap-2 sm:gap-3'>
            <button onClick={() => navigate('/buy-credits')} className='
            flex items-center gap-2 bg-blue-100 px-4 sm:px+ py-1.5 sm:py-3 rounded-full
            hover:scale-105 transition-all duration-700'>
              <img src={assets.credit} alt="credit" className='w-5 sm:w-6 md:w-7 lg:w-8' />
              <p className='text-xs sm:text-sm font-medium text-gray-600' >Creadit left: 10</p>
            </button>
            <p className='text-gray-600 max-sm:hidden pl-4' >Hi, user</p>

            <div className='relative group'>
              <img src={assets.userprofile} alt="userprofile" className='w-10 drop-shadow' />

              <div className="absolute hidden group-hover:block top-0 right-0  z-10 text-black rounded pt-12">
                <ul className='list-none m-0 p-2 bg-white rounded-md border text-sm'>
                  <li className='cursor-pointer py-1 px-2 pr-10'>
                    logout
                  </li>
                </ul>
              </div>
            </div>

          </div>
          :
          <div className='flex items-center gap-2 sm:gap-5'>
            <p onClick={() => navigate('/buy-credits')} className="text-sm  font-semibold text-gray-700 cursor-pointer ">Pricing</p>
            <p onClick={() => navigate('/login')} className="bg-gray-800 hover:bg-gray-900 transition-colors duration-300 px-10 py-2 sm:px-8 text-white rounded-full shadow-lg cursor-pointer font-semibold">Login</p>
          </div>
        }
      </div>
    </div >
  )
}

export default NavBar
