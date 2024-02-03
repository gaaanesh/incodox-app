/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html"],
  theme: {
    
    fontFamily: {
      sans: ['poppins', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'primary': {
          25: '#E2F0FF',
          50: '#D0E7FF',
          100: '#aad0f7',
          200: '#90c2f4',
          300: '#69acf0',
          400: '#3991eb',
          500: '#177ee7',
          600: '#0065B0',
          700: '#0f5094',
          800: '#0a3764',
          900: '#072443',
        },
        'gray' : {
          25: '#FCFCFD',
          50: '#F9FAFB',
          100: '#F2F4F7',
          200: '#EAECF0',
          300: '#D0D5DD',
          400: '#98A2B3',
          500: '#667085',
          600: '#475467',
          700: '#344054',
          800: '#1D2939',
          900: '#101828',
        },
        'green' : {
          25: '#F5FFFD',
          50: '#EBFEFB',
          100: '#CFFCF2',
          200: '#A3F8E9',
          300: '#69F0E2',
          400: '#33DECC',
          500: '#19C0B2',
          600: '#00A093',
          700: '#09807C',
          800: '#096564',
          900: '#075253'
        },

      },
    },
  },
  variants: {
    extend: {
      display: ['group-focus']
    },
  },
  plugins: [],
}

