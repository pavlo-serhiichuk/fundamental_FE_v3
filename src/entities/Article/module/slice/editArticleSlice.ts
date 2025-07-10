import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { fetchArticleById } from '../services/fetchArticleById/fetchArticleById'
import {
  Article,
  ArticleBlock,
  ArticleCodeBlock,
  ArticleImageBlock,
  ArticleTextBlock,
} from '../types/article'
import { ArticleBlockType } from '../consts/consts'
import { ArticleEditSchema } from '../types/ArticleEditSchema'

const initialState: ArticleEditSchema = {}

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

export const editArticleSlice = createSlice({
  name: 'editArticleSlice',
  initialState,
  reducers: {
    changeTextBlockParagraph: (
      state,
      action: PayloadAction<BlockParagraphAction>,
    ) => {
      const { blockId, paragraphId, paragraphValue } = action.payload
      if (!blockId || paragraphId === undefined) return
      const block: ArticleTextBlock | undefined = state.editData?.blocks?.find(
        (b) => b.id === blockId,
      ) as ArticleTextBlock
      if (block) {
        if (block?.paragraphs.length && paragraphValue != null) {
          block.paragraphs[paragraphId] = paragraphValue
        }
      }
    },
    editArticleTitle: (state, action: PayloadAction<string>) => {
      if (state?.editData?.title) {
        state.editData.title = action.payload
      }
    },
    editArticleImage: (state, action: PayloadAction<string>) => {
      if (state?.editData?.image) {
        state.editData.image = action.payload
      }
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
        default:
          block = {} as ArticleTextBlock
      }
      if (isLastBlock) {
        state.editData?.blocks?.push(block)
      } else {
        state.editData?.blocks?.splice(Number(blockIndex), 0, block)
      }
    },
    deleteBlock: (state, action: PayloadAction<string>) => {
      if (state.editData?.blocks?.length) {
        const blockIndex = state.editData.blocks.findIndex(
          (b) => b.id === action.payload,
        )
        state.editData?.blocks.splice(blockIndex, 1)
      }
    },
    addParagraph: (
      state,
      action: PayloadAction<{ blockId: string; blockType: ArticleBlockType }>,
    ) => {
      const { blockId, blockType } = action.payload
      if (state.editData?.blocks?.length) {
        const block: ArticleTextBlock | undefined =
          state.editData?.blocks?.find(
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

      const block: ArticleTextBlock | undefined = state.editData?.blocks?.find(
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
      if (state.editData?.blocks?.length) {
        const block = state.editData?.blocks?.find(
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
      if (state.editData?.blocks?.length) {
        const block = findBlock(
          blockId,
          state.editData.blocks,
        ) as ArticleCodeBlock
        if (block) {
          block.code = code
        }
      }
    },
    resetArticle: (state) => {
      if (state.editData && state.data) {
        state.editData = state.data
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticleById.pending, (state) => {
        state.error = undefined
        state.isLoading = true
      })
      .addCase(
        fetchArticleById.fulfilled,
        (state, action: PayloadAction<Article>) => {
          state.isLoading = false
          state.data = action.payload
          state.editData = action.payload
        },
      )
      .addCase(fetchArticleById.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
  },
})

export const { actions: editArticleActions, reducer: editArticleReducer } =
  editArticleSlice
