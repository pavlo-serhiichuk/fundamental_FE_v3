import {memo} from 'react'
import {cls} from '@/shared/lib/cls/cls'
import {Text} from '@/shared/ui/Text/Text'
import * as s from './ArticleBlockTextComponent.module.scss'
import {type ArticleTextBlock} from '../../model/types/article'

interface ArticleBlockTextComponentProps {
  className?: string
  block: ArticleTextBlock
}

export const ArticleBlockTextComponent = memo((props: ArticleBlockTextComponentProps) => {
  const {className, block} = props

  return (
    <div className={cls(s.ArticleBlockTextComponent, {}, [className])}>
      {block?.title && <Text title={block.title} />}
      {block.paragraphs.map((paragraph) => <Text key={paragraph} text={paragraph} size="text_size_m" className={s.paragraph} />)}
    </div>
  )
})
