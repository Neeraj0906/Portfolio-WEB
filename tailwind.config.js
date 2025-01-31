/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", // Ensure this path is included for HTML files
    "./src/**/*.{js,jsx}", // Ensure this path is included for JSX files
  ],
  theme: {
    extend: {
      colors: {
        // Add custom colors
        'primary': '#4C6EF5',  // Indigo
        'secondary': '#2D3748', // Dark gray
        'accent': '#F6AD55',    // Teal or any other accent color
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Custom font family
      },
      boxShadow: {
        'custom': '0 4px 6px rgba(0, 0, 0, 0.1)', // Custom shadow
      },
      spacing: {
        'extra-large': '80px', // Custom spacing value
      },
    },
  },
  plugins: [
    // Add any necessary plugins here
  ],
};
