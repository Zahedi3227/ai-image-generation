import React from 'react'
import { Link } from 'react-router-dom'
import { Wand2, Stars, Sparkle, Instagram, Twitter, Facebook, Github, Heart } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="relative w-full overflow-hidden bg-gradient-to-b from-white via-indigo-50/50 to-violet-50/50">
      {/* Decorative Elements */}
      <div className="absolute inset-0 w-full">
        <div className="absolute left-1/4 bottom-1/4 w-[500px] h-[500px] bg-indigo-200/30 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute right-1/4 bottom-1/4 w-[500px] h-[500px] bg-violet-200/30 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Content wrapper */}
      <div className="relative z-10 w-full">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 py-16">
            {/* Brand Section */}
            <div className="space-y-6">
              {/* Logo/Brand */}
              <div className="flex items-center gap-2">
                <Wand2 className="w-8 h-8 text-indigo-600" />
                <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
                  AI Magic
                </span>
              </div>
              <p className="text-gray-600 max-w-sm">
                Transform your imagination into stunning visuals with our AI-powered image generation platform.
              </p>
              {/* Social Links */}
              <div className="flex gap-4">
                {[
                  { icon: Twitter, href: '#' },
                  { icon: Instagram, href: '#' },
                  { icon: Facebook, href: '#' },
                  { icon: Github, href: '#' }
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="group p-2 rounded-full bg-gradient-to-r from-indigo-50 to-violet-50 hover:from-indigo-100 hover:to-violet-100 transition-colors"
                  >
                    <social.icon className="w-5 h-5 text-indigo-600 group-hover:scale-110 transition-transform" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="grid grid-cols-2 gap-8 lg:col-span-2">
              <div>
                <h3 className="text-lg font-semibold bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent mb-4">
                  Quick Links
                </h3>
                <ul className="space-y-3">
                  {['Home', 'About', 'Features', 'Pricing', 'Contact'].map((item) => (
                    <li key={item}>
                      <Link
                        to="/"
                        className="text-gray-600 hover:text-indigo-600 transition-colors flex items-center gap-2 group"
                      >
                        <Sparkle className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent mb-4">
                  Resources
                </h3>
                <ul className="space-y-3">
                  {['Documentation', 'Support', 'Terms', 'Privacy'].map((item) => (
                    <li key={item}>
                      <Link
                        to="/"
                        className="text-gray-600 hover:text-indigo-600 transition-colors flex items-center gap-2 group"
                      >
                        <Stars className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-indigo-100/50 py-8">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-gray-600 text-sm flex items-center gap-1">
                Made with <Heart className="w-4 h-4 text-red-500 animate-pulse" /> by AI Magic Team
              </p>
              <div className="flex items-center gap-6">
                <Link to="/" className="text-sm text-gray-600 hover:text-indigo-600 transition-colors">
                  Terms & Conditions
                </Link>
                <Link to="/" className="text-sm text-gray-600 hover:text-indigo-600 transition-colors">
                  Privacy Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Extra background extension for wider screens */}
      <div className="absolute inset-x-0 bottom-0 h-full bg-gradient-to-b from-white via-indigo-50/50 to-violet-50/50 -z-10 transform scale-x-150"></div>
    </footer>
  )
}

export default Footer
