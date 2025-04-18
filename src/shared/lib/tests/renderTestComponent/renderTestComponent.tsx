import {type ReactNode} from 'react'
import {render} from '@testing-library/react'
import {I18nextProvider} from 'react-i18next'
import {MemoryRouter} from 'react-router-dom'
import {ThemeProvider} from 'app/providers/ThemeProvider'
import i18nForTests from '../../../config/i18n/i18nForTests'
import {StateSchema, StoreProvider} from '../../../../app/providers/StoreProvider'

export interface renderWrappedComponentOptions {
  route?: string
  initialState?: DeepPartial<StateSchema>
}

export function renderTestComponent(component: ReactNode, options: renderWrappedComponentOptions = {}) {
  const {route = '/', initialState} = options
  return render(
    <MemoryRouter initialEntries={[route]}>
      <StoreProvider initialState={initialState}>
        <ThemeProvider>
          <I18nextProvider i18n={i18nForTests}>
            {component}
          </I18nextProvider>
        </ThemeProvider>
      </StoreProvider>
    </MemoryRouter>,
  )
}
