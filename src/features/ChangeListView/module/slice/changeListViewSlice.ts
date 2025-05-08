import {createSlice, type PayloadAction} from '@reduxjs/toolkit'
import {LIST_VIEW} from '@/shared/const/localStorage'
import {ListView} from '../consts/consts'
import {type ListViewSchema} from '../types/ListViewSchema'

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
