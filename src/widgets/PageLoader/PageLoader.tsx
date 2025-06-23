import { type FC } from 'react'
import { cls } from '@/shared/lib/cls/cls'
import { Loader } from '@/shared/ui/deprecated/Loader'
import * as s from './PageLoader.module.scss'
import { ToggleFeature } from '@/shared/lib/features'
import { MainLayout } from '@/shared/layouts/MainLayout'
import { Skeleton } from '@/shared/ui/V2/Skeleton'
import '../../app/styles/index.scss'
import { VStack } from '@/shared/ui/stationary/Stack'

interface PageLoaderProps {
  className?: string
}

export const PageLoader: FC<PageLoaderProps> = (props) => {
  const { className } = props
  // return (
  //   <div className={cls(s.PageLoader, {}, [className])}>
  //     <Loader />
  //   </div>
  // )
  return (
    <ToggleFeature
      feature="isV2"
      on={
        <MainLayout
          header={<Skeleton width="100px" height="50px" margin="20px" />}
          content={
            <VStack gap="12">
              <Skeleton width="100%" height="30px" />
              <Skeleton width="50%" height="30px" />
              <Skeleton width="20%" height="30px" />
              <Skeleton width="100%" height="300px" />
            </VStack>
          }
          sidebar={<Skeleton width="200px" height="95vh" margin="20px" />}
        />
      }
      off={
        <div className={cls(s.PageLoader, {}, [className])}>
          <Loader />
        </div>
      }
    />
  )
}
