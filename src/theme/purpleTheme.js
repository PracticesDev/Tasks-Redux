import { createTheme } from '@mui/material';
import { red } from '@mui/material/colors';

export const purpleTheme = createTheme({
    palette: {
        primary: {
            main: '#005B41'
            
        },
        secondary: {
            main: '#EEF0E5'
        },
        three: {
            main: '#ADBC9F'
            //main: '#E1F0DA'
        },
        error: {
            main: red.A400
        }
    }
})





