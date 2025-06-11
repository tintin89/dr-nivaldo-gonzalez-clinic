'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translation object
const translations = {
  en: {
    // Header
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.about': 'About',
    'nav.testimonials': 'Testimonials',
    'nav.contact': 'Contact',
    'nav.appointment': 'Book Appointment',
    
    // Hero
    'hero.title': 'Professional Mental Health Care with Dr. Nivaldo Gonzalez',
    'hero.subtitle': 'Over 30 years of experience providing compassionate, evidence-based mental health treatment. Your journey to wellness starts here.',
    'hero.cta': 'Schedule Consultation',
    'hero.learn': 'Learn More',
      // Services
    'services.title': 'Our Services',
    'services.subtitle': 'Dr. Nivaldo Gonzalez offers comprehensive mental health services tailored to your unique needs',
    'services.individual.title': 'Individual Therapy',
    'services.individual.desc': 'Personalized one-on-one sessions to address your specific mental health concerns and goals.',
    'services.couples.title': 'Couples Therapy',
    'services.couples.desc': 'Strengthen relationships and improve communication with professional couples counseling.',
    'services.family.title': 'Family Therapy',
    'services.family.desc': 'Heal family dynamics and create healthier relationships within your family system.',
    'services.group.title': 'Group Therapy',
    'services.group.desc': 'Connect with others facing similar challenges in a supportive group environment.',
    'services.psychiatric.title': 'Psychiatric Services',
    'services.psychiatric.desc': 'Professional psychiatric evaluation and medication management.',
    'services.crisis.title': 'Crisis Intervention',
    'services.crisis.desc': '24/7 emergency mental health support and crisis intervention services.',
    'services.anxiety.title': 'Anxiety Treatment',
    'services.anxiety.desc': 'Evidence-based approaches to manage and overcome anxiety disorders.',
    'services.depression.title': 'Depression Support',
    'services.depression.desc': 'Comprehensive treatment plans to help you overcome depression and reclaim your life.',
    
    // About
    'about.title': 'Meet Dr. Nivaldo Gonzalez',
    'about.subtitle': 'Your Trusted Mental Health Professional',
    'about.experience': '30+ Years of Experience',
    'about.description': 'Dr. Nivaldo Gonzalez brings over three decades of dedicated experience in mental health care. With a compassionate approach and evidence-based treatment methods, Dr. Gonzalez has helped thousands of patients achieve better mental wellness and improved quality of life.',
    'about.specializations': 'Specializations',
    'about.spec1': 'Clinical Psychology',
    'about.spec2': 'Trauma Therapy',
    'about.spec3': 'Anxiety & Depression',
    'about.spec4': 'Family Systems',
    'about.mission': 'Our Mission',
    'about.mission.desc': 'To provide accessible, high-quality mental health care in a safe and supportive environment where every individual feels heard, understood, and empowered on their journey to wellness.',
      // Testimonials
    'testimonials.title': 'What Our Patients Say',
    'testimonials.subtitle': 'Real stories from people who found healing with Dr. Gonzalez',
    'testimonials.1.text': 'Dr. Gonzalez changed my life. His compassionate approach and deep understanding helped me overcome years of anxiety. I finally feel like myself again.',
    'testimonials.1.name': 'Maria Rodriguez',
    'testimonials.1.role': 'Individual Therapy Client',
    'testimonials.2.text': 'After 30 years of practice, Dr. Gonzalez brings wisdom and empathy that you can truly feel. He helped our family heal and grow stronger together.',
    'testimonials.2.name': 'Carlos Martinez',
    'testimonials.2.role': 'Family Therapy Client',
    'testimonials.3.text': 'I was skeptical about therapy, but Dr. Gonzalez made me feel comfortable from day one. His experience shows in every session.',
    'testimonials.3.name': 'Ana Silva',
    'testimonials.3.role': 'Individual Therapy Client',    'testimonials.cta.title': 'Ready to Start Your Journey?',
    'testimonials.cta.subtitle': 'Join hundreds of others who have found hope, healing, and happiness through our compassionate care.',
    'testimonials.cta.primary': 'Book Your First Session',
    'testimonials.cta.secondary': 'Free Consultation Call',
    'testimonials.roles.individual': 'Individual Therapy Client',
    'testimonials.roles.family': 'Family Therapy Client',
      // Contact
    'contact.title': 'Get In Touch',
    'contact.subtitle': 'Ready to start your journey to better mental health with Dr. Gonzalez?',
    'contact.form.title': 'Schedule a Consultation',
    'contact.form.name': 'Full Name',
    'contact.form.namePlaceholder': 'Enter your full name',
    'contact.form.email': 'Email Address',
    'contact.form.emailPlaceholder': 'your.email@example.com',
    'contact.form.phone': 'Phone Number',
    'contact.form.message': 'Message',
    'contact.form.messagePlaceholder': 'Tell us how we can help you...',
    'contact.form.serviceLabel': 'Service Interested In',
    'contact.form.selectService': 'Select a service',
    'contact.form.submit': 'Send Message',
    'contact.form.successMessage': 'Thank you for your message. We will contact you soon!',
    'contact.info.title': 'Contact Information',
    'contact.info.phone': 'Phone',
    'contact.info.email': 'Email',
    'contact.info.address': 'Address',
    'contact.info.hours': 'Office Hours',
    'contact.hours.available': 'Available during business hours',
    'contact.hours.weekdays': 'Monday - Friday',
    'contact.hours.saturday': 'Saturday',
    'contact.hours.sunday': 'Sunday',
    'contact.hours.emergencyOnly': 'Emergency Only',
    'contact.crisis.title': 'Crisis Line',
    'contact.crisis.availability': '24/7 Emergency Support',
    'contact.note.title': 'Note',
    'contact.note.description': 'We offer flexible scheduling including evening and weekend appointments for urgent needs.',
    
    // Footer
    'footer.tagline': 'Professional mental health care with over 30 years of experience',
    'footer.services': 'Services',
    'footer.company': 'Company',
    'footer.support': 'Support',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    'footer.help': 'Help Center',
    'footer.rights': 'All rights reserved.',
  },
  
  es: {
    // Header
    'nav.home': 'Inicio',
    'nav.services': 'Servicios',
    'nav.about': 'Acerca de',
    'nav.testimonials': 'Testimonios',
    'nav.contact': 'Contacto',
    'nav.appointment': 'Reservar Cita',
    
    // Hero
    'hero.title': 'Atención Profesional de Salud Mental con el Dr. Nivaldo González',
    'hero.subtitle': 'Más de 30 años de experiencia brindando tratamiento de salud mental compasivo y basado en evidencia. Tu camino hacia el bienestar comienza aquí.',
    'hero.cta': 'Programar Consulta',
    'hero.learn': 'Saber Más',
      // Services
    'services.title': 'Nuestros Servicios',
    'services.subtitle': 'El Dr. Nivaldo González ofrece servicios integrales de salud mental adaptados a sus necesidades únicas',
    'services.individual.title': 'Terapia Individual',
    'services.individual.desc': 'Sesiones personalizadas uno a uno para abordar sus preocupaciones y objetivos específicos de salud mental.',
    'services.couples.title': 'Terapia de Pareja',
    'services.couples.desc': 'Fortalezca las relaciones y mejore la comunicación con consejería profesional de parejas.',
    'services.family.title': 'Terapia Familiar',
    'services.family.desc': 'Sane las dinámicas familiares y cree relaciones más saludables dentro de su sistema familiar.',
    'services.group.title': 'Terapia Grupal',
    'services.group.desc': 'Conéctese con otros que enfrentan desafíos similares en un ambiente grupal de apoyo.',
    'services.psychiatric.title': 'Servicios Psiquiátricos',
    'services.psychiatric.desc': 'Evaluación psiquiátrica profesional y manejo de medicamentos.',
    'services.crisis.title': 'Intervención de Crisis',
    'services.crisis.desc': 'Soporte de salud mental de emergencia 24/7 y servicios de intervención de crisis.',
    'services.anxiety.title': 'Tratamiento de Ansiedad',
    'services.anxiety.desc': 'Enfoques basados en evidencia para manejar y superar los trastornos de ansiedad.',
    'services.depression.title': 'Apoyo para Depresión',
    'services.depression.desc': 'Planes de tratamiento integrales para ayudarle a superar la depresión y recuperar su vida.',
    
    // About
    'about.title': 'Conozca al Dr. Nivaldo González',
    'about.subtitle': 'Su Profesional de Salud Mental de Confianza',
    'about.experience': '30+ Años de Experiencia',
    'about.description': 'El Dr. Nivaldo González aporta más de tres décadas de experiencia dedicada en el cuidado de la salud mental. Con un enfoque compasivo y métodos de tratamiento basados en evidencia, el Dr. González ha ayudado a miles de pacientes a lograr un mejor bienestar mental y una mayor calidad de vida.',
    'about.specializations': 'Especializaciones',
    'about.spec1': 'Psicología Clínica',
    'about.spec2': 'Terapia de Trauma',
    'about.spec3': 'Ansiedad y Depresión',
    'about.spec4': 'Sistemas Familiares',
    'about.mission': 'Nuestra Misión',
    'about.mission.desc': 'Brindar atención de salud mental accesible y de alta calidad en un ambiente seguro y de apoyo donde cada individuo se sienta escuchado, comprendido y empoderado en su camino hacia el bienestar.',
      // Testimonials
    'testimonials.title': 'Lo Que Dicen Nuestros Pacientes',
    'testimonials.subtitle': 'Historias reales de personas que encontraron sanación con el Dr. González',
    'testimonials.1.text': 'El Dr. González cambió mi vida. Su enfoque compasivo y profunda comprensión me ayudaron a superar años de ansiedad. Finalmente me siento como yo misma otra vez.',
    'testimonials.1.name': 'María Rodríguez',
    'testimonials.1.role': 'Cliente de Terapia Individual',
    'testimonials.2.text': 'Después de 30 años de práctica, el Dr. González aporta sabiduría y empatía que realmente se puede sentir. Ayudó a nuestra familia a sanar y fortalecerse juntos.',
    'testimonials.2.name': 'Carlos Martínez',
    'testimonials.2.role': 'Cliente de Terapia Familiar',
    'testimonials.3.text': 'Era escéptica sobre la terapia, pero el Dr. González me hizo sentir cómoda desde el primer día. Su experiencia se nota en cada sesión.',
    'testimonials.3.name': 'Ana Silva',
    'testimonials.3.role': 'Cliente de Terapia Individual',    'testimonials.cta.title': '¿Listo para Comenzar su Camino?',
    'testimonials.cta.subtitle': 'Únase a cientos de otros que han encontrado esperanza, sanación y felicidad a través de nuestro cuidado compasivo.',
    'testimonials.cta.primary': 'Reserve su Primera Sesión',
    'testimonials.cta.secondary': 'Llamada de Consulta Gratuita',
    'testimonials.roles.individual': 'Cliente de Terapia Individual',
    'testimonials.roles.family': 'Cliente de Terapia Familiar',
      // Contact
    'contact.title': 'Póngase en Contacto',
    'contact.subtitle': '¿Listo para comenzar su camino hacia una mejor salud mental con el Dr. González?',
    'contact.form.title': 'Programar una Consulta',
    'contact.form.name': 'Nombre Completo',
    'contact.form.namePlaceholder': 'Ingrese su nombre completo',
    'contact.form.email': 'Correo Electrónico',
    'contact.form.emailPlaceholder': 'su.correo@ejemplo.com',
    'contact.form.phone': 'Número de Teléfono',
    'contact.form.message': 'Mensaje',
    'contact.form.messagePlaceholder': 'Cuéntenos cómo podemos ayudarle...',
    'contact.form.serviceLabel': 'Servicio de Interés',
    'contact.form.selectService': 'Seleccione un servicio',
    'contact.form.submit': 'Enviar Mensaje',
    'contact.form.successMessage': 'Gracias por su mensaje. Nos pondremos en contacto con usted pronto!',
    'contact.info.title': 'Información de Contacto',
    'contact.info.phone': 'Teléfono',
    'contact.info.email': 'Correo',
    'contact.info.address': 'Dirección',
    'contact.info.hours': 'Horario de Oficina',
    'contact.hours.available': 'Disponible durante horario comercial',
    'contact.hours.weekdays': 'Lunes - Viernes',
    'contact.hours.saturday': 'Sábado',
    'contact.hours.sunday': 'Domingo',
    'contact.hours.emergencyOnly': 'Solo Emergencias',
    'contact.crisis.title': 'Línea de Crisis',
    'contact.crisis.availability': 'Soporte de Emergencia 24/7',
    'contact.note.title': 'Nota',
    'contact.note.description': 'Ofrecemos horarios flexibles incluyendo citas de noche y fin de semana para necesidades urgentes.',
    
    // Footer
    'footer.tagline': 'Atención profesional de salud mental con más de 30 años de experiencia',
    'footer.services': 'Servicios',
    'footer.company': 'Empresa',
    'footer.support': 'Soporte',
    'footer.privacy': 'Política de Privacidad',
    'footer.terms': 'Términos de Servicio',
    'footer.help': 'Centro de Ayuda',
    'footer.rights': 'Todos los derechos reservados.',
  }
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');
  
  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };
  
  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
