import './app/styles/index.scss'
import {createRoot} from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import {ErrorBoundary} from 'app/providers/ErrorBoundary'
import {App} from './app/App'
import {ThemeProvider} from './app/providers'
import './shared/config/i18n/i18n'

const root = createRoot(document.getElementById('root'))

root.render(
  <BrowserRouter>
    <ErrorBoundary>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </ErrorBoundary>
  </BrowserRouter>,
)
