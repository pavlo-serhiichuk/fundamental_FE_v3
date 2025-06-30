import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {
  Article,
  ArticleBlock,
  ArticleCodeBlock,
  ArticleImageBlock,
  ArticleTextBlock,
} from '../types/article'
import { ArticleBlockType } from '../consts/consts'
import { ArticleCreateSchema } from '../types/ArticleCreateSchema'
import { newArticle } from './_articleState'
import { createNewArticle } from '../services/createNewArticle/createNewArticle'

const initialState: ArticleCreateSchema = {
  newArticle,
}

interface BlockParagraphAction {
  blockId?: string
  paragraphId?: number
  paragraphValue?: string
}

interface BlockTitleAction {
  blockId?: string
  title?: string
}

interface NewArticleBlock {
  blockType: ArticleBlockType
  blockIndex: number
  isLastBlock: boolean
}

const findBlock = (blockId: string, blocks: ArticleBlock[]) =>
  blocks?.find((b) => b.id === blockId)

export const createArticleSlice = createSlice({
  name: 'createArticleSlice',
  initialState,
  reducers: {
    changeTextBlockParagraph: (
      state,
      action: PayloadAction<BlockParagraphAction>,
    ) => {
      const { blockId, paragraphId, paragraphValue } = action.payload
      if (!blockId || paragraphId === undefined) return
      const block: ArticleTextBlock | undefined =
        state.newArticle?.blocks?.find(
          (b) => b.id === blockId,
        ) as ArticleTextBlock
      if (block) {
        if (block?.paragraphs.length && paragraphValue != null) {
          block.paragraphs[paragraphId] = paragraphValue
        }
      }
    },
    editArticleTitle: (state, action: PayloadAction<string>) => {
      state.newArticle.title = action.payload
    },
    editArticleImage: (state, action: PayloadAction<string>) => {
      state.newArticle.image = action.payload
    },
    addBlock: (state, action: PayloadAction<NewArticleBlock>) => {
      const { blockIndex, blockType, isLastBlock } = action.payload
      let block: ArticleBlock
      switch (blockType) {
        case ArticleBlockType.TEXT:
          block = {
            title: '',
            paragraphs: [''],
            id: Math.random().toString(),
            type: ArticleBlockType.TEXT,
          } as ArticleTextBlock
          break
        case ArticleBlockType.CODE:
          block = {
            id: Math.random().toString(),
            type: ArticleBlockType.CODE,
            code: '',
          } as ArticleCodeBlock
          break
        case ArticleBlockType.IMAGE:
          block = {
            id: Math.random().toString(),
            type: ArticleBlockType.IMAGE,
            title: '',
            src: '',
          } as ArticleImageBlock
          break
      }

      if (isLastBlock) {
        state.newArticle?.blocks?.push(block)
      } else {
        state.newArticle?.blocks?.splice(Number(blockIndex), 0, block)
      }
    },
    deleteBlock: (state, action: PayloadAction<string>) => {
      if (state.newArticle?.blocks?.length) {
        const blockIndex = state.newArticle.blocks.findIndex(
          (b) => b.id === action.payload,
        )
        state.newArticle?.blocks.splice(blockIndex, 1)
      }
    },
    addParagraph: (
      state,
      action: PayloadAction<{ blockId: string; blockType: ArticleBlockType }>,
    ) => {
      const { blockId, blockType } = action.payload
      if (state.newArticle?.blocks?.length) {
        const block: ArticleTextBlock | undefined =
          state.newArticle?.blocks?.find(
            (b) => b.id === blockId,
          ) as ArticleTextBlock
        if (block) {
          block.paragraphs.push('')
        }
      }
    },
    changeTextBlockTitle: (state, action: PayloadAction<BlockTitleAction>) => {
      const { blockId, title } = action.payload
      if (!blockId || title === undefined) return

      const block: ArticleTextBlock | undefined =
        state.newArticle?.blocks?.find(
          (b) => b.id === blockId,
        ) as ArticleTextBlock
      if (block) {
        block.title = title // immer lets you mutate directly
      }
    },
    editImageSource: (
      state,
      action: PayloadAction<{ blockId: string; src?: string; title?: string }>,
    ) => {
      const { blockId, src, title } = action.payload
      if (state.newArticle?.blocks?.length) {
        const block = state.newArticle?.blocks?.find(
          (b) => b.id === blockId,
        ) as ArticleImageBlock
        if (block && src !== undefined) {
          block.src = src
        }

        if (block && title !== undefined) {
          block.title = title
        }
      }
    },
    setCode: (
      state,
      action: PayloadAction<{ blockId: string; code: string }>,
    ) => {
      const { blockId, code } = action.payload
      if (state.newArticle?.blocks?.length) {
        const block = findBlock(
          blockId,
          state.newArticle.blocks,
        ) as ArticleCodeBlock
        if (block) {
          block.code = code
        }
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createNewArticle.pending, (state) => {
        state.error = undefined
        state.isLoading = true
      })
      .addCase(
        createNewArticle.fulfilled,
        (state, action: PayloadAction<Article>) => {
          state.isLoading = false
          state.newArticle = action.payload
          state.newArticle = action.payload
        },
      )
      .addCase(createNewArticle.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
  },
})

export const { actions: createArticleActions, reducer: createArticleReducer } =
  createArticleSlice
