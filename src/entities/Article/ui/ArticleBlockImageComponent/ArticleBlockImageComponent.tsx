import {memo} from 'react'
import {cls} from '@/shared/lib/cls/cls'
import {Text} from '@/shared/ui/Text'
import {type ArticleImageBlock} from '../../model/types/article'
import * as s from './ArticleBlockImageComponent.module.scss'

interface ArticleBlockImageComponentProps {
  className?: string
  block: ArticleImageBlock
}

export const ArticleBlockImageComponent = memo((props: ArticleBlockImageComponentProps) => {
  const {className, block} = props

  return (
    <div className={cls(s.ArticleBlockImageComponent, {}, [className])}>
      <img src={block.src} alt={block.title} />
      <Text text={block.title} />
    </div>
  )
})
