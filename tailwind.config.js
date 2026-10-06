/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        nook: {
          50: '#FDF5F2',
          100: '#FCEAE4',
          200: '#FAD5C9',
          300: '#F5B29E',
          400: '#EE8468',
          500: '#E65A37', // Warm cozy terracotta
          600: '#CD4725',
          700: '#AB371B',
          800: '#8C2E17',
          900: '#732715',
        },
        cozy: {
          bg: '#F8F5EE',       // Soothing warm oat/linen page canvas
          surface: '#FFFFFF',  // Clean soft white
          subtle: '#F2EDE2',   // Soft background for chips, inputs
          hover: '#ECE6D9',    // Gentle hover tint
          border: '#E8E2D5',   // Very light, non-harsh borders
          divider: '#EDE8DD',  // Organic gentle separator
          text: '#2C2723',     // Deep warm espresso
          muted: '#7A7267',    // Warm stone secondary text
          dim: '#A8A094',      // Soft hint text
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'cozy-sm': '0 2px 8px -2px rgba(44, 39, 35, 0.04)',
        'cozy-md': '0 8px 24px -4px rgba(44, 39, 35, 0.06)',
        'cozy-float': '0 16px 36px -6px rgba(44, 39, 35, 0.08)',
      }
    },
  },
  plugins: [],
}
