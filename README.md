# BUNDL.SHOP

> **Redefine Resale. Build Community. Curate Culture.**

A modern, premium resale e-commerce platform featuring curated drops, dark mode aesthetics, and glassmorphic design.

![BUNDL.SHOP](https://img.shields.io/badge/Status-Live-success?style=for-the-badge)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

## ✨ Features

- **🎨 Premium Dark Design** - Sleek dark mode with glassmorphism and smooth animations
- **🛍️ Product Grid** - Dynamic product catalog with filtering system
- **🛒 Shopping Cart** - Slide-out cart drawer with real-time updates
- **📱 Fully Responsive** - Optimized for all devices and screen sizes
- **⚡ Fast & Lightweight** - Pure vanilla JavaScript, no frameworks
- **🎯 SEO Optimized** - Proper meta tags and semantic HTML

## 📂 Project Structure

```
BUNDL.SHOP/
├── index.html          # Main shop page with product grid
├── socials.html        # Social media links and contact info
├── links.html          # Curated collection of interesting links
├── about.html          # Brand manifesto and story
├── archive.html        # Previous drops and collections
├── styles.css          # Global styles and design system
├── app.js              # Product data and cart functionality
└── README.md           # Project documentation
```

## 🎯 Pages Overview

### 🏠 Shop (index.html)
The main landing page featuring:
- Hero section with animated background
- Product grid with 6 items
- Category filters (Outerwear, Tops, Bottoms, Footwear, Accessories)
- Shopping cart drawer
- Quick view modal

### 🔗 Socials (socials.html)
Connect with BUNDL across all platforms:
- Instagram: [@bundl.corp](https://instagram.com/bundl.corp)
- TikTok: [@bundl.shop](https://tiktok.com/@bundl.shop)
- Discord: [discord.gg/bundl.corp](https://discord.gg/bundl.corp)
- YouTube: [@supreme.bundlez](https://youtube.com/@supreme.bundlez)
- Email contacts for business, press, and support

### 📚 Links (links.html)
Curated resources organized by category:
- **Fashion** - Grailed, SSENSE, Highsnobiety
- **Culture** - Complex, Hypebeast, Dazed Digital
- **Resources** - r/streetwear, Depop, Internet Archive
- **Inspiration** - Pinterest, Are.na, Behance

### 📖 About (about.html)
Brand story and values:
- Origin story and mission
- Core values (Quality, Community, Sustainability, Authenticity)
- Statistics and achievements
- Call-to-action to join the community

### 🗂️ Archive (archive.html)
Historical drops timeline:
- Current drop showcase
- Previous collections
- Status badges and item counts
- Coming soon section

## 🛠️ Tech Stack

- **HTML5** - Semantic markup
- **CSS3** - Custom properties, Grid, Flexbox, animations
- **Vanilla JavaScript** - No dependencies
- **Lucide Icons** - Modern icon library
- **Google Fonts** - Outfit + JetBrains Mono

## 🎨 Design System

### Colors
```css
--color-bg: #0a0a0a           /* Background */
--color-text: #ffffff          /* Primary text */
--color-text-muted: #888888    /* Secondary text */
--color-accent: #3b82f6        /* Blue accent */
--color-border: rgba(255, 255, 255, 0.1)
```

### Typography
- **Display Font**: Outfit (800 weight)
- **Body Font**: Outfit (300-600 weights)
- **Mono Font**: JetBrains Mono (code/tags)

### Effects
- **Glassmorphism**: `backdrop-filter: blur(20px)`
- **Animations**: Custom cubic-bezier easing
- **Noise Overlay**: SVG texture for depth

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/BUNDL.SHOP.git
cd BUNDL.SHOP
```

### 2. Open in Browser
Simply open `index.html` in your web browser:
```bash
# macOS
open index.html

# Windows
start index.html

# Linux
xdg-open index.html
```

Or use a local server:
```bash
# Python 3
python -m http.server 8000

# Node.js (with http-server)
npx http-server
```

Then visit `http://localhost:8000`

## 📝 Customization Guide

### Adding Products
Edit `app.js` to add new products:
```javascript
const products = [
    {
        id: 7,
        name: "Your Product Name",
        category: "Category",
        price: 299,
        image: "image-url.jpg",
        description: "Product description"
    }
];
```

### Updating Social Links
Edit `socials.html` to update social media handles and links.

### Modifying Colors
Update CSS custom properties in `styles.css`:
```css
:root {
    --color-accent: #your-color;
}
```

### Adding New Links
Edit `links.html` to add new curated links in the appropriate category section.

## 🎯 Key Features Explained

### Shopping Cart
- Add/remove items with smooth animations
- Real-time total calculation
- Persistent cart state (can be extended with localStorage)
- Slide-out drawer with backdrop blur

### Product Filtering
- Filter by category (All, Outerwear, Tops, Bottoms, Footwear, Accessories)
- Smooth fade-in animations
- Active state indication

### Quick View Modal
- Click any product for detailed view
- Full product information
- Add to cart directly from modal
- Click outside to close

## 📱 Browser Support

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

Contributions are welcome! Feel free to:
1. Fork the repository
2. Create a feature branch
3. Submit a pull request

## 📄 License

Copyright © 2026 BUNDL.SHOP. All rights reserved.

## 🔗 Links

- **Live Site**: [Your deployed URL]
- **Instagram**: [@bundl.corp](https://instagram.com/bundl.corp)
- **Discord**: [discord.gg/bundl.corp](https://discord.gg/bundl.corp)

---

**Built with ❤️ for the resale community**
