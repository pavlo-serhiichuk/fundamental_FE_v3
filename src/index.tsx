import s from './style.module.scss'
import {createRoot} from 'react-dom/client'

const root = createRoot(document.getElementById('root'))

root.render(<div className={s.content}>DIV</div>)
