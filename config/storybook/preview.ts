import type { Preview } from '@storybook/react'
import '../../src/app/styles/index.scss'
import '../../src/shared/config/i18n/i18nForTests'
import {
  RouterDecorator,
  ThemeDecorator,
  TranslationDecorator,
  CollapseProviderDecorator,
} from '../../src/shared/config/storybook/decorators/decorators'

const preview: Preview = {
  decorators: [
    ThemeDecorator('app_light_theme'),
    TranslationDecorator,
    RouterDecorator,
    CollapseProviderDecorator,
  ],
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
