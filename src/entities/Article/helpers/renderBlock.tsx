import type { ArticleBlock } from '../module/types/article'
import { ArticleBlockType } from '../module/consts/consts'
import { ArticleBlockCodeComponent } from '../ui/ArticleBlockCodeComponent/ArticleBlockCodeComponent'
import { ArticleBlockTextComponent } from '../ui/ArticleBlockTextComponent/ArticleBlockTextComponent'
import { ArticleBlockImageComponent } from '../ui/ArticleBlockImageComponent/ArticleBlockImageComponent'

export const renderBlocks = (block: ArticleBlock) => {
  switch (block.type) {
    case ArticleBlockType.TEXT:
      return <ArticleBlockTextComponent block={block} key={block.id} />
    case ArticleBlockType.CODE:
      return <ArticleBlockCodeComponent block={block} key={block.id} />
    case ArticleBlockType.IMAGE:
      return <ArticleBlockImageComponent block={block} key={block.id} />
    default:
      return null
  }
}
