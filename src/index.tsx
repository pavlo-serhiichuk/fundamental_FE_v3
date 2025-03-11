import {createRoot} from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import {Content} from './Content'

const root = createRoot(document.getElementById('root'))

root.render(<BrowserRouter><Content /></BrowserRouter>)
