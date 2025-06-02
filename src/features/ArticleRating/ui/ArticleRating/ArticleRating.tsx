import {useTranslation} from 'react-i18next'
import {useSelector} from 'react-redux'
import {useCallback} from 'react'
import {cls} from '@/shared/lib/cls/cls'
import {getUserAuthData} from '@/entities/User'
import {RatingCard} from '@/entities/Rating'
import {useFetchArticleRating, useRateArticle} from '../../api/articleRatingApi'
import * as s from './ArticleRating.module.scss'
import {Skeleton} from '@/shared/ui/Skeleton'

export interface ArticleRatingProps {
  className?: string
  articleId: string
}

const ArticleRating = (props: ArticleRatingProps) => {
  const {className, articleId} = props
  const {t} = useTranslation()
  const userId = useSelector(getUserAuthData)?.id || '0'
  const [rateArticle] = useRateArticle()
  // const {id: articleId} = useParams<{ id: string | undefined }>()

  const {
    data: articleRating,
    isLoading,
  } = useFetchArticleRating({articleId, userId})

  const handleRate = useCallback(async (starsCount: number, feedbackMessage?: string) => {
    try {
      await rateArticle({
        articleId,
        userId,
        rate: starsCount,
        feedback: feedbackMessage,
      }).unwrap()
    } catch (err) {
      console.error('Failed to submit rating:', err)
    }
  }, [articleId, userId, rateArticle])

  const title = articleRating?.length ? "You've rated this article" : 'Rate this article'

  const onAccept = useCallback((startsCount: number, feedbackMessage?: string) => {
    handleRate(startsCount, feedbackMessage)
  }, [handleRate])

  const onCancel = useCallback((startsCount: number) => {
    handleRate(startsCount)
  }, [handleRate])

  if (isLoading) {
    return <Skeleton width="100%" height={120} className={s.ArticleRating} radius="20px" />
  }

  return (
    <div
      className={cls(s.ArticleRating, {}, [className])}
      data-testid="ArticleRating"
    >
      <RatingCard
        title={t(title)}
        ratingInfo={articleRating?.[0]}
        onAccept={onAccept}
        onCancel={onCancel}
        feedbackTitle={t('Rate this profile:')}
      />
    </div>
  )
}

export default ArticleRating
