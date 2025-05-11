# Hotel Quinto Nivel RD

A full-stack hotel booking platform that allows users to explore hotel details, sign up, create, and manage their reservations.
Hotel administrators can efficiently handle administrative tasks through a dedicated dashboard.
The platform is fully responsive, ensuring seamless accessibility across all devices.

## Technology Stack

This section outlines the technologies used in the development of the application:

- **Framework**
  - Next.js: A React-based framework used to build the front-end application, leveraging both client-side and server-side rendering for optimal performance.
- **Services**
  - Convex: A Backend-as-a-Service (BaaS) platform used to manage the database, file storage, and other back-end functionalities.
  - Clerk: A service that simplifies authentication and authorization processes for users.
- **Libraries**
  - ShadCN: A library for integrating reusable components and implementing theming functionalities.
  - Zustand: A lightweight state management library for managing application state.
  - Zod: A schema validation library used to ensure data integrity.
  - i18n: A library that enables internationalization, allowing the application to support multiple languages.
- **Utils**
  - Custom Fonts Poppins
  - Excalidraw: Used for quick prototyping

## Files tree directory structure

- app
- components
  - layout
    - ClientWrapper
    - Container
    - Footer
    - Main
    - Navigation
      - Desktop
      - Mobile
  - site
    - home
  - features
    - Cartbookings
    - ContactWidget
    - ExternalLink
    - LocaleDialog
    - LocaleSwitcher
    - Logo
    - Menu
    - ModeToggle
    - Swiper
  - ui
- constants
- lib
- node_modules
- providers
- public
  - images
    - brand
    - flags
- styles
- translations
- utils
  - diagrams
  - fonts

## Public Facing Pages

1. **Home Page**: The main landing page showcasing the hotel's features and services.
2. **Rooms Page**: A page displaying available rooms with details such as pricing and amenities.
3. **Room Page**: A detailed view of a specific room, including images, descriptions, and booking options.
4. **Sign Up Page**: A page where users can create an account to access the platform's features.
5. **Sign In Page**: A page for existing users to log in to their accounts.

## Feature Implementations

- [x] ShadCN
- [x] i18n - Internationalization
- [x] Responsive Navigation

## Home page components

- [] Header
  - [] Compiwritting
  - [] Slideshow
