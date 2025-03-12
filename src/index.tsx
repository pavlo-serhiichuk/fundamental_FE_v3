import './styles/index.scss'
import {createRoot} from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import {App} from './App'
import ThemeProvider from './themes/ThemeProvider'

const root = createRoot(document.getElementById('root'))

root.render(<BrowserRouter><ThemeProvider><App /></ThemeProvider></BrowserRouter>)
