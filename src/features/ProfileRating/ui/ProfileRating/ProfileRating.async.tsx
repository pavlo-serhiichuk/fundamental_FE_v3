import { FC, lazy, Suspense } from 'react'
import { ProfileRatingProps } from './ProfileRating'
import { Skeleton } from '@/shared/ui/Skeleton'

const ProfileRatingLazy = lazy<FC<ProfileRatingProps>>(
  () => import('./ProfileRating'),
)

export const ProfileRatingAsync = (props: ProfileRatingProps) => (
  <Suspense fallback={<Skeleton height={120} width="100%" radius="10px" />}>
    <ProfileRatingLazy {...props} />
  </Suspense>
)
