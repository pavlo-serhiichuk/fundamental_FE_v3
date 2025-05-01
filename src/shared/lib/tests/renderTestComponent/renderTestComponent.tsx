import {type ReactNode} from 'react'
import {render} from '@testing-library/react'
import {I18nextProvider} from 'react-i18next'
import {MemoryRouter} from 'react-router-dom'
import {ThemeProvider} from 'app/providers/ThemeProvider'
import {ReducersMapObject} from '@reduxjs/toolkit'
import {StateSchema, StoreProvider} from 'app/providers/StoreProvider'
import i18nForTests from '../../../config/i18n/i18nForTests'

export interface RenderWrappedComponentOptions {
  route?: string
  initialState?: DeepPartial<StateSchema>
  asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>,
}

export function renderTestComponent(
  component: ReactNode,
  options: RenderWrappedComponentOptions = {},
) {
  const {
    route = '/',
    initialState,
    asyncReducers,
  } = options

  return render(
    <MemoryRouter initialEntries={[route]}>
      <StoreProvider initialState={initialState} asyncReducers={asyncReducers}>
        <ThemeProvider>
          <I18nextProvider i18n={i18nForTests}>
            {component}
          </I18nextProvider>
        </ThemeProvider>
      </StoreProvider>
    </MemoryRouter>,
  )
}
