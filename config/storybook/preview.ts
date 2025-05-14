import type {Preview} from '@storybook/react'
import '../../src/app/styles/index.scss'
import '../../src/shared/config/i18n/i18nForTests'
// @ts-ignore
import {RouterDecorator, ThemeDecorator, TranslationDecorator} from 'shared/config/storybook/decorators/decorators'

const preview: Preview = {
  decorators: [ThemeDecorator('light'), TranslationDecorator, RouterDecorator],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'light',
      // 👇 Specify which background is shown by default
      values: [
        // 👇 Default values
        {name: 'light', value: '#fff'},
        {name: 'dark', value: '#000'},
        // 👇 Add your own
        {name: 'green', value: 'green'},
      ],
    },
  },
}
// export const decorators = [TranslationDecorator]
export default preview
