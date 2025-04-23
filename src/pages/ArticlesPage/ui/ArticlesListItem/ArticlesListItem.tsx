import {memo} from 'react'
import {cls} from 'shared/lib/cls/cls'
import {useTranslation} from 'react-i18next'
import {ArticlesView} from 'pages/ArticlesPage/module/types/articlesPageTypes'
import {Article, ArticleBlockType} from 'entities/Article'
import {useSelector} from 'react-redux'
import {Card} from 'shared/ui/Card/Card'
import {Icon} from 'shared/ui/Icon/Icon'
import EyeIcon from 'shared/assets/icons/eye.svg'
import {useNavigate} from 'react-router-dom'
import {RoutePaths} from 'shared/config/routesConfig/routesConfig'
import {Avatar} from 'shared/ui/Avatar/Avatar'
import {Text} from 'shared/ui/Text/Text'
import {Button} from 'shared/ui/Button/Button'
import {getListView, ListView} from 'features/ChangeListView'
import * as s from './ArticlesListItem.module.scss'

interface ArticlesListItemProps {
  className?: string
  article: Article
}

export const ArticlesListItem = memo((props: ArticlesListItemProps) => {
  const {className, article} = props
  const {t} = useTranslation()
  const listView = useSelector(getListView)
  let viewClassName
  const navigate = useNavigate()
  const onClickCard = () => {
    navigate(RoutePaths.articleDetails + article.id)
  }
  if (listView === ListView.BIG) {
    viewClassName = listView || ArticlesView.BIG
    const textBlocks = article.blocks?.filter((block) => block.type === ArticleBlockType.TEXT)

    return (
      <Card className={cls(s.ArticlesListItem, {}, [className, s[viewClassName]])}>
        <div className={s.titleWrapper}>
          <div className={s.userWrapper}>
            <div className={s.userInfo}>
              <Avatar src={article.user?.avatar} size={30} alt={article.user?.username} />
              <span>
                {article.user?.username}
              </span>
            </div>
            <div className={s.created}>{article?.created}</div>
          </div>
          <Text title={article?.title} size="text_size_l" className={s.title} />
          <Text text={article?.type?.join(', ')} fontStyle="italic-fs" className={s.topics} />
        </div>
        <div className={s.image}>
          <img src={article?.image} alt={article?.title} />
        </div>
        <div className={s.paragraphs}>
          {textBlocks?.map((block, index) => (
            <div key={index}>{block?.paragraphs}</div>
          ))}
        </div>
        <Button className={s.readMore} theme="bordered" onClick={onClickCard}>{t('Read more')}</Button>
      </Card>
    )
  }

  viewClassName = listView || ArticlesView.SMALL

  return (
    <Card
      className={cls(s.ArticlesListItem, {}, [className, s[viewClassName]])}
      onClick={onClickCard}
    >
      <div className={s.created}>{article.created}</div>
      <div className={s.image}>
        <img src={article.image} alt={article.title} />
      </div>
      <div className={s.details}>
        <span>{article.type?.join(', ')}</span>
        <span className={s.views}>
          <span>{article.views}</span>
          <Icon Svg={EyeIcon} />
        </span>
      </div>
      <div className={s.title}>{article.title}</div>
    </Card>
  )
})
