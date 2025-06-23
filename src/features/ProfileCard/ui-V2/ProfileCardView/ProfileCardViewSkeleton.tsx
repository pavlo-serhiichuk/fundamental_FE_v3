import { Skeleton } from '@/shared/ui/V2/Skeleton'
import * as s from './ProfileCardView.module.scss'
import { Card } from '@/shared/ui/V2/Card'

interface ProfileCardProps {
  className?: string
}

export const ProfileCardViewSkeleton = (props: ProfileCardProps) => {
  return (
    <Card>
      <div className={s.header}>
        <Skeleton height={70} width={70} radius="50%" />
        <Skeleton height={20} width={100} />
      </div>
    </Card>
  )
}
