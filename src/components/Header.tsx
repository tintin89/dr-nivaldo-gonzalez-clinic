'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useLanguage } from '../contexts/LanguageContext'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'es' : 'en')
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">NG</span>
              </div>
              <span className="text-xl font-bold text-secondary-900">
                Dr. Nivaldo González
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="#services"
              className="text-secondary-700 hover:text-primary-600 font-medium transition-colors"
            >
              {t('nav.services')}
            </Link>
            <Link
              href="#about"
              className="text-secondary-700 hover:text-primary-600 font-medium transition-colors"
            >
              {t('nav.about')}
            </Link>
            <Link
              href="#testimonials"
              className="text-secondary-700 hover:text-primary-600 font-medium transition-colors"
            >
              {t('nav.testimonials')}
            </Link>
            <Link
              href="#contact"
              className="text-secondary-700 hover:text-primary-600 font-medium transition-colors"
            >
              {t('nav.contact')}
            </Link>
            
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-1 px-3 py-2 rounded-lg border border-gray-300 hover:border-primary-600 transition-colors"
            >
              <span className="text-sm font-medium text-secondary-700">
                {language === 'en' ? '🇺🇸 EN' : '🇪🇸 ES'}
              </span>
            </button>
              <button 
              className="btn-primary"
              onClick={() => {
                document.getElementById('contact')?.scrollIntoView({ 
                  behavior: 'smooth' 
                });
              }}
            >
              {t('nav.appointment')}
            </button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            {/* Mobile Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="flex items-center px-2 py-1 rounded border border-gray-300 hover:border-primary-600 transition-colors"
            >
              <span className="text-xs font-medium text-secondary-700">
                {language === 'en' ? '🇺🇸' : '🇪🇸'}
              </span>
            </button>
            
            <button
              onClick={toggleMenu}
              className="text-secondary-700 hover:text-primary-600 focus:outline-none focus:text-primary-600"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-100">
              <Link
                href="#services"
                className="block px-3 py-2 text-secondary-700 hover:text-primary-600 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.services')}
              </Link>
              <Link
                href="#about"
                className="block px-3 py-2 text-secondary-700 hover:text-primary-600 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.about')}
              </Link>
              <Link
                href="#testimonials"
                className="block px-3 py-2 text-secondary-700 hover:text-primary-600 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.testimonials')}
              </Link>
              <Link
                href="#contact"
                className="block px-3 py-2 text-secondary-700 hover:text-primary-600 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.contact')}
              </Link>              <div className="px-3 py-2">
                <button 
                  className="btn-primary w-full"
                  onClick={() => {
                    document.getElementById('contact')?.scrollIntoView({ 
                      behavior: 'smooth' 
                    });
                    setIsMenuOpen(false);
                  }}
                >
                  {t('nav.appointment')}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
