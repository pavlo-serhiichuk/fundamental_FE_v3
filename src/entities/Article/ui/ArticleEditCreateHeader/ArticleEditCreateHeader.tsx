import { useTranslation } from 'react-i18next'
import { getHStackString, getVStackString } from '@/shared/ui/stationary/Stack'
import { Avatar } from '@/shared/ui/V2/Avatar'
import { Input } from '@/shared/ui/V2/Input'
import { Card } from '@/shared/ui/V2/Card'
import { Article } from '../../module/types/article'

interface ArticleEditCreateHeaderProps {
  data?: Article
  onChangeArticleImage?: (value: string) => void
  onChangeTitle?: (value: string) => void
}

export const ArticleEditCreateHeader = (
  props: ArticleEditCreateHeaderProps,
) => {
  const { data, onChangeArticleImage, onChangeTitle } = props
  const { t } = useTranslation()
  return (
    <Card
      bgType="secondary"
      padding="20"
      className={getVStackString({ gap: '16' })}
    >
      <Avatar
        src={data?.image || ''}
        size={200}
        alt="avatar"
        className={getHStackString({ justify: 'center' })}
      />
      <Input
        value={data?.image}
        onChange={onChangeArticleImage}
        label="Article image"
      />
      <Input
        value={data?.title}
        onChange={onChangeTitle}
        label="Article title"
      />
    </Card>
  )
}
