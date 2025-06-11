'use client'

import { useState, useEffect } from 'react'
import { useLanguage } from '../contexts/LanguageContext'

const ImageCarousel = () => {
  const { t } = useLanguage()
  const [currentSlide, setCurrentSlide] = useState(0)

  // Mental health themed SVG illustrations
  const slides = [
    {
      id: 1,
      titleKey: 'carousel.therapy.title',
      descKey: 'carousel.therapy.desc',
      svg: (
        <svg viewBox="0 0 400 300" className="w-full h-full">
          {/* Therapy session illustration */}
          <defs>
            <linearGradient id="bg1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f0f9ff" />
              <stop offset="100%" stopColor="#e0f2fe" />
            </linearGradient>
          </defs>
          <rect width="400" height="300" fill="url(#bg1)" rx="20"/>
          
          {/* Room */}
          <rect x="50" y="200" width="300" height="80" fill="#d1fae5" opacity="0.5" rx="10"/>
          
          {/* Therapist chair */}
          <rect x="80" y="180" width="60" height="80" fill="#3b82f6" rx="15"/>
          <rect x="85" y="175" width="50" height="15" fill="#1e40af" rx="7"/>
          
          {/* Patient chair */}
          <rect x="260" y="180" width="60" height="80" fill="#8b5cf6" rx="15"/>
          <rect x="265" y="175" width="50" height="15" fill="#7c3aed" rx="7"/>
          
          {/* Table between chairs */}
          <ellipse cx="200" cy="220" rx="30" ry="15" fill="#f59e0b"/>
          <rect x="185" y="215" width="30" height="8" fill="#d97706" rx="4"/>
          
          {/* Plant */}
          <rect x="320" y="200" width="8" height="60" fill="#059669"/>
          <circle cx="324" cy="200" r="15" fill="#10b981"/>
          <circle cx="318" cy="195" r="8" fill="#34d399"/>
          <circle cx="330" cy="198" r="10" fill="#34d399"/>
          
          {/* Window */}
          <rect x="60" y="80" width="80" height="60" fill="#dbeafe" stroke="#3b82f6" strokeWidth="3" rx="5"/>
          <line x1="100" y1="80" x2="100" y2="140" stroke="#3b82f6" strokeWidth="2"/>
          <line x1="60" y1="110" x2="140" y2="110" stroke="#3b82f6" strokeWidth="2"/>
          
          {/* Sun in window */}
          <circle cx="120" cy="100" r="12" fill="#fbbf24"/>
          
          {/* Calm atmosphere elements */}
          <circle cx="150" cy="50" r="3" fill="#a78bfa" opacity="0.6"/>
          <circle cx="250" cy="40" r="2" fill="#f472b6" opacity="0.6"/>
          <circle cx="180" cy="35" r="2.5" fill="#34d399" opacity="0.6"/>
        </svg>
      )
    },
    {
      id: 2,
      titleKey: 'carousel.family.title', 
      descKey: 'carousel.family.desc',
      svg: (
        <svg viewBox="0 0 400 300" className="w-full h-full">
          {/* Family therapy illustration */}
          <defs>
            <linearGradient id="bg2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fef3c7" />
              <stop offset="100%" stopColor="#fed7aa" />
            </linearGradient>
          </defs>
          <rect width="400" height="300" fill="url(#bg2)" rx="20"/>
          
          {/* Circle of chairs */}
          <circle cx="200" cy="180" r="80" fill="none" stroke="#f59e0b" strokeWidth="2" strokeDasharray="5,5" opacity="0.3"/>
          
          {/* Family members as simple figures */}
          {/* Parent 1 */}
          <circle cx="200" cy="120" r="20" fill="#3b82f6"/>
          <rect x="190" y="140" width="20" height="40" fill="#1e40af" rx="10"/>
          
          {/* Parent 2 */}
          <circle cx="280" cy="160" r="18" fill="#8b5cf6"/>
          <rect x="272" y="178" width="16" height="35" fill="#7c3aed" rx="8"/>
          
          {/* Child 1 */}
          <circle cx="160" cy="220" r="15" fill="#10b981"/>
          <rect x="152" y="235" width="16" height="30" fill="#059669" rx="8"/>
          
          {/* Child 2 */}
          <circle cx="240" cy="240" r="12" fill="#f59e0b"/>
          <rect x="234" y="252" width="12" height="25" fill="#d97706" rx="6"/>
          
          {/* Therapist */}
          <circle cx="120" cy="160" r="18" fill="#ef4444"/>
          <rect x="112" y="178" width="16" height="35" fill="#dc2626" rx="8"/>
          
          {/* Connection lines representing unity */}
          <path d="M 200 140 Q 240 150 280 178" stroke="#34d399" strokeWidth="3" fill="none" opacity="0.6"/>
          <path d="M 280 195 Q 260 220 240 252" stroke="#34d399" strokeWidth="3" fill="none" opacity="0.6"/>
          <path d="M 224 252 Q 190 240 160 235" stroke="#34d399" strokeWidth="3" fill="none" opacity="0.6"/>
          <path d="M 152 220 Q 135 190 120 178" stroke="#34d399" strokeWidth="3" fill="none" opacity="0.6"/>
          
          {/* Heart symbol in center */}
          <path d="M 200 170 C 195 165, 185 165, 185 175 C 185 165, 175 165, 170 175 C 170 185, 200 205, 200 205 C 200 205, 230 185, 230 175 C 230 165, 220 165, 215 175 C 215 165, 205 165, 200 170 Z" fill="#f472b6" opacity="0.7"/>
        </svg>
      )
    },
    {
      id: 3,
      titleKey: 'carousel.wellness.title',
      descKey: 'carousel.wellness.desc', 
      svg: (
        <svg viewBox="0 0 400 300" className="w-full h-full">
          {/* Mental wellness/mindfulness illustration */}
          <defs>
            <linearGradient id="bg3" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f0fdf4" />
              <stop offset="100%" stopColor="#dcfce7" />
            </linearGradient>
          </defs>
          <rect width="400" height="300" fill="url(#bg3)" rx="20"/>
          
          {/* Meditation figure */}
          <circle cx="200" cy="130" r="25" fill="#3b82f6"/>
          <ellipse cx="200" cy="180" rx="35" ry="30" fill="#1e40af"/>
          
          {/* Meditation pose arms */}
          <ellipse cx="170" cy="160" rx="8" ry="20" fill="#3b82f6" transform="rotate(-30 170 160)"/>
          <ellipse cx="230" cy="160" rx="8" ry="20" fill="#3b82f6" transform="rotate(30 230 160)"/>
          
          {/* Lotus position legs */}
          <ellipse cx="180" cy="200" rx="15" ry="8" fill="#1e40af" transform="rotate(-20 180 200)"/>
          <ellipse cx="220" cy="200" rx="15" ry="8" fill="#1e40af" transform="rotate(20 220 200)"/>
          
          {/* Peaceful energy waves */}
          <circle cx="200" cy="150" r="60" fill="none" stroke="#34d399" strokeWidth="2" opacity="0.4"/>
          <circle cx="200" cy="150" r="80" fill="none" stroke="#10b981" strokeWidth="2" opacity="0.3"/>
          <circle cx="200" cy="150" r="100" fill="none" stroke="#059669" strokeWidth="2" opacity="0.2"/>
          
          {/* Floating elements representing thoughts */}
          <circle cx="120" cy="80" r="8" fill="#a78bfa" opacity="0.6"/>
          <circle cx="280" cy="70" r="6" fill="#f472b6" opacity="0.6"/>
          <circle cx="150" cy="60" r="5" fill="#fbbf24" opacity="0.6"/>
          <circle cx="320" cy="100" r="7" fill="#34d399" opacity="0.6"/>
          
          {/* Zen garden elements */}
          <ellipse cx="100" cy="250" rx="40" ry="20" fill="#d6d3d1"/>
          <ellipse cx="300" cy="260" rx="35" ry="18" fill="#d6d3d1"/>
          
          {/* Small rocks */}
          <circle cx="90" cy="245" r="6" fill="#78716c"/>
          <circle cx="110" cy="250" r="4" fill="#78716c"/>
          <circle cx="295" cy="255" r="5" fill="#78716c"/>
          <circle cx="305" cy="260" r="7" fill="#78716c"/>
          
          {/* Breathing visualization */}
          <text x="200" y="40" textAnchor="middle" fill="#059669" fontSize="14" fontFamily="sans-serif">Breathe</text>
          <text x="200" y="280" textAnchor="middle" fill="#059669" fontSize="12" fontFamily="sans-serif">Relax</text>
        </svg>
      )
    },
    {
      id: 4,
      titleKey: 'carousel.support.title',
      descKey: 'carousel.support.desc',
      svg: (
        <svg viewBox="0 0 400 300" className="w-full h-full">
          {/* Support group illustration */}
          <defs>
            <linearGradient id="bg4" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fdf4ff" />
              <stop offset="100%" stopColor="#f3e8ff" />
            </linearGradient>
          </defs>
          <rect width="400" height="300" fill="url(#bg4)" rx="20"/>
          
          {/* Group circle */}
          <circle cx="200" cy="150" r="90" fill="none" stroke="#8b5cf6" strokeWidth="3" strokeDasharray="10,5" opacity="0.3"/>
          
          {/* Support group members */}
          {/* Person 1 */}
          <circle cx="200" cy="80" r="16" fill="#ef4444"/>
          <rect x="192" y="96" width="16" height="30" fill="#dc2626" rx="8"/>
          
          {/* Person 2 */}
          <circle cx="280" cy="120" r="16" fill="#3b82f6"/>
          <rect x="272" y="136" width="16" height="30" fill="#1e40af" rx="8"/>
          
          {/* Person 3 */}
          <circle cx="320" cy="180" r="16" fill="#10b981"/>
          <rect x="312" y="196" width="16" height="30" fill="#059669" rx="8"/>
          
          {/* Person 4 */}
          <circle cx="280" cy="240" r="16" fill="#f59e0b"/>
          <rect x="272" y="256" width="16" height="30" fill="#d97706" rx="8"/>
          
          {/* Person 5 */}
          <circle cx="200" cy="260" r="16" fill="#8b5cf6"/>
          <rect x="192" y="276" width="16" height="30" fill="#7c3aed" rx="8"/>
          
          {/* Person 6 */}
          <circle cx="120" cy="240" r="16" fill="#06b6d4"/>
          <rect x="112" y="256" width="16" height="30" fill="#0891b2" rx="8"/>
          
          {/* Person 7 */}
          <circle cx="80" cy="180" r="16" fill="#f472b6"/>
          <rect x="72" y="196" width="16" height="30" fill="#ec4899" rx="8"/>
          
          {/* Person 8 */}
          <circle cx="120" cy="120" r="16" fill="#84cc16"/>
          <rect x="112" y="136" width="16" height="30" fill="#65a30d" rx="8"/>
          
          {/* Support rays emanating from center */}
          <line x1="200" y1="150" x2="200" y2="96" stroke="#a78bfa" strokeWidth="2" opacity="0.5"/>
          <line x1="200" y1="150" x2="272" y2="136" stroke="#a78bfa" strokeWidth="2" opacity="0.5"/>
          <line x1="200" y1="150" x2="312" y2="196" stroke="#a78bfa" strokeWidth="2" opacity="0.5"/>
          <line x1="200" y1="150" x2="272" y2="256" stroke="#a78bfa" strokeWidth="2" opacity="0.5"/>
          <line x1="200" y1="150" x2="192" y2="276" stroke="#a78bfa" strokeWidth="2" opacity="0.5"/>
          <line x1="200" y1="150" x2="112" y2="256" stroke="#a78bfa" strokeWidth="2" opacity="0.5"/>
          <line x1="200" y1="150" x2="72" y2="196" stroke="#a78bfa" strokeWidth="2" opacity="0.5"/>
          <line x1="200" y1="150" x2="112" y2="136" stroke="#a78bfa" strokeWidth="2" opacity="0.5"/>
          
          {/* Center helping hands symbol */}
          <circle cx="200" cy="150" r="20" fill="#ffffff" stroke="#8b5cf6" strokeWidth="2"/>
          <text x="200" y="157" textAnchor="middle" fill="#8b5cf6" fontSize="24">🤝</text>
        </svg>
      )
    }
  ]

  // Auto-advance slides every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [slides.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <section className="section-padding bg-gradient-to-br from-primary-50 to-accent-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-secondary-900 mb-4">
            {t('carousel.title')}
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            {t('carousel.subtitle')}
          </p>
        </div>

        <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden">
          {/* Carousel content */}
          <div className="relative h-96 md:h-[500px]">
            <div 
              className="flex transition-transform duration-500 ease-in-out h-full"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide, index) => (
                <div key={slide.id} className="w-full flex-shrink-0 relative">
                  <div className="grid md:grid-cols-2 h-full">
                    {/* Image side */}
                    <div className="bg-gradient-to-br from-primary-100 to-accent-100 p-8 flex items-center justify-center">
                      <div className="w-full max-w-sm">
                        {slide.svg}
                      </div>
                    </div>
                    
                    {/* Content side */}
                    <div className="p-8 md:p-12 flex flex-col justify-center">
                      <h3 className="text-2xl md:text-3xl font-bold text-secondary-900 mb-4">
                        {t(slide.titleKey)}
                      </h3>
                      <p className="text-lg text-secondary-600 leading-relaxed mb-6">
                        {t(slide.descKey)}
                      </p>
                      <button 
                        className="btn-primary w-fit"
                        onClick={() => {
                          document.getElementById('contact')?.scrollIntoView({ 
                            behavior: 'smooth' 
                          });
                        }}
                      >
                        {t('carousel.cta')}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-secondary-700 p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-secondary-700 p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots indicator */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentSlide 
                    ? 'bg-primary-600 scale-125' 
                    : 'bg-white/50 hover:bg-white/80'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ImageCarousel
