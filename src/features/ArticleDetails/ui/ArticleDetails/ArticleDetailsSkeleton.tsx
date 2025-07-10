import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton'
import * as s from './ArticleDetails.module.scss'
import { ToggleFeature } from '@/shared/lib/features'
import { Skeleton } from '@/shared/ui/V2/Skeleton'

export const ArticleDetailsSkeleton = () => (
  <ToggleFeature
    feature="isV2"
    on={
      <>
        <div className={s.avatar}>
          <Skeleton radius="50%" width={200} height={200} />
        </div>
        <Skeleton className={s.title} width={300} height={50} />
        <Skeleton className={s.title} width={500} height={50} />
        <Skeleton width="100%" height={200} />
      </>
    }
    off={
      <>
        <div className={s.avatar}>
          <SkeletonDeprecated radius="50%" width={200} height={200} />
        </div>
        <SkeletonDeprecated className={s.title} width={300} height={50} />
        <SkeletonDeprecated className={s.title} width={500} height={50} />
        <SkeletonDeprecated width="100%" height={200} />
      </>
    }
  />
)
