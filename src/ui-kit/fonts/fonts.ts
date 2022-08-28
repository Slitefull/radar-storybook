import { css } from 'styled-components/macro';

import menlo from './menlo/Menlo-Regular.woff';
import freightSansProBlack from './freight-sans-pro/FreightSansMedium.otf';
import freightSansProBold from './freight-sans-pro/FreightSansBold.otf';
import freightSansProBook from './freight-sans-pro/FreightSansBook.otf';
import freightSansProLight from './freight-sans-pro/FreightSansLight.otf';
import freightSansProMedium from './freight-sans-pro/FreightSansMedium.otf';

const fonts = css`
  @font-face {
    font-family: 'Menlo';
    src: url(${menlo}) format('woff2');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'FreightSans Pro';
    src: url(${freightSansProBlack}) format('woff');
    font-weight: bold;
    font-style: normal;
  }

  @font-face {
    font-family: 'FreightSans Pro';
    src: url(${freightSansProBold}) format('woff');
    font-weight: bold;
    font-style: normal;
  }

  @font-face {
    font-family: 'FreightSans Pro';
    src: url(${freightSansProBook}) format('woff');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'FreightSans Pro';
    src: url(${freightSansProLight}) format('woff');
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: 'FreightSans Pro';
    src: url(${freightSansProMedium}) format('woff');
    font-weight: 500;
    font-style: normal;
  }
`;

export default fonts;
