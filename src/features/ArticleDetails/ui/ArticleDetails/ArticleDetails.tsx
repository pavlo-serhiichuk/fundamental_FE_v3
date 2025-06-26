import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import ArrowIcon from '@/shared/assets/icons/arrowdown.svg'
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text'
import { Text } from '@/shared/ui/V2/Text'
import { Avatar as AvatarDeprecated } from '@/shared/ui/deprecated/Avatar'
import { useInitialEffect } from '@/shared/hooks/useInitialEffect'
import { useAppDispatch } from '@/shared/hooks/useAppDispatch'
import EyeIcon from '@/shared/assets/icons/eye.svg'
import CalendarIcon from '@/shared/assets/icons/calendar.svg'
import { Icon as IconDeprecated } from '@/shared/ui/deprecated/Icon'
import { Button as ButtonDeprecated } from '@/shared/ui/deprecated/Button'
import {
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsLoading,
} from '../../model/selectors/getArticleDetailsData'
import { fetchArticleById, renderBlocks } from '@/entities/Article'
import { ArticleDetailsSkeleton } from './ArticleDetailsSkeleton'
import * as s from './ArticleDetails.module.scss'
import { getRouteArticles } from '@/shared/const/routers'
import { ToggleFeature } from '@/shared/lib/features'
import { Button } from '@/shared/ui/V2/Button'
import { Avatar } from '@/shared/ui/V2/Avatar'
import { Icon } from '@/shared/ui/V2/Icon'
import { HStack } from '@/shared/ui/stationary/Stack'

interface ArticleDetailsProps {
  className?: string
  articleId: string
}

export const ArticleDetails = memo((props: ArticleDetailsProps) => {
  const { t } = useTranslation()
  const dispatch = useAppDispatch()
  const articleDetails = useSelector(getArticleDetailsData)
  const isLoading = useSelector(getArticleDetailsLoading)
  const error = useSelector(getArticleDetailsError)
  const { className, articleId } = props
  const navigate = useNavigate()

  useInitialEffect(() => {
    dispatch(fetchArticleById(articleId))
  })

  const onClick = () => {
    navigate(getRouteArticles())
  }

  // eslint-disable-next-line react/no-unstable-nested-components
  const Content = () => {
    switch (true) {
      case !!error:
        return (
          <ToggleFeature
            feature="isV2"
            on={
              <Text
                title={t('There is no such an article')}
                text="You can try another article"
              />
            }
            off={
              <TextDeprecated
                title={t('There is no such an article')}
                text="You can try another article"
              />
            }
          />
        )
      case isLoading || !articleDetails:
        return <ArticleDetailsSkeleton />
      case !!articleDetails:
        return (
          <ToggleFeature
            feature="isV2"
            on={
              <div data-testid="ArticleDetails.Info">
                <Button onClick={onClick} theme="bordered">
                  <HStack align="center">
                    <Icon
                      Svg={ArrowIcon}
                      width={30}
                      height={30}
                      className={s.arrowIcon}
                    />
                    {t('Return back')}
                  </HStack>
                </Button>
                <Avatar
                  size={200}
                  src={articleDetails?.image}
                  alt={articleDetails?.title}
                  className={s.avatar}
                />
                <Text
                  size="text_size_l"
                  title={articleDetails?.title}
                  text={articleDetails?.subtitle}
                  className={s.title}
                />
                {articleDetails?.blocks?.map(renderBlocks)}
              </div>
            }
            off={
              <div data-testid="ArticleDetails.Info">
                <ButtonDeprecated onClick={onClick} theme="bordered">
                  {'< '}
                  Return back
                </ButtonDeprecated>
                <AvatarDeprecated
                  size={200}
                  src={articleDetails?.image}
                  alt={articleDetails?.title}
                  className={s.avatar}
                />
                <div className={s.commonInfo}>
                  <IconDeprecated Svg={EyeIcon} />
                  <TextDeprecated text={String(articleDetails?.views)} />
                </div>
                <div className={s.commonInfo}>
                  <IconDeprecated Svg={CalendarIcon} />
                  <TextDeprecated text={articleDetails?.created} />
                </div>
                <TextDeprecated
                  size="text_size_l"
                  title={articleDetails?.title}
                  text={articleDetails?.subtitle}
                  className={s.title}
                />
                {articleDetails?.blocks?.map(renderBlocks)}
              </div>
            }
          />
        )
      default:
        return null
    }
  }

  return (
    <div className={className} data-testid="ArticleDetails">
      <Content />
    </div>
  )
})
