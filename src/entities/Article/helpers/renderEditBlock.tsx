import { ReactElement } from 'react'
import type { ArticleBlock } from '../module/types/article'
import { ArticleBlockType } from '../module/consts/consts'
import { ArticleEditTextComponent } from '../ui/ArticleEditTextComponent/ArticleEditTextComponent'
import { ArticleEditCodeComponent } from '../ui/ArticleEditCodeComponent/ArticleEditCodeComponent'
import { ArticleEditImageComponent } from '../ui/ArticleEditImageComponent/ArticleEditImageComponent'
import { AddArticleEditBlock } from '../ui/AddArticleEditBlock/AddArticleEditBlock'

export const renderEditBlocks = (block: ArticleBlock) => {
  let result: ReactElement = <></>
  switch (block.type) {
    case ArticleBlockType.TEXT:
      result = <ArticleEditTextComponent block={block} />
      break
    case ArticleBlockType.CODE:
      result = <ArticleEditCodeComponent block={block} />
      break
    case ArticleBlockType.IMAGE:
      result = <ArticleEditImageComponent block={block} />
      break
    default:
      return null
  }
  return (
    <div key={block.id}>
      <AddArticleEditBlock blockId={block.id} />
      {result}
    </div>
  )
}
