import {ListViewSchema} from 'features/ChangeListView/module/types/ListViewSchema'
import {StateSchema} from 'app/providers/StoreProvider'

export const getListView = (state: StateSchema) => state.listView.listView
