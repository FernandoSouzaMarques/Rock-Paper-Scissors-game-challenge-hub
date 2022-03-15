// tailwind.config.js
module.exports = {
  content: [
    "./source/presentation/pages/**/*.{js,ts,jsx,tsx}",
    "./source/presentation/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      body: ["Barlow Semi Condensed", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        "scissors-gradient":
          "radial-gradient(circle, hsl(39, 89%, 49%) 0%, hsl(40, 84%, 53%) 100%)",
        "paper-gradient":
          "radial-gradient(circle, hsl(230, 89%, 62%) 0%, hsl(230, 89%, 65%) 100%)",
        "rock-gradient":
          "radial-gradient(circle, hsl(349, 71%, 52%) 0%, hsl(349, 70%, 56%) 100%)",
        "lizard-gradient":
          "radial-gradient(circle, hsl(261, 73%, 60%) 0%, hsl(261, 72%, 63%) 100%)",
        'cyan-gradient': "radial-gradient(hsl(189, 59%, 53%), hsl(189, 58%, 57%))",
        'blue-gradient': "radial-gradient(ellipse at top, hsl(213, 48%, 23%), hsl(235, 49%, 15%))"
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
