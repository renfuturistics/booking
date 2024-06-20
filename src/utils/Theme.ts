import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// Create a theme instance.
const theme = createTheme({
    palette: {
        primary: {
            main: "#232f3e",
        },
        secondary: {
            main: red.A400,
        },
        error: {
            main: red.A400,
        },
        text: {
            primary: "#132F4C",
            secondary: "#3E5060",
        },
        background: {
            default: "#f5f5f7",
            paper: "#f5f5f7",
        },
    },
    typography: {
        fontFamily: ["Circular Std Book", "sans-serif"].join(","),
        fontSize: 11,

        h1: {
            fontFamily: ["Circular Std Book", "sans-serif"].join(","),
            fontSize: 38,
            color: "#00124e",
        },
        h2: {
            fontFamily: ["Circular Std Book", "sans-serif"].join(","),
            fontSize: 30,
            color: "#00124e",
        },
        h3: {
            fontFamily: ["Circular Std Book", "sans-serif"].join(","),
            fontSize: 22,
            color: "#00124e",
        },
        h4: {
            fontFamily: ["Circular Std Book", "sans-serif"].join(","),
            fontSize: 18,
            color: "#00124e",
        },
        h5: {
            fontFamily: ["Circular Std Book", "sans-serif"].join(","),
            fontSize: 14,
            color: "#00124e",
        },
        h6: {
            fontFamily: ["Circular Std Book", "sans-serif"].join(","),
            fontSize: 12,
            color: "#00124e",
        },
        body1: {
            fontFamily: ["Circular Std Book", "sans-serif"].join(","),
        },
    },
});


export default theme;
