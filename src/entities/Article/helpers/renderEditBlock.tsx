import { ReactElement } from 'react'
import type { ArticleBlock } from '../module/types/article'
import { ArticleBlockType } from '../module/consts/consts'
import { ArticleEditTextComponent } from '../ui/ArticleEditTextComponent/ArticleEditTextComponent'
import { ArticleEditCodeComponent } from '../ui/ArticleEditCodeComponent/ArticleEditCodeComponent'
import { ArticleEditImageComponent } from '../ui/ArticleEditImageComponent/ArticleEditImageComponent'
import { AddArticleEditBlock } from '../ui/AddArticleEditBlock/AddArticleEditBlock'

export const renderEditBlocks =
  (isCreate: boolean) => (block: ArticleBlock, index: number) => {
    let result: ReactElement = <div />
    switch (block.type) {
      case ArticleBlockType.TEXT:
        result = <ArticleEditTextComponent block={block} isCreate={isCreate} />
        break
      case ArticleBlockType.CODE:
        result = <ArticleEditCodeComponent block={block} isCreate={isCreate} />
        break
      case ArticleBlockType.IMAGE:
        result = <ArticleEditImageComponent block={block} isCreate={isCreate} />
        break
      default:
        return null
    }
    return (
      <div key={block.id}>
        <AddArticleEditBlock blockIndex={index} />
        {result}
      </div>
    )
  }
