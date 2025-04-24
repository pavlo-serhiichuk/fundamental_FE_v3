import 'app/styles/index.scss'
import {Suspense} from 'react'
import {BrowserRouter} from 'react-router-dom'
import {I18nextProvider} from 'react-i18next'
import {Theme, ThemeProvider} from 'app/providers/ThemeProvider'
import i18nForTests from 'shared/config/i18n/i18nForTests'
import {StateSchema, StoreProvider} from 'app/providers/StoreProvider'
import {signInReducer} from 'features/SignIn'
import {profileReducer} from 'entities/Profile'
import {ReducersList} from 'shared/lib/components/DynamicReducerLoader/DynamicReducerLoader'
import {articleDetailsReducer} from 'pages/ArticleDetailsPage'
import {articlesPageReducer} from 'pages/ArticlesPage/module/slice/articlesPageSlice'
import {changeListViewReducer} from 'features/ChangeListView/module/slice/changeListViewSlice'
import {filtersReducer} from 'features/Filters'

export const TranslationDecorator = (Story: any) => (
  // This catches the suspense from components not yet ready (still loading translations)
  // Alternative: set useSuspense to false on i18next.options.react when initializing i18next
  <Suspense fallback={<div>...</div>}>
    <I18nextProvider i18n={i18nForTests}>
      <Story />
    </I18nextProvider>
  </Suspense>
)

export const ThemeDecorator = (theme: Theme) => (Story: any) => (
  <ThemeProvider initialTheme={theme}>
    <div className={`app ${theme}`}>
      <Story />
    </div>
  </ThemeProvider>
)

export const RouterDecorator = (Story: any) => (
  <BrowserRouter>
    <Suspense fallback="...">
      <Story />
    </Suspense>
  </BrowserRouter>
)

const defaultAsyncReducers: ReducersList = {
  signIn: signInReducer,
  profile: profileReducer,
  articleDetails: articleDetailsReducer,
  articlesPage: articlesPageReducer,
  listView: changeListViewReducer,
  filters: filtersReducer,
}

export const StoreDecorator = (
  initialState: DeepPartial<StateSchema>,
  asyncReducers?: ReducersList,
) => (Story: any) => (
  <StoreProvider
    initialState={initialState}
    asyncReducers={{...defaultAsyncReducers, ...asyncReducers}}
  >
    <Story />
  </StoreProvider>
)

export const PageContentDecorator = (Story: any) => (
  <div className="page-content">
    <Story />
  </div>
)
