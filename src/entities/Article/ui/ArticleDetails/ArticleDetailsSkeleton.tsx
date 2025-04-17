import {Skeleton} from 'shared/ui/Skeleton/Skeleton'
import * as s from './ArticleDetails.module.scss'

export const ArticleDetailsSkeleton = () => (
  <>
    <div className={s.avatar}>
      <Skeleton radius="50%" width={200} height={200} />
    </div>
    <Skeleton className={s.title} width={300} height={50} />
    <Skeleton className={s.title} width={500} height={50} />
    <Skeleton width="100%" height={200} />
  </>
)
