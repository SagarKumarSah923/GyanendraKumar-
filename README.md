# Advocate Gayendra Kumar - React Website

A modern, responsive React website for Advocate Gayendra Kumar, a civil lawyer in Delhi. This website is built with React and features a professional design with smooth animations and interactive components.

## 🚀 Features

- **React 18** - Modern React with hooks and functional components
- **Responsive Design** - Works perfectly on desktop, tablet, and mobile devices
- **Modern UI/UX** - Clean, professional design with smooth animations
- **Interactive Components** - Contact form with validation and state management
- **Practice Areas** - Comprehensive list of legal services offered
- **Court Hierarchy** - Information about court structure in Delhi
- **Specialized Services** - Detailed drafting services offered
- **Social Media Integration** - Links to social media platforms
- **SEO Optimized** - Proper meta tags and semantic HTML structure

## 📱 Contact Information

- **Phone:** +91 9871453192
- **Email:** gayendrakumar@gmail.com
- **Address:** Tower-6, Panchsheel Society, Greater Noida West Sector-1, UP-201318

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation Steps

1. **Clone or download the project files**
   ```bash
   # If you have git, you can clone the repository
   git clone <repository-url>
   cd advocate-gayendra-kumar
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm start
   # or
   yarn start
   ```

4. **Open your browser**
   - The app will automatically open at `http://localhost:3000`
   - If it doesn't open automatically, manually navigate to the URL

## 📁 Project Structure

```
src/
├── components/           # React components
│   ├── Header.js        # Header component
│   ├── Navigation.js    # Navigation component
│   ├── Hero.js         # Hero section
│   ├── About.js        # About section
│   ├── CourtHierarchy.js # Court hierarchy section
│   ├── Services.js     # Services section
│   ├── PracticeAreas.js # Practice areas section
│   ├── SpecializedServices.js # Specialized services
│   ├── Contact.js      # Contact form
│   ├── Footer.js       # Footer component
│   └── *.css          # Component-specific styles
├── App.js              # Main App component
├── App.css             # App-specific styles
├── index.js            # React entry point
└── index.css           # Global styles

public/
├── index.html          # HTML template
└── manifest.json       # PWA manifest
```

## 🎨 Customization

### Updating Contact Information
All contact information is centralized in the components. Update the phone number, email, and address in:
- `src/components/Header.js`
- `src/components/Navigation.js`
- `src/components/Contact.js`
- `src/components/Footer.js`

### Changing Colors and Branding
Main colors are defined in `src/index.css`:
- Primary: `#1e3c72` (Dark Blue)
- Secondary: `#2a5298` (Light Blue)
- Background: `#f8f9fa` (Light Gray)

### Adding New Sections
1. Create a new component in `src/components/`
2. Add the corresponding CSS file
3. Import and use the component in `src/App.js`

## 🚀 Deployment

### Build for Production
```bash
npm run build
# or
yarn build
```

This creates a `build` folder with optimized production files.

### Deploy to Web Hosting
1. **Netlify** - Drag and drop the `build` folder
2. **Vercel** - Connect your GitHub repository
3. **GitHub Pages** - Use the `build` folder
4. **Traditional Hosting** - Upload the `build` folder contents

## 🔧 Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App (not recommended)

## 📱 Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🎯 Key Features Explained

### Interactive Contact Form
- Client-side validation
- Loading states during submission
- Success/error messages
- Form state management with React hooks

### Responsive Navigation
- Mobile hamburger menu
- Smooth scrolling to sections
- Active link highlighting
- Sticky navigation bar

### Animated Statistics
- Counter animations using Intersection Observer
- Smooth fade-in animations
- Hover effects on cards

### Modern React Patterns
- Functional components with hooks
- Component composition
- CSS modules for styling
- Event handling and state management

## 🔮 Future Enhancements

Consider adding:
- **Blog Section** - With CMS integration
- **Client Testimonials** - Dynamic testimonials
- **Case Studies** - Portfolio of successful cases
- **Online Payment** - Integration for consultation fees
- **Multi-language Support** - Hindi/English toggle
- **Advanced SEO** - Meta tags, structured data
- **Google Analytics** - Traffic tracking
- **PWA Features** - Offline support, push notifications

## 🐛 Troubleshooting

### Common Issues

1. **Port already in use**
   ```bash
   # Kill the process using port 3000
   npx kill-port 3000
   # Then restart
   npm start
   ```

2. **Dependencies issues**
   ```bash
   # Clear cache and reinstall
   rm -rf node_modules package-lock.json
   npm install
   ```

3. **Build errors**
   ```bash
   # Clear build cache
   npm run build -- --reset-cache
   ```

## 📞 Support

For any issues or customization needs:
1. Check the console for error messages
2. Review the component code and CSS
3. Ensure all dependencies are installed
4. Contact a React developer for advanced modifications

## 📄 License

This website template is created for Advocate Gayendra Kumar. Please ensure you have the right to use any third-party assets or fonts included in this project.

---

**Built with ❤️ using React**