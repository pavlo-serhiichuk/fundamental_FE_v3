import {type FC} from 'react'
import {cls} from '@/shared/lib/cls/cls'
import {Code} from '@/shared/ui/Code/Code'
import {type ArticleCodeBlock} from '../../model/types/article'
import * as s from './ArticleBlockCodeComponent.module.scss'

interface ArticleBlockCodeComponentProps {
  className?: string
  block: ArticleCodeBlock
}

export const ArticleBlockCodeComponent: FC<ArticleBlockCodeComponentProps> = (props) => {
  const {className, block} = props

  return (
    <div className={cls(s.ArticleBlockCodeComponent, {}, [className])}>
      <Code text={block.code} />
    </div>
  )
}
