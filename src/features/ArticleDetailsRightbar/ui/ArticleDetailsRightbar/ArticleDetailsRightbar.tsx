import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { cls } from '@/shared/lib/cls/cls'
import * as s from './ArticleDetailsRightbar.module.scss'
import { Card } from '@/shared/ui/V2/Card'
import { getArticleDetailsData } from '@/entities/Article'
import { Avatar } from '@/shared/ui/V2/Avatar'
import { HStack, getVStack } from '@/shared/ui/stationary/Stack'
import { Text } from '@/shared/ui/V2/Text'
import { Icon } from '@/shared/ui/V2/Icon'
import EyeIcon from '@/shared/assets/icons/eye2.svg'
import CalendarIcon from '@/shared/assets/icons/calendar.svg'
import { AppLink } from '@/shared/ui/V2/AppLink'
import { getRouteArticleEdit } from '@/shared/const/routers'
import { getUserAuthData } from '@/entities/User'

interface ArticleDetailsRightbarProps {
  className?: string
  articleId: string
}

export const ArticleDetailsRightbar = (props: ArticleDetailsRightbarProps) => {
  const { className, articleId } = props
  const { t } = useTranslation()
  const articleDetails = useSelector(getArticleDetailsData)
  const userId = useSelector(getUserAuthData)?.id
  if (!articleDetails) {
    return null
  }

  const isEditable = userId === articleDetails.userId

  return (
    <Card
      padding="20"
      className={cls(s.ArticleDetailsRightbar, {}, [
        className,
        ...getVStack({ gap: '8' }),
      ])}
    >
      <HStack gap="12">
        <Avatar src={articleDetails?.user?.avatar} alt="avatar" size={30} />
        <Text text={articleDetails?.user?.username} />
      </HStack>
      <HStack gap="8" align="center">
        <Icon Svg={EyeIcon} />
        <Text text={t('{{count}} views', { count: articleDetails?.views })} />
      </HStack>
      <HStack gap="8" align="center">
        <Icon Svg={CalendarIcon} />
        <Text text={articleDetails?.created} />
      </HStack>
      {isEditable && (
        <AppLink to={getRouteArticleEdit(articleId)} theme="contentBorder">
          {t('Edit')}
        </AppLink>
      )}
    </Card>
  )
}
