export default {
  theme: {
    extend: {
      colors: {
        primary: "hsl(220, 90%, 56%)", 
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".btn-primary": {
          backgroundColor: "hsl(220, 90%, 56%)",
          color: "#fff",
          padding: "0.5rem 1rem",
          borderRadius: "0.5rem",
          fontWeight: "600",
        },
      });
    },
  ],
};
