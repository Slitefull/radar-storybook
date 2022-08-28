import { Fragment } from 'react';
import { addDecorator } from '@storybook/react';
import { withThemesProvider } from 'storybook-addon-styled-component-theme';
import { light } from '../src/ui-kit/themes/light/light';
import GlobalCSS from '../src/global.css';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

const withGlobal = (cb) => (
  <Fragment>
    <GlobalCSS/>
    {cb()}
  </Fragment>
);

const themes = [light];
addDecorator(withGlobal);
addDecorator(withThemesProvider(themes));
