/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        principal: ['Poppins', 'sans-serif'],
      },
      screens: {
        telefono: '480px',
        tablet: '768px',
        desktop: '1024px',
      },
      colors: {
        azul: '#0da6f3',
        rojo: '#cb0000',
        verde: '#329f00',
        negro: '#1a1b15',
        blanco: '#FFFFFF',
        gris: '#e1e1e1',
      },
      gridTemplateColumns: {
        'customAuth': '1fr 5fr',
      },
      fontWeight: {
        delgada: 300,
        regular: 400,
        bold: 700,
        black: 900,
      },
    },
  },
  plugins: [],
}
