import './app/styles/index.scss'
import {createRoot} from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import {ErrorBoundary} from 'app/providers/ErrorBoundary'
import {App} from './app/App'
import {ThemeProvider} from './app/providers/ThemeProvider'
import './shared/config/i18n/i18n'
import {StoreProvider} from './app/providers/StoreProvider'

const root = createRoot(document.getElementById('root'))

root.render(
  <BrowserRouter>
    <StoreProvider>
      <ErrorBoundary>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </ErrorBoundary>
    </StoreProvider>
  </BrowserRouter>,
)
