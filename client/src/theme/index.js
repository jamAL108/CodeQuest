import { extendTheme } from "@chakra-ui/react";

const colors = {
  BG: {
    nav: "#1C1C24",
    buttonActive: "#6F8AE9",
  },
  accent: {
    main: "#202029",
    light: "#ffffff",
    transparent: "transparent",
  },
  backG: {
    home: "#0d1116",
  },
  button: {
    bg: "#7299F2",
    hover: "#6a8de1",
    color: "#202029",
  },
  outbutton: {
    bg: "#753fc8",
    hover: "rgb(126, 71, 178)",
  },
};

const fonts = {
  Outside: "Inter, system-ui, sans-serif",
  Main: "Poppins, sans-serif",
  body: "Geologica , sans-serif",
};

const theme = extendTheme({
  colors,
  fonts,
  components: {
    Button: {
      variants: {
        solid: {
          h:'none',
          borderRadius: "none",
          bg: "none", // Use the custom background color for the solid variant
          color: "white", // Use the custom text color for the solid variant
          _hover: {
            bg: "none", // Use the custom background color on hover for the solid variant
          },
          _active: {
            bg: "none",
          },
          _focus: {
            bg: "none",
          },
        },
      },
    },
    MenuButton: {
      baseStyle: {
        // Customize the MenuButton component's base style
        display: "flex",
        flexDirection: "column",
        // Add more styles as needed
      },
    },
    MenuList: {
      baseStyle: {
        // Customize the MenuButton component's base style
        weight: "100%",
        minW: "100%",
        // Add more styles as needed
      },
    },
	Input: {
		// Customize the default styles for the Input component
		baseStyle: {
			display:"none",
			outline:"none",
			border: "none", 
		},
		  _hover:{
			border:"none"
		  },
		  _focus:{
			border:"none"
		  },
		  _active:{
			border:"none"
		  }
	  },
  },
});

export default theme;
