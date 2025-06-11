'use client'

import { useLanguage } from '../contexts/LanguageContext'

const About = () => {
  const { t } = useLanguage()

  return (
    <section id="about" className="section-padding bg-secondary-50">
      <div className="max-w-7xl mx-auto">
        {/* Dr. Nivaldo Gonzalez Feature Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* About Dr. Gonzalez */}
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-3xl sm:text-4xl font-bold text-secondary-900">
                {t('about.title')}
              </h2>
              <p className="text-xl text-primary-600 font-semibold">
                {t('about.subtitle')}
              </p>
            </div>
            
            <div className="bg-primary-100 p-6 rounded-lg">
              <div className="text-2xl font-bold text-primary-800 mb-2">
                {t('about.experience')}
              </div>
              <p className="text-primary-700">
                Dedicated to Mental Health Excellence
              </p>
            </div>
            
            <p className="text-lg text-secondary-600 leading-relaxed">
              {t('about.description')}
            </p>
            
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-secondary-900">
                {t('about.specializations')}
              </h3>
              <div className="grid grid-cols-1 gap-3">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-secondary-700">{t('about.spec1')}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-secondary-700">{t('about.spec2')}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-secondary-700">{t('about.spec3')}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-secondary-700">{t('about.spec4')}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Dr. Gonzalez Photo and Stats */}
          <div className="space-y-6">
            <div className="card bg-white text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-primary-600 to-primary-700 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-4xl font-bold text-white">NG</span>
              </div>
              <h3 className="text-2xl font-bold text-secondary-900 mb-2">
                Dr. Nivaldo González
              </h3>
              <p className="text-primary-600 font-medium mb-4">
                Licensed Clinical Psychologist
              </p>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-primary-600">30+</div>
                  <div className="text-sm text-secondary-500">Years Experience</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary-600">1000+</div>
                  <div className="text-sm text-secondary-500">Patients Helped</div>
                </div>
              </div>
            </div>
            
            {/* Mission Statement */}
            <div className="card bg-white">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-secondary-900 mb-4">
                  {t('about.mission')}
                </h3>
                <p className="text-secondary-600 leading-relaxed italic">
                  {t('about.mission.desc')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
