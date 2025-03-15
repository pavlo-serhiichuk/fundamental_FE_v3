import {type FC} from 'react'
import {cls} from 'shared/lib/cls/cls'
import * as s from './Loader.module.scss'

interface LoaderProps {
  className?: string
}

export const Loader: FC<LoaderProps> = (props) => {
  const {className} = props

  return (
    <div className={cls(s.Loader, {}, [className])}>
      loading...
    </div>
  )
}
