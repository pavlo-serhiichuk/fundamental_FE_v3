import { type FC } from 'react'
import { cls } from '@/shared/lib/cls/cls'
import { Loader } from '@/shared/ui/deprecated/Loader'
import * as s from './PageLoader.module.scss'
import { ToggleFeature } from '@/shared/lib/features'
import { MainLayout } from '@/shared/layouts/MainLayout'
import { Skeleton } from '@/shared/ui/V2/Skeleton'
import '../../app/styles/index.scss'

interface PageLoaderProps {
  className?: string
}

export const PageLoader: FC<PageLoaderProps> = (props) => {
  const { className } = props
  return (
    <div className={cls(s.PageLoader, {}, [className])}>
      <Loader />
    </div>
  )
}
