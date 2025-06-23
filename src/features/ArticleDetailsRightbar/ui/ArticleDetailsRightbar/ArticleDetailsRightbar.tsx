import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { cls } from '@/shared/lib/cls/cls'
import * as s from './ArticleDetailsRightbar.module.scss'
import { Card } from '@/shared/ui/V2/Card'
import { getArticleDetailsData } from '@/features/ArticleDetails'
import { Avatar } from '@/shared/ui/V2/Avatar'
import { HStack } from '@/shared/ui/stationary/Stack'
import { Text } from '@/shared/ui/V2/Text'
import { Icon } from '@/shared/ui/V2/Icon'
import EyeIcon from '@/shared/assets/icons/eye.svg'
import CalendarIcon from '@/shared/assets/icons/calendar.svg'

interface ArticleDetailsRightbarProps {
  className?: string
}

export const ArticleDetailsRightbar = (props: ArticleDetailsRightbarProps) => {
  const { className } = props
  const { t } = useTranslation()
  const articleDetails = useSelector(getArticleDetailsData)
  if (!articleDetails) {
    return null
  }

  return (
    <Card
      padding="20"
      className={cls(s.ArticleDetailsRightbar, {}, [className])}
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
    </Card>
  )
}
