import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  config: {
    initialColorMode: "dark", // Corrected spelling
    useSystemColorMode: true,
  },
  styles: {
    global: {
      body: {
        margin: 0,
        "font-family": "'Helvetica Neue', 'Segoe UI', sans-serif",
      },
    },
    glassmorphism: {
      background:
        "linear-gradient(to bottom right, rgba(255,255,255,0.2), rgba(255,255,255,0))",
      backdropFilter: "blur(4px)",
      border: "1px solid rgba(255, 255, 255, 0.1)",
    //   borderRadius: "8px",
      padding: "16px",
    //   boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    color:"#fff",
    },
  },
  colors: {
    brand: {
      100: "#f7fafc",
      900: "#1a202c",
    },
    bg: {
      50: "#F3F4F6",
      100: "#E5E8EB",
    },
  },
});

export default theme;
