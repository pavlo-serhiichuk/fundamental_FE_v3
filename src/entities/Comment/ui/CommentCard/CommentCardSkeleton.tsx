import {cls} from '@/shared/lib/cls/cls'
import {Skeleton} from '@/shared/ui/Skeleton'
import * as s from './CommentCard.module.scss'

export const CommentCardSkeleton = () => (
  <div className={cls(s.CommentCard)}>
    <div className={s.header}>
      <Skeleton width={30} height={30} radius="50%" />
      <Skeleton width={50} height={20} />
    </div>
    <Skeleton width={200} height={20} />
  </div>
)
