/** @type {import('tailwindcss').Config} */

export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            flex: {
                2: "2 2 50%",
            },
        },
        fontSize: {
            sm: "0.8rem",
            base: "1rem",
            xl: "1.5rem",
            "2xl": "2.5rem",
            "3xl": "3rem",
            "4xl": "3.5rem",
        },
    },
    plugins: [],
};
