import {type FC} from 'react'
import {cls} from '@/shared/lib/cls/cls'
import {Loader} from '@/shared/ui/Loader'
import * as s from './PageLoader.module.scss'

interface PageLoaderProps {
  className?: string
}

export const PageLoader: FC<PageLoaderProps> = (props) => {
  const {className} = props
  return (
    <div className={cls(s.PageLoader, {}, [className])}>
      <Loader />
    </div>
  )
}
