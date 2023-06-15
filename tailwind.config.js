/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: "jit",
    darkMode: "class",
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            colors: {
                c_Blue: "hsl(246, 80%, 60%)",
                c_Work: "hsl(15, 100%, 70%)",
                c_Play: "hsl(195, 74%, 62%)",
                c_Study: "hsl(348, 100%, 68%)",
                c_Exercise: "hsl(145, 58%, 55%)",
                c_Social: "hsl(264, 64%, 52%)",
                c_SelfCare: "hsl(43, 84%, 65%)",
                c_VeryDarkBlue: "hsl(226, 43%, 10%)",
                c_DarkBlue: "hsl(235, 46%, 20%)",
                c_DesaturatedBlue: " hsl(235, 45%, 61%)",
                c_PaleBlue: "hsl(236, 100%, 87%)",
            },
        },
    },
    plugins: [],
};
