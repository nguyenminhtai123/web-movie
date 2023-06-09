/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                barlow: ['"Barlow Condensed"', 'sans-serif'],
            },
            colors: {
                primary: '#16405b',
            },
        },
    },
    plugins: [],
};
