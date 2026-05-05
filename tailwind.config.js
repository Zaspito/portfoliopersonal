/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'Segoe UI', 'Arial', 'sans-serif'],
      },
      colors: {
        ink: '#102033',
        graphite: '#27364a',
        mist: '#f7fbff',
        line: '#dce8f5',
        cobalt: '#1d5cff',
        cyan: '#1ab7d7',
        violet: '#7457ff',
      },
      boxShadow: {
        premium: '0 26px 80px rgba(34, 76, 130, 0.16)',
        glass: '0 20px 60px rgba(55, 91, 135, 0.12)',
      },
      backgroundImage: {
        'soft-radial':
          'radial-gradient(circle at 18% 14%, rgba(29, 92, 255, 0.14), transparent 34%), radial-gradient(circle at 84% 10%, rgba(26, 183, 215, 0.16), transparent 30%), radial-gradient(circle at 68% 68%, rgba(116, 87, 255, 0.10), transparent 36%)',
      },
    },
  },
  plugins: [],
};
