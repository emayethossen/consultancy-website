# Care2 Training

### Live Link: https://consultancy-page-psi.vercel.app/

Empowering individuals and teams with tailored training programs to enhance skills, boost confidence, and achieve success.

---

## Table of Contents

1. [Introduction](#introduction)
2. [Features](#features)
3. [Technologies Used](#technologies-used)
4. [Installation](#installation)
5. [Project Structure](#project-structure)
6. [Usage](#usage)
7. [SEO Optimization](#seo-optimization)
8. [Contributing](#contributing)

---

## Introduction

Care2 Training is a web application designed to provide tailored training programs for personal and professional growth. The platform is built using modern web development technologies, ensuring a responsive, accessible, and engaging user experience.

---

## Features

- Responsive design for all devices
- SEO-optimized meta tags and page structure
- Dynamic components for testimonials, promotional banners, and feature highlights
- Structured and reusable codebase using TypeScript
- Integration with modern libraries like `react-hook-form` and `lucide-react`

---

## Technologies Used

- **Frontend**: Next.js, React, Tailwind CSS
- **TypeScript**: For static type-checking
- **Icons**: `lucide-react`
- **Form Validation**: `react-hook-form` and `@hookform/resolvers`
- **SEO Optimization**: Metadata and structured content

---

## Installation

Follow these steps to set up the project locally:

1. **Clone the Repository**:
   ```bash
   git clone <repository-url>
   cd care2-training
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Run the Development Server**:
   ```bash
   npm run dev
   ```

4. **View in Browser**:
   Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Project Structure

Here's a breakdown of the important files and directories:

### `src/pages/`

- **`_app.tsx`**: Entry point for the app; includes global styles and configurations.
- **`index.tsx`**: Homepage of the app with main content and components.

### `src/components/`

- **`FeatureCard.tsx`**: Displays feature highlights with icons and descriptions.
- **`TestimonialCard.tsx`**: Renders client testimonials dynamically.
- **`PromoBanner.tsx`**: Promotional section with an image and call-to-action button.

### `src/assets/`

- Stores images and other static assets used throughout the project.

### `src/styles/`

- Contains Tailwind CSS configurations and custom styles.

### `public/`

- Contains static files, including the favicon and placeholder images.

---

## Usage

1. Navigate through the pages to explore the features:
   - **Homepage**: View banners, testimonials, and key features.
   - **Promotions**: Explore training offers and discounts.

2. **Edit Components**: All reusable components are located in the `src/components` directory.

3. **Customizing Content**:
   - Update metadata in `src/app/layout.tsx` for SEO.
   - Modify text or images in `PromoBanner`, `FeatureCard`, or other components.

---

## SEO Optimization

To improve SEO, this project includes:
- Meta tags (e.g., title, description) in `metadata`.
- Alt text for all images in components (e.g., `PromoBanner` and `TestimonialCard`).
- Proper heading structure:
  - **H1**: Main page title.
  - **H2**: Section titles.

---

## Contributing

Contributions are welcome! Follow these steps:
1. Fork the repository.
2. Create a feature branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit changes and push:
   ```bash
   git commit -m "Add feature"
   git push origin feature-name
   ```
4. Submit a pull request.
