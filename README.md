# ITB Financial Aid System

https://github.com/user-attachments/assets/f555650c-17cc-4ca9-be5f-d96401eab8cf

A modern, responsive scholarship and financial aid management system for **Institut Teknologi Bandung (ITB)**. Built with **Nuxt 3** and **Vue.js 3**, featuring **dynamic filtering**, **multi-language support**, and **comprehensive scholarship management**.

## 🌟 Features

- 🎓 Comprehensive scholarship listing and management
- 🔍 Advanced search and filtering system (by level, category, batch, GPA, period)
- 📅 Dynamic date range filtering with Indonesian formatting
- 📱 Mobile-optimized navigation and user interface

---

## 🛠️ Tech Stack

**Frontend:**

- [Nuxt 3](https://nuxt.com/) - Full-stack Vue framework
- [Vue.js 3](https://vuejs.org/) - Progressive JavaScript framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework

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

## 📄 Pages Overview

| Page              | Route              | Description                                     |
| ----------------- | ------------------ | ----------------------------------------------- |
| **Home**          | `/`                | Landing page with featured content              |
| **Home**          | `/home`            | Main homepage                                   |
| **Scholarships**  | `/daftar-beasiswa` | Comprehensive scholarship listing and filtering |
| **Login**         | `/login`           | User authentication                             |

---

## 🔧 Development

### Prerequisites

- **Node.js** v22.14.0 or newer
- **npm** package manager
- **Modern browser** for development
- **Git** for version control


Made with 💙 for **ITB Students** using Nuxt 3!
