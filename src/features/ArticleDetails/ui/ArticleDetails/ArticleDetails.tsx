import {memo} from 'react'
import {useTranslation} from 'react-i18next'
import {useNavigate, useParams} from 'react-router-dom'
import {useSelector} from 'react-redux'
import {cls} from '@/shared/lib/cls/cls'
import {
  type ArticleBlock,
  ArticleBlockCodeComponent,
  ArticleBlockImageComponent,
  ArticleBlockTextComponent,
  ArticleBlockType,
} from '@/entities/Article'
import {Text} from '@/shared/ui/Text/Text'
import {Avatar} from '@/shared/ui/Avatar/Avatar'
import {useInitialEffect} from '@/shared/hooks/useInitialEffect'
import {useAppDispatch} from '@/shared/hooks/useAppDispatch'
import EyeIcon from '@/shared/assets/icons/eye.svg'
import CalendarIcon from '@/shared/assets/icons/calendar.svg'
import {Icon} from '@/shared/ui/Icon/Icon'
import {Button} from '@/shared/ui/Button/Button'
import {
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsLoading,
} from '../../model/selectors/getArticleDetailsData'
import {fetchArticleById} from '../../model/services/fetchArticleById/fetchArticleById'
import {ArticleDetailsSkeleton} from './ArticleDetailsSkeleton'
import * as s from './ArticleDetails.module.scss'
import {RoutePaths} from '@/shared/const/routers'

interface ArticleDetailsProps {
  className?: string
}

export const ArticleDetails = memo((props: ArticleDetailsProps) => {
  const {t} = useTranslation()
  const dispatch = useAppDispatch()
  const articleDetails = useSelector(getArticleDetailsData)
  const isLoading = useSelector(getArticleDetailsLoading)
  const error = useSelector(getArticleDetailsError)
  const {className} = props
  const {id} = useParams<{ id: string | undefined }>()
  const navigate = useNavigate()
  useInitialEffect(() => {
    if (id) {
      dispatch(fetchArticleById(id))
    }
  })

  const onClick = () => {
    navigate(RoutePaths.articles)
  }

  const renderBlocks = (block: ArticleBlock) => {
    switch (block.type) {
    case ArticleBlockType.TEXT:
      return <ArticleBlockTextComponent block={block} key={block.id} />
    case ArticleBlockType.CODE:
      return <ArticleBlockCodeComponent block={block} key={block.id} />
    case ArticleBlockType.IMAGE:
      return <ArticleBlockImageComponent block={block} key={block.id} />
    default:
      return null
    }
  }
  // eslint-disable-next-line react/no-unstable-nested-components
  const Content = () => {
    switch (true) {
    case !!error:
      return <Text title={t('There is no such an article')} text="You can try another article" />
    case isLoading || !articleDetails:
      return <ArticleDetailsSkeleton />
    case !!articleDetails:
      return (
        <div>
          <Button onClick={onClick} theme="bordered">
            {'< '}
            Return back
          </Button>
          <Avatar
            size={200}
            src={articleDetails?.image}
            alt={articleDetails?.title}
            className={s.avatar}
          />
          <div className={s.commonInfo}>
            <Icon Svg={EyeIcon} />
            <Text text={String(articleDetails?.views)} />
          </div>
          <div className={s.commonInfo}>
            <Icon Svg={CalendarIcon} />
            <Text text={articleDetails?.created} />
          </div>
          <Text size="text_size_l" title={articleDetails?.title} text={articleDetails?.subtitle} className={s.title} />
          {articleDetails?.blocks?.map(renderBlocks)}
        </div>
      )
    default:
      return null
    }
  }

  return (
    <div className={cls(s.ArticleDetails, {}, [className])}>
      <Content />
    </div>
  )
})
