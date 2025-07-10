import { Skeleton } from '@/shared/ui/V2/Skeleton'
import * as s from './CommentCard.module.scss'
import { Card } from '@/shared/ui/V2/Card'

export const CommentCardSkeleton = () => (
  <Card>
    <div className={s.header}>
      <Skeleton width={30} height={30} radius="50%" />
      <Skeleton width={50} height={20} />
    </div>
    <Skeleton width={200} height={20} />
  </Card>
)
