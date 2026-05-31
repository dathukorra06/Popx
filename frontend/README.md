# PopX Mobile App Mockup

This project is a pixel-perfect React JS implementation of the PopX mobile application design. It features a modern, responsive mobile-centered layout wrapped inside a device mockup frame, with smooth navigation and interactive states.

## 🚀 Features

- **Pixel-Perfect Design**: The application uses Vanilla CSS to match the provided design specs exactly, employing the modern `Inter` font family for a premium look.
- **Mobile Device Wrapper**: The UI is displayed within a simulated mobile device frame (320px x 640px) that centers beautifully on a desktop viewport.
- **Interactive Forms**: Custom floating-label inputs are implemented from scratch for the Signin and Signup pages.
- **Custom Radio Buttons**: Specialized CSS radio selectors for "Agency Status" selection.
- **Dynamic State Management**: 
  - Data entered in the Signin/Signup forms (Name, Email, Phone, Company) automatically synchronizes with the Profile Account Settings page.
- **Profile Picture Upload**: Users can click the camera badge on the Profile screen to upload and preview a custom profile avatar using the HTML5 FileReader API.
- **Smooth Animations**: High-end micro-interactions, including staggered `slideUpFade` animations during screen transitions, and interactive hover states for buttons.
- **Back Navigation**: Added intuitively placed back arrows on inner screens to return to the Welcome screen seamlessly.

## 📁 Project Structure

- `src/components/Welcome.jsx` - The initial landing screen.
- `src/components/Signin.jsx` - The login form with validation.
- `src/components/Signup.jsx` - The registration form with required fields.
- `src/components/Profile.jsx` - The account settings dashboard showing user metadata and the avatar upload feature.
- `src/App.jsx` - The main coordinator component that handles global state and screen switching.
- `src/index.css` - Global design tokens, font imports (`Inter`), animations, and the mobile device wrapper layout.
- `src/App.css` - Component-specific styling, input fields, form layouts, and buttons.

## 🛠️ Installation & Setup

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Run the Development Server**:
   ```bash
   npm run dev
   ```

3. **View the Application**:
   Open your browser and navigate to `http://localhost:5173/`

## 📦 Deployment

This project is built using Vite and can be easily deployed to services like Netlify or Vercel.

To build the production bundle:
```bash
npm run build
```
This will generate optimized static files in the `dist` directory, which can be uploaded directly to your hosting provider.
