import { create } from '@storybook/theming';
import brandImage from "../src/ui-kit/icons/logo-primary-expanded.svg"

export default create({
  base: 'light',
  brandTitle: 'SEO Radar',
  brandUrl: 'https://www.seoradar.com/',
  brandImage: brandImage,
  brandTarget: '_self',
});
