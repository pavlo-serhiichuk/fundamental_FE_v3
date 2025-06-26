import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ArticleCreatePageSchema } from '../types/ArticleCreatePageSchema';

const initialState: ArticleCreatePageSchema = {
    
};

export const ArticleCreatePageSlice = createSlice({
    name: 'ArticleCreatePage',
    initialState,
    reducers: {
        template: (state, action: PayloadAction<string>) => {
           
        },
    },
    // extraReducers: (builder) => {
    //     builder
    //         .addCase(, (state) => {
    //             state.error = undefined;
    //             state.isLoading = true;
    //         })
    //         .addCase(, (state) => {
    //             state.isLoading = false;
    //         })
    //         .addCase(, (state, action) => {
    //             state.isLoading = false;
    //             state.error = action.payload;
    //         });
    // },
});

export const { actions: ArticleCreatePageActions } = ArticleCreatePageSlice;
export const { reducer: ArticleCreatePageReducer } = ArticleCreatePageSlice;