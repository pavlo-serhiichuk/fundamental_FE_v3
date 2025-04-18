import {memo} from 'react'
import {cls} from 'shared/lib/cls/cls'
import {useTranslation} from 'react-i18next'
import {useParams} from 'react-router-dom'
import {useSelector} from 'react-redux'
import {type ArticleBlock, ArticleBlockType} from 'entities/Article'
import {Text} from 'shared/ui/Text/Text'
import {Avatar} from 'shared/ui/Avatar/Avatar'
import {useInitialEffect} from 'shared/hooks/useInitialEffect'
import DynamicReducerLoader, {type ReducersList} from 'shared/lib/components/DynamicReducerLoader/DynamicReducerLoader'
import {useAppDispatch} from 'shared/hooks/useAppDispatch'
import EyeIcon from 'shared/assets/icons/eye.svg'
import CalendarIcon from 'shared/assets/icons/calendar.svg'
import {Icon} from 'shared/ui/Icon/Icon'
import {articleDetailsReducer} from 'pages/ArticleDetailsPage/model/slice/articleDetailsSlice'
import {
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsLoading,
} from '../../model/selectors/getArticleDetailsData'
import {ArticleBlockCodeComponent} from '../ArticleBlockCodeComponent/ArticleBlockCodeComponent'
import {ArticleBlockImageComponent} from '../ArticleBlockImageComponent/ArticleBlockImageComponent'
import {ArticleBlockTextComponent} from '../ArticleBlockTextComponent/ArticleBlockTextComponent'
import {ArticleDetailsSkeleton} from './ArticleDetailsSkeleton'
import * as s from './ArticleDetails.module.scss'
import {fetchArticleById} from '../../model/services/fetchArticleById/fetchArticleById'

interface ArticleDetailsProps {
  className?: string
}

const reducers: ReducersList = {
  articleDetails: articleDetailsReducer,
}

export const ArticleDetails = memo((props: ArticleDetailsProps) => {
  const {t} = useTranslation()
  const dispatch = useAppDispatch()
  const articleDetails = useSelector(getArticleDetailsData)
  const isLoading = useSelector(getArticleDetailsLoading)
  const error = useSelector(getArticleDetailsError)
  const {className} = props
  const {id} = useParams<{ id: string | undefined }>()

  useInitialEffect(() => {
    if (id) {
      dispatch(fetchArticleById(id))
    }
  })

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
    <DynamicReducerLoader reducers={reducers}>
      <div className={cls(s.ArticleDetails, {}, [className])}>
        <Content />
      </div>
    </DynamicReducerLoader>

  )
})
