import { createGlobalStyle } from 'styled-components';

import hewoff from '../../assets/fonts/HelveticaNowDisplay-Regular.woff';
import hewoff2 from '../../assets/fonts/HelveticaNowDisplay-Regular.woff2';
import hettf from '../../assets/fonts/HelveticaNowDisplay-Regular.ttf';

import tawoff from '../../assets/fonts/Tartuffo-ThinItalic.woff';
import tawoff2 from '../../assets/fonts/Tartuffo-ThinItalic.woff2';
import tattf from '../../assets/fonts/Tartuffo-ThinItalic.ttf';



export const Typography = createGlobalStyle`

@font-face {
    font-family: 'HelveticaNowDisplay';
    src: url('${hewoff2}') format('woff2'),
        url('${hewoff}') format('woff'),
        url('${hettf}') format('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Tartuffo';
    src: url('${tawoff2}') format('woff2'),
        url('${tawoff}') format('woff'),
        url('${tattf}') format('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
}
:root {
    --regular: 'HelveticaNowDisplay', sans-serif;
    --italic: 'Tartuffo', serif;
    --black: #000000;
      --white: #ffffff;
      overflow-wrap: break-word;
}
html {
      scroll-behavior: smooth;
      font-size: 18px !important;
    }
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0; 
    }
    body {
        background-color: var(--white);
        color: var(--white);
        font-family: var(--regular);
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        width: 100vw;
        overflow-x: hidden;
        position: relative;
        -webkit-font-smoothing: antialiased;
        position: relative;
    }
`