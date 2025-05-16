import '@/app/styles/index.scss'
import {Suspense} from 'react'
import {BrowserRouter} from 'react-router-dom'
import {I18nextProvider} from 'react-i18next'
import {ThemeProvider} from '@/app/providers/ThemeProvider'
import {StateSchema, StoreProvider} from '@/app/providers/StoreProvider'
import {signInReducer} from '@/features/SignIn'
import {profileReducer} from '@/entities/Profile'
import {articlesPageReducer} from '@/pages/ArticlesPage'
import {changeListViewReducer} from '@/features/ChangeListView'
import {filtersReducer} from '@/entities/Filters'
import {articleDetailsPageSlice} from '@/pages/ArticleDetailsPage'
import {Theme} from '@/shared/types/theme'
import i18nForTests from '../../../config/i18n/i18nForTests'
import {ReducersList} from '../../../lib/components/DynamicReducerLoader/DynamicReducerLoader'

export const TranslationDecorator = (Story: any) => (
  // This catches the suspense from components not yet ready (still loading translations)
  // Alternative: set useSuspense to false on i18next.options.react when initializing i18next
  <Suspense fallback={<div>...</div>}>
    <I18nextProvider i18n={i18nForTests}>
      <Story />
    </I18nextProvider>
  </Suspense>
)

export const ThemeDecorator = (theme: Theme) => (StoryComponent: any) => (
  <ThemeProvider initialTheme={theme}>
    <div className={`app ${theme}`}>
      <StoryComponent />
    </div>
  </ThemeProvider>
)

export const RouterDecorator = (StoryComponent: any) => (
  <BrowserRouter>
    <Suspense fallback="...">
      <StoryComponent />
    </Suspense>
  </BrowserRouter>
)

const defaultAsyncReducers: ReducersList = {
  signIn: signInReducer,
  profile: profileReducer,
  articleDetailsPage: articleDetailsPageSlice,
  articlesPage: articlesPageReducer,
  listView: changeListViewReducer,
  filters: filtersReducer,
}

export const StoreDecorator = (
  initialState: DeepPartial<StateSchema>,
  asyncReducers?: ReducersList,
) => (StoryComponent: any) => (
  <StoreProvider
    initialState={initialState}
    asyncReducers={{...defaultAsyncReducers, ...asyncReducers}}
  >
    <StoryComponent />
  </StoreProvider>
)

export const PageContentDecorator = (StoryComponent: any) => (
  <div className="page-content">
    <StoryComponent />
  </div>
)
