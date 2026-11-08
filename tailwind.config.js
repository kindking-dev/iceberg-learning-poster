/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ocean: {
          50: '#F0F8FC',
          100: '#EAF4F8',
          200: '#D2E9F3',
          300: '#A9D7EC',
          400: '#64B2D8',
          500: '#287EAD',
          600: '#1C638B',
          700: '#164C72',
          800: '#12345A',
          900: '#0B1F37',
          950: '#061120',
        },
        coral: {
          DEFAULT: '#F28C65',
          light: '#FCECE6',
          dark: '#D86B42',
        },
        teal: {
          soft: '#55B6AA',
          light: '#E6F6F4',
          dark: '#3D8C82',
        },
        slate: {
          muted: '#61788C',
          border: '#CFDFE8',
        },
        surface: {
          arctic: '#F7FAFC',
          pale: '#EAF4F8',
          card: '#FFFFFF',
        }
      },
      fontFamily: {
        heading: ['Montserrat', 'system-ui', '-apple-system', 'sans-serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'subtle': '0 2px 10px rgba(18, 52, 90, 0.04), 0 1px 3px rgba(18, 52, 90, 0.03)',
        'card': '0 4px 20px -2px rgba(18, 52, 90, 0.06), 0 2px 6px -1px rgba(18, 52, 90, 0.04)',
        'elevated': '0 12px 36px -4px rgba(18, 52, 90, 0.1), 0 4px 12px -2px rgba(18, 52, 90, 0.06)',
        'ice': '0 8px 32px 0 rgba(40, 126, 173, 0.15)',
      }
    },
  },
  plugins: [],
}

