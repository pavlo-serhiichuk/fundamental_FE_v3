import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ArticleEditPageSchema } from '../types/ArticleEditPageSchema'
import { fetchArticleById, Article } from '@/entities/Article'

const initialState: ArticleEditPageSchema = {}

interface BlockParagraphAction {
  blockId?: string
  paragraphId?: string
  paragraphValue?: string
  title?: string
}

export const articleEditPageSlice = createSlice({
  name: 'ArticleEditPage',
  initialState,
  reducers: {
    changeBlockParagraph: (
      state,
      action: PayloadAction<BlockParagraphAction>,
    ) => {
      const { blockId, paragraphId, paragraphValue } = action.payload
      if (state?.editData?.blocks?.length) {
        console.log(action.payload)
        // if (state.editData.blocks[blockId]?.[paragraphId]) {
        //   state.editData.blocks[blockId]?.[paragraphId] = paragraphValue
        // }
      }
      // switch (true) {
      //   case state?.editData.blocks.findIndex(curblockId => curblockId === blockId) !== -1:
      //
      // }
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

export const {
  actions: articleEditPageActions,
  reducer: articleEditPageReducer,
} = articleEditPageSlice
