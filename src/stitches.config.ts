import { createStitches, createTheme } from '@stitches/react';

export const { styled, globalCss, theme } = createStitches({
    theme: {
        fonts: {
            default: 'Poppins, sans-serif',
        },
        fontSizes: {
            md: '93.75%',
            sm: '100%',
        },
        fontWeights: {
            normal: 400,
            bold: 600,
        },
        colors: {
            primary: '#003DBD',
            hiContrast: '#121214',
            hiContrast2: '#29292e',
            loContrast: '#E6E6E6',
            loContrast2: '#AEAEAE',
            gray: '#4A4A4A',
        },
    },
    media: {
        md: '(min-width: 720px) and (max-width: 1080px)',
        sm: '(max-width: 720px)',
    },
});

export const darkTheme = createTheme({
    colors: {
        primary: '#669CFF',
        hiContrast: '#E6E6E6',
        hiContrast2: '#AEAEAE',
        loContrast: '#121214',
        loContrast2: '#29292e',
        gray: '#A1A1A1',
    },
});
