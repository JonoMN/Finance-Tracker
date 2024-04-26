import { createTheme } from '@mui/material/styles';

const customTheme = createTheme({
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    fontSize: '1rem',
                    padding: '10px 20px',
                    borderRadius: '20px',
                    color: 'white',
                    background: 'rgba(255, 255, 255, 0.02)',
                    justifyContent: 'flex-start',
                    textTransform: 'none',
                },
            },
        },
    },
    typography: {
        fontFamily: [
            'Roboto',
            'Arial',
            'sans-serif'
        ].join(','),
    },
});

export default customTheme;