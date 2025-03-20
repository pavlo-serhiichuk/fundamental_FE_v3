import type {Preview} from '@storybook/react'
import '../../src/app/styles/index.scss'
import '../../src/shared/config/i18n/i18nForTests'
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
  },
}
// export const decorators = [TranslationDecorator]
export default preview
