/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
      extend: {
        fontFamily: {
          custom: ["sora"], // Replace "YourFontName" with the actual font name
        },
      },
    },
    plugins: [],
  };
  