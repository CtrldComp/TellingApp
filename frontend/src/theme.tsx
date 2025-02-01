const theme = {
  colors: {
    primary: "#000000",
    secondary: "#D9A5FF",
    tertiary: "#E8B4C8",
    background: "#F0F0F3",
    cardBackground: "rgba(255, 255, 255, 0.3)",
    darkModeBackground: "#1E1E1E",
    border: "rgba(255, 255, 255, 0.2)",
    text: "#000000", // Added text color
    status: {
      success: "#7DD87D",
      progress: "#FF85A2",
    },
  },
  fonts: {
    body: "Inter, sans-serif",
    heading: "Poppins, sans-serif",
  },
  effects: {
    shadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
    glassEffect: "backdrop-blur-lg bg-opacity-30 border border-border",
    borderRadius: "16px",
  },
  spacing: {
    base: "16px",
    componentGap: "24px",
    cardPadding: "20px",
    gridColumnGap: "16px",
  },
  components: {
    button: {
      base: "px-4 py-2 rounded-full font-medium transition-all",
      primary: "bg-primary text-white hover:opacity-80",
      secondary: "bg-secondary text-black hover:opacity-80",
      ghost: "border border-border text-black hover:bg-secondary hover:text-white",
    },
    card: {
      base: "p-4 rounded-lg shadow-md bg-cardBackground backdrop-blur-lg border border-border",
    },
    input: {
      base: "border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-secondary bg-transparent",
    },
  },
  breakpoints: {
    mobile: "375px",
    tablet: "768px",
    desktop: "1024px",
    wide: "1440px",
  },
};

export default theme;
