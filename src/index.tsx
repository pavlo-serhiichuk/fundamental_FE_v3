import './app/styles/index.scss'
import {createRoot} from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import {ErrorBoundary} from '@/app/providers/ErrorBoundary'
import {App} from './app/App'
import {ThemeProvider} from './app/providers/ThemeProvider'
import './shared/config/i18n/i18n'
import {StoreProvider} from './app/providers/StoreProvider'

const container = document.getElementById('root')

if (!container) {
  throw new Error('Container is missing')
}

const root = createRoot(container)

root.render(
  <BrowserRouter>
    <StoreProvider>
      <ErrorBoundary>
        <ThemeProvider>
          {/* <div>content</div> */}
          <App />
        </ThemeProvider>
      </ErrorBoundary>
    </StoreProvider>
  </BrowserRouter>,
)
