import {FC, lazy, Suspense} from 'react'
import {ArticleRatingProps} from './ArticleRating'
import {Skeleton} from '@/shared/ui/Skeleton'

const ProfileRatingLazy = lazy<FC<ArticleRatingProps>>(() => import('./ArticleRating'))

export const ArticleRatingAsync = (props: ArticleRatingProps) => (
  <Suspense fallback={<Skeleton height={120} width="100%" radius="10px" />}>
    <ProfileRatingLazy {...props} />
  </Suspense>
)
