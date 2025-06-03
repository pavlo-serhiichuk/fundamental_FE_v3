import {type ReactNode} from 'react'
import {render} from '@testing-library/react'
import {I18nextProvider} from 'react-i18next'
import {MemoryRouter} from 'react-router-dom'
import {ReducersMapObject} from '@reduxjs/toolkit'
import {ThemeProvider} from '@/app/providers/ThemeProvider'
import {StateSchema, StoreProvider} from '@/app/providers/StoreProvider'
import i18nForTests from '../../../config/i18n/i18nForTests'
import {Theme} from '@/shared/types/theme'
import '@/app/styles/index.scss'

export interface RenderTestComponentOptions {
  route?: string
  initialState?: DeepPartial<StateSchema>
  asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>,
  theme?: Theme
}

export interface TestProviderProps {
  children: ReactNode
  options?: RenderTestComponentOptions
}

export function TestProvider(props: TestProviderProps) {
  const {children, options = {}} = props
  const {
    route = '/',
    initialState,
    asyncReducers,
    theme = 'light',
  } = options

  return (
    <MemoryRouter initialEntries={[route]}>
      <StoreProvider initialState={initialState} asyncReducers={asyncReducers}>
        <ThemeProvider>
          <I18nextProvider i18n={i18nForTests}>
            <ThemeProvider initialTheme={theme}>
              <div className={`app ${theme}`}>
                {children}
              </div>
            </ThemeProvider>
          </I18nextProvider>
        </ThemeProvider>
      </StoreProvider>
    </MemoryRouter>
  )
}

export function renderTestComponent(
  component: ReactNode,
  options: RenderTestComponentOptions = {},
) {
  return render(<TestProvider options={options}>{component}</TestProvider>)
}
