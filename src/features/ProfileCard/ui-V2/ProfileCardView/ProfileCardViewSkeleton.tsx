import { cls } from '@/shared/lib/cls/cls'
import { Skeleton } from '@/shared/ui/V2/Skeleton'
import * as s from './ProfileCardView.module.scss'

interface ProfileCardProps {
  className?: string
}

export const ProfileCardViewSkeleton = (props: ProfileCardProps) => {
  return (
    <div className={cls(s.ProfileCard, {}, [props.className])}>
      <div className={s.header}>
        <div>
          <Skeleton height={70} width={70} radius="50%" />
        </div>
        <div>
          <Skeleton height={20} width={100} />
        </div>
      </div>
    </div>
  )
}
