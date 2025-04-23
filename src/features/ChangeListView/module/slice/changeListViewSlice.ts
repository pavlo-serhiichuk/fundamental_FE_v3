import {createSlice, type PayloadAction} from '@reduxjs/toolkit'
import {ListView, ListViewSchema} from 'features/ChangeListView/module/types/ListViewSchema'
import {LIST_VIEW} from 'shared/const/localStorage'

const initialState: ListViewSchema = {listView: ListView.SMALL}

export const changeListViewSlice = createSlice({
  name: 'articlesSlice',
  initialState,
  reducers: {
    setListView: (state: ListViewSchema, action: PayloadAction<ListView>) => {
      state.listView = action.payload
      localStorage.setItem(LIST_VIEW, JSON.stringify(action.payload))
    },
    initListView: (state: ListViewSchema) => {
      state.listView = JSON.parse(localStorage.getItem(LIST_VIEW) as ListView)
    },
  },
})

export const {
  reducer: changeListViewReducer,
  actions: changeListViewActions,
} = changeListViewSlice
