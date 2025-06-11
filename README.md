# Dr. Nivaldo González - Mental Health Clinic Website

A professional, bilingual (English/Spanish) mental health clinic website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🌐 **Bilingual Support**: Complete English and Spanish translations
- 👨‍⚕️ **Professional Branding**: Features Dr. Nivaldo González with 30+ years experience
- 📱 **Responsive Design**: Works on all devices
- 🎨 **Modern UI**: Clean, accessible design with Tailwind CSS
- 🔄 **Real-time Language Toggle**: Seamless switching between languages
- 🧩 **Scalable**: Structured for future features like admin panels and user registration

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Development**: ESLint for code quality

## Project Structure

```
src/
├── app/                 # Next.js App Router pages
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Home page
├── components/         # Reusable UI components
│   ├── Header.tsx      # Navigation header
│   ├── Hero.tsx        # Hero section
│   ├── Services.tsx    # Services showcase
│   ├── About.tsx       # About section
│   ├── Testimonials.tsx # Client testimonials
│   ├── Contact.tsx     # Contact form
│   └── Footer.tsx      # Site footer
├── lib/               # Utility functions
└── types/             # TypeScript type definitions
```

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run the development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser** and navigate to [http://localhost:3000](http://localhost:3000)

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Design System

### Colors
- **Primary**: Blue tones for trust and professionalism
- **Secondary**: Gray tones for balance and readability
- **Accent**: Pink tones for warmth and compassion

### Typography
- **Font**: Inter - Modern, readable typeface
- **Hierarchy**: Clear heading structure for accessibility

### Components
- **Cards**: Consistent card-based layouts
- **Buttons**: Primary and secondary button styles
- **Forms**: Accessible form components

## Future Enhancements

This project is structured to easily accommodate:

- 🔐 **User Authentication**: Patient login and registration
- 👨‍💼 **Admin Panel**: Staff management and appointment scheduling
- 📅 **Booking System**: Online appointment booking
- 💬 **Patient Portal**: Secure patient communication
- 📊 **Analytics**: Website and patient analytics
- 🔒 **HIPAA Compliance**: Healthcare data security measures

## Development Guidelines

- Follow TypeScript best practices
- Use semantic HTML for accessibility
- Implement responsive design patterns
- Maintain consistent component structure
- Write clear, self-documenting code

## Accessibility Features

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Color contrast compliance
- Screen reader optimization

## Healthcare Considerations

- Professional, empathetic design language
- Privacy-focused user experience
- Clear call-to-action buttons
- Crisis intervention information prominently displayed
- Testimonials to build trust and reduce stigma

## Contributing

1. Follow the existing code style
2. Write TypeScript with proper typing
3. Test responsiveness on multiple devices
4. Ensure accessibility compliance
5. Update documentation as needed

## License

This project is designed for Serenity Mental Health Clinic and follows healthcare industry best practices.
