import { createTheme } from "@mui/material/styles";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
    variable: "--font-montserrat",
    subsets: ["latin"],
});

const theme = createTheme({
    palette: {
        primary: {
            main: '#53C3DD',
            50: '#CFEEF5',
            100: '#C1E9F3',
            200: '#A6E0ED',
            300: '#8AD6E8',
            400: '#6FCDE2',
            500: '#53C3DD',
            600: '#46A4BA',
            700: '#388596',
            800: '#2B6573',
            900: '#1E4650',
        },
        secondary: {
            main: '#2A7BBB',
            50: '#C3DAEC',
            100: '#B2CFE7',
            200: '#90BADC',
            300: '#6EA5D1',
            400: '#4C90C6',
            500: '#2A7BBB',
            600: '#23679D',
            700: '#1D547F',
            800: '#164061',
            900: '#0F2C43',
        },
        error: {
            main: '#F04438',
            50: '#FBCBC7',
            100: '#FABCB7',
            200: '#F79E98',
            300: '#F5867E',
            400: '#FF7168',
            500: '#F04438',
            600: '#CA392F',
            700: '#A32E26',
            800: '#7D231D',
            900: '#561814',
        }
    },
    typography: {
        fontFamily: 'Montserrat, sans-serif',
    },

})

export default theme