import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { AppImage } from '@/shared/ui/stationary/AppImage'
import { cls } from '@/shared/lib/cls/cls'
import { Card as CardDeprecated } from '@/shared/ui/deprecated/Card'
import { Icon as IconDeprecated } from '@/shared/ui/deprecated/Icon'
import EyeIcon from '@/shared/assets/icons/eye.svg'
import { Avatar as AvatarDeprecated } from '@/shared/ui/deprecated/Avatar'
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text'
import { Text } from '@/shared/ui/V2/Text'
import { Button as ButtonDeprecated } from '@/shared/ui/deprecated/Button'
import { ListView } from '@/features/ChangeListView'
import { ArticleBlockType } from '../../model/consts/consts'
import { Article } from '../../model/types/article'
import { getRouteArticleDetails } from '@/shared/const/routers'
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton'
import * as s from './ArticlesListItem.module.scss'
import { ToggleFeature } from '@/shared/lib/features/ToggleFeature/ToggleFeature'
import { Card } from '@/shared/ui/V2/Card'
import { Avatar } from '@/shared/ui/V2/Avatar'
import { Skeleton } from '@/shared/ui/V2/Skeleton'
import { Button } from '@/shared/ui/V2/Button'
import { Icon } from '@/shared/ui/V2/Icon'

interface ArticlesListItemProps {
  className?: string
  article: Article
  listView?: ListView
}

export const ArticlesListItem = memo((props: ArticlesListItemProps) => {
  const { className, article, listView } = props
  const { t } = useTranslation()
  let viewClassName
  const navigate = useNavigate()
  const onClickCard = () => {
    navigate(getRouteArticleDetails(article.id))
  }
  if (listView === ListView.BIG) {
    viewClassName = listView || ListView.BIG
    const textBlocks = article.blocks?.filter(
      (block) => block.type === ArticleBlockType.TEXT,
    )

    return (
      <ToggleFeature
        feature="isV2"
        on={
          <Card
            className={cls(s.ArticlesListItem, {}, [
              className,
              s[viewClassName],
            ])}
            testId="ArticlesListItem"
            padding="0"
          >
            <div className={s.titleWrapper}>
              <div className={s.userWrapper}>
                <div className={s.userInfo}>
                  <Avatar
                    src={article.user?.avatar}
                    size={30}
                    alt={article.user?.username}
                  />
                  <span>{article.user?.username}</span>
                </div>
                <div className={s.created}>{article?.created}</div>
              </div>
              <Text
                title={article?.title}
                size="text_size_l"
                className={s.title}
              />
              <Text
                text={article?.type?.join(', ')}
                fontStyle="italic-fs"
                className={s.topics}
              />
            </div>
            <div className={s.image}>
              <AppImage
                src={article?.image}
                alt={article?.title}
                height={400}
                width={400}
                fallback={<Skeleton width="100%" height={400} />}
              />
            </div>
            <div className={s.paragraphs}>
              {textBlocks?.map((block, index) => (
                <div key={index}>{block?.paragraphs}</div>
              ))}
            </div>
            <div className={s.bottom}>
              <Button theme="bordered" onClick={onClickCard}>
                {t('Read more')}
              </Button>
              <span className={s.views}>
                <span>{article.views}</span>
                <Icon Svg={EyeIcon} />
              </span>
            </div>
          </Card>
        }
        off={
          <CardDeprecated
            className={cls(s.ArticlesListItem, {}, [
              className,
              s[viewClassName],
            ])}
            testId="ArticlesListItem"
          >
            <div className={s.titleWrapper}>
              <div className={s.userWrapper}>
                <div className={s.userInfo}>
                  <AvatarDeprecated
                    src={article.user?.avatar}
                    size={30}
                    alt={article.user?.username}
                  />
                  <span>{article.user?.username}</span>
                </div>
                <div className={s.created}>{article?.created}</div>
              </div>
              <TextDeprecated
                title={article?.title}
                size="text_size_l"
                className={s.title}
              />
              <TextDeprecated
                text={article?.type?.join(', ')}
                fontStyle="italic-fs"
                className={s.topics}
              />
            </div>
            <div className={s.image}>
              <AppImage
                src={article?.image}
                alt={article?.title}
                height={400}
                width={400}
                fallback={<SkeletonDeprecated width="100%" height={400} />}
              />
            </div>
            <div className={s.paragraphs}>
              {textBlocks?.map((block, index) => (
                <div key={index}>{block?.paragraphs}</div>
              ))}
            </div>
            <div className={s.bottom}>
              <ButtonDeprecated theme="bordered" onClick={onClickCard}>
                {t('Read more')}
              </ButtonDeprecated>
              <span className={s.views}>
                <span>{article.views}</span>
                <IconDeprecated Svg={EyeIcon} />
              </span>
            </div>
          </CardDeprecated>
        }
      />
    )
  }

  viewClassName = listView || ListView.SMALL

  return (
    <ToggleFeature
      feature="isV2"
      on={
        <Card
          className={cls(s.ArticlesListItem, {}, [className, s[viewClassName]])}
          onClick={onClickCard}
          testId="ArticlesListItem"
        >
          <div className={s.created}>{article.created}</div>
          <div className={s.image}>
            <AppImage
              src={article.image}
              alt={article.title}
              fallback={<Skeleton width="100%" height={200} />}
            />
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
      }
      off={
        <CardDeprecated
          className={cls(s.ArticlesListItem, {}, [className, s[viewClassName]])}
          onClick={onClickCard}
          testId="ArticlesListItem"
        >
          <div className={s.created}>{article.created}</div>
          <div className={s.image}>
            <AppImage
              src={article.image}
              alt={article.title}
              fallback={<Skeleton width="100%" height={200} />}
            />
          </div>
          <div className={s.details}>
            <span>{article.type?.join(', ')}</span>
            <span className={s.views}>
              <span>{article.views}</span>
              <IconDeprecated Svg={EyeIcon} />
            </span>
          </div>
          <div className={s.title}>{article.title}</div>
        </CardDeprecated>
      }
    />
  )
})
