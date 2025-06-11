'use client'

import { useLanguage } from '../contexts/LanguageContext'

const Testimonials = () => {
  const { t } = useLanguage()
    const testimonials = [
    {
      name: t('testimonials.1.name'),
      role: t('testimonials.roles.individual'),
      content: t('testimonials.1.text'),
      rating: 5
    },
    {
      name: t('testimonials.2.name'),
      role: t('testimonials.roles.family'),
      content: t('testimonials.2.text'),
      rating: 5
    },
    {
      name: t('testimonials.3.name'),
      role: t('testimonials.roles.individual'),
      content: t('testimonials.3.text'),
      rating: 5
    }
  ]

  return (
    <section id="testimonials" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-secondary-900 mb-4">
            {t('testimonials.title')}
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            {t('testimonials.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card">
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
                <blockquote className="text-secondary-700 mb-6 leading-relaxed italic">
                &ldquo;{testimonial.content}&rdquo;
              </blockquote>
              
              <div className="border-t border-gray-100 pt-4">
                <div className="font-semibold text-secondary-900">
                  {testimonial.name}
                </div>
                <div className="text-sm text-secondary-500">
                  {testimonial.role}
                </div>
              </div>
            </div>
          ))}
        </div>        {/* Call-to-action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-secondary-900 mb-4">
              {t('testimonials.cta.title')}
            </h3>
            <p className="text-lg text-secondary-600 mb-6 max-w-2xl mx-auto">
              {t('testimonials.cta.subtitle')}
            </p>            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                className="btn-primary text-lg px-8 py-4"
                onClick={() => {
                  document.getElementById('contact')?.scrollIntoView({ 
                    behavior: 'smooth' 
                  });
                }}
              >
                {t('testimonials.cta.primary')}
              </button>
              <button 
                className="btn-secondary text-lg px-8 py-4"
                onClick={() => {
                  document.getElementById('contact')?.scrollIntoView({ 
                    behavior: 'smooth' 
                  });
                }}
              >
                {t('testimonials.cta.secondary')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
