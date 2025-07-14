# ITB Financial Aid System

A modern, responsive scholarship and financial aid management system for **Institut Teknologi Bandung (ITB)**. Built with **Nuxt 3** and **Vue.js 3**, featuring **dynamic filtering**, **multi-language support**, and **comprehensive scholarship management**.

## 🌟 Features

- ✅ Modern responsive design with mobile-first approach
- 🎓 Comprehensive scholarship listing and management
- 🔍 Advanced search and filtering system (by level, category, batch, GPA, period)
- 📅 Dynamic date range filtering with Indonesian formatting
- 📱 Mobile-optimized navigation and user interface
- 🔐 Authentication system with session management
- 🌐 Multi-language support (Indonesian/English)
- 📊 Scholarship analytics and statistics
- 🎯 SEO-optimized with dynamic meta tags
- ⚡ Fast performance with Nuxt 3's server-side rendering
- 📖 Dynamic page builder with CMS integration
- 🎨 Clean UI with consistent typography (Instrument Sans font)
- 📋 User profile management and dashboard

---

## 🛠️ Tech Stack

**Frontend:**

- [Nuxt 3](https://nuxt.com/) - Full-stack Vue framework
- [Vue.js 3](https://vuejs.org/) - Progressive JavaScript framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [SCSS](https://sass-lang.com/) - CSS preprocessor for advanced styling
- [Nuxt Image](https://image.nuxt.com/) - Optimized image handling
- [Nuxt I18n](https://i18n.nuxtjs.org/) - Internationalization module

**Backend & APIs:**

- **Server API** with Nuxt server routes
- **Session Management** with secure authentication
- **Dynamic Content** management system
- **Form Handling** with validation and reCAPTCHA
- **API Proxy** for external service integration

**Additional Features:**

- **Auto-imports** for composables and components
- **Dynamic routing** with nested layouts
- **State management** with Pinia
- **SEO optimization** with useMeta composable
- **Image optimization** with Nuxt Image
- **Font optimization** with custom typography
- **3D AR integration** for interactive experiences

---

## 📦 Installation

### 1. Clone the Repository

```bash
git clone <repository-url>
cd itb-financial-aid
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Setup

Create a `.env` file in the root directory:

```env
API_URL=your_api_url_here
API_LAIN=your_additional_api_url
NUXT_SECRET=your_secret_key
NUXT_PUBLIC_SITE_URL=http://localhost:3000
RECAPTCHA_SITE_KEY=your_recaptcha_site_key
```

### 4. Start Development Server

```bash
npm run dev
```

### 5. Access the Application

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🧪 Project Structure

```
itb-financial-aid/
├── nuxt.config.ts              # Nuxt configuration
├── app.config.ts               # App configuration
├── pages/
│   ├── index.vue               # Home page
│   ├── home.vue                # Main landing page
│   ├── daftar-beasiswa.vue     # Scholarship listings
│   ├── login.vue               # Authentication
│   ├── search.vue              # Search functionality
│   ├── contacts.vue            # Contact information
│   ├── scan-ar.vue             # AR features
│   ├── user/
│   │   └── profile.vue         # User profile management
│   └── [...slugs].vue          # Dynamic pages with 404 handling
├── components/
│   ├── Header/                 # Navigation components
│   ├── Hero/                   # Hero section components
│   ├── Footer/                 # Footer components
│   ├── Cards/                  # Scholarship and content cards
│   ├── Filters/                # Advanced filtering components
│   ├── Tables/                 # Data presentation components
│   ├── Utils/                  # Utility components (Modal, Pagination)
│   └── Blocks/                 # Content block components
├── composables/
│   ├── useMeta.js              # SEO meta management
│   ├── useGoogleRecaptcha.js   # Form security
│   └── helpers/
│       └── useStrongPassword.js # Password validation
├── server/
│   └── api/                    # Server API routes
│       ├── auth/               # Authentication endpoints
│       ├── app/                # Application API
│       └── lain/               # Additional services
├── middleware/
│   ├── redirection.global.ts   # Global redirections
│   └── redirectRules.ts        # Redirect rule definitions
├── layouts/
│   ├── default.vue             # Default layout
│   ├── custom.vue              # Custom layouts
│   ├── post.vue                # Post/article layout
│   └── blanklayout.vue         # Minimal layout
├── data/                       # Static data files
│   ├── scholarships.js         # Scholarship data
│   ├── scholarshipFilters.js   # Filter configurations
│   ├── constants.js            # Application constants
│   ├── menu-en.js              # English navigation
│   ├── menu-id.js              # Indonesian navigation
│   └── testimonials.js         # User testimonials
├── store/
│   ├── global.js               # Global state management
│   └── vselectStore.js         # Select component state
├── lang/                       # Internationalization
│   ├── en-US.js               # English translations
│   ├── id-ID.js               # Indonesian translations
│   └── localeConfig.js         # Locale configuration
└── assets/
    ├── css/                    # Global styles
    ├── scss/                   # SCSS modules and mixins
    ├── img/                    # Image assets
    └── icons/                  # SVG icon library
```

---

## 🚀 Build & Deploy

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Deploy

The application is ready for deployment on various platforms:

- **Vercel** (recommended for Nuxt 3)
- **Netlify**
- **Cloudflare Pages**
- **Traditional hosting** with Node.js support

---

## 📄 Pages Overview

| Page              | Route              | Description                                     |
| ----------------- | ------------------ | ----------------------------------------------- |
| **Home**          | `/`                | Landing page with featured content              |
| **Home**          | `/home`            | Main homepage                                   |
| **Scholarships**  | `/daftar-beasiswa` | Comprehensive scholarship listing and filtering |
| **Login**         | `/login`           | User authentication                             |
| **Search**        | `/search`          | Global search functionality                     |
| **Contacts**      | `/contacts`        | Contact information and forms                   |
| **AR Scanner**    | `/scan-ar`         | Augmented reality features                      |
| **User Profile**  | `/user/profile`    | User account management                         |
| **Dynamic Pages** | `/[...slugs]`      | CMS-driven content with 404 handling            |

---

## 🎨 Key Features

### Advanced Scholarship Filtering

- **Multi-criteria filtering**: Level (S1, S2, S3), internal/external, batch year, GPA range
- **Date range filtering**: Registration period with Indonesian date formatting
- **Search functionality**: Real-time title-based search
- **Smart sorting**: By deadline, title, or available quota
- **Filter management**: Individual filter removal and clear all functionality

### Responsive Design

- **Mobile-first approach**: Optimized for all device sizes
- **Touch-friendly interface**: Mobile-optimized interactions
- **Progressive enhancement**: Works on all modern browsers
- **Performance optimized**: Fast loading and smooth animations

### Internationalization

- **Multi-language support**: Indonesian and English
- **Localized content**: Date formatting, currency, and cultural adaptations
- **RTL ready**: Infrastructure for right-to-left languages
- **Dynamic locale switching**: Real-time language changes

### Content Management

- **Dynamic page builder**: Flexible content creation system
- **SEO optimization**: Meta tags, structured data, sitemap
- **Image optimization**: Automatic resizing and format conversion
- **Component library**: Reusable UI components for consistent design

---

## 🔧 Development

### Prerequisites

- **Node.js** v22.14.0 or newer
- **npm** package manager
- **Modern browser** for development
- **Git** for version control

### Development Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linting
npm run lint

# Type checking
npm run typecheck
```

### Development Guidelines

- Follow **Vue 3 Composition API** patterns
- Use **Tailwind CSS** for styling
- Implement **responsive design** principles
- Write **semantic HTML** and **accessible** components
- Follow **Nuxt 3 best practices** for performance
- Maintain **consistent code formatting** with ESLint

---

## 🎓 Scholarship Management

### Filter System

- **Educational Level**: Filter by S1 (Bachelor), S2 (Master), S3 (Doctoral)
- **Category**: Internal ITB scholarships vs external opportunities
- **Academic Year**: Filter by student batch/cohort year
- **GPA Requirements**: Range-based filtering (e.g., 3.0-3.5, 3.5-4.0)
- **Registration Period**: Date overlap filtering for active applications

### Data Structure

- **Comprehensive scholarship data**: Title, description, benefits, requirements
- **Flexible benefit system**: Support for multiple benefits with overflow display
- **Smart date handling**: Indonesian formatting with proper sorting
- **Quota management**: Real-time availability tracking

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Code Style

- Use **Vue 3 Composition API**
- Follow **Nuxt 3 conventions**
- Implement **TypeScript** for type safety
- Write **responsive CSS** with Tailwind
- Add **JSDoc comments** for complex functions

---

## 📞 Support

For support and questions about the ITB Financial Aid System:

- **Institution**: Institut Teknologi Bandung (ITB)
- **Department**: Financial Aid Office
- **Website**: [itb.ac.id](https://itb.ac.id)

---

## 📄 License

This project is developed for Institut Teknologi Bandung (ITB) internal use.

---

Made with 💙 for **ITB Students** using Nuxt 3!
