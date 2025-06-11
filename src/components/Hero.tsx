'use client'

import { useLanguage } from '../contexts/LanguageContext'

const Hero = () => {
  const { t } = useLanguage()
  
  return (
    <section className="pt-20 pb-16 bg-gradient-to-br from-primary-50 via-white to-accent-50">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-secondary-900 leading-tight">
                {t('hero.title')}
              </h1>
              <p className="text-xl text-secondary-600 leading-relaxed">
                {t('hero.subtitle')}
              </p>
            </div>            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                className="btn-primary text-lg px-8 py-4"
                onClick={() => {
                  document.getElementById('contact')?.scrollIntoView({ 
                    behavior: 'smooth' 
                  });
                }}
              >
                {t('hero.cta')}
              </button>
              <button 
                className="btn-secondary text-lg px-8 py-4"
                onClick={() => {
                  document.getElementById('about')?.scrollIntoView({ 
                    behavior: 'smooth' 
                  });
                }}
              >
                {t('hero.learn')}
              </button>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center space-x-8 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600">1000+</div>
                <div className="text-sm text-secondary-500">Patients Helped</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600">{t('about.experience')}</div>
                <div className="text-sm text-secondary-500">Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600">98%</div>
                <div className="text-sm text-secondary-500">Satisfaction Rate</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-primary-100 to-accent-100 rounded-3xl p-8 shadow-2xl">
              <div className="w-full h-full bg-white rounded-2xl flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-24 h-24 bg-primary-600 rounded-full mx-auto flex items-center justify-center mb-6">
                    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold text-secondary-800">
                    Compassionate Care
                  </h3>
                  <p className="text-secondary-600">
                    Supporting your journey to mental wellness with empathy and expertise
                  </p>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -left-4 w-20 h-20 bg-accent-200 rounded-full opacity-60"></div>
            <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-primary-200 rounded-full opacity-60"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
