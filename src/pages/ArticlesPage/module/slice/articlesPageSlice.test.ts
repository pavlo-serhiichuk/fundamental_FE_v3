import {ArticlesPageSchema} from 'pages/ArticlesPage/module/types/ArticlesPageSchema'
import {ArticlesView} from 'pages/ArticlesPage/module/types/articlesPageTypes'
import {articlesPageActions, articlesPageReducer} from 'pages/ArticlesPage/module/slice/articlesPageSlice'

describe('articlesPageSlice', () => {
  test('setArticlesView', () => {
    const state = {articlesView: ArticlesView.SMALL}

    expect(
      articlesPageReducer(
        state as ArticlesPageSchema,
        articlesPageActions.setArticlesView(ArticlesView.BIG),
      ),
    ).toEqual({articlesView: ArticlesView.BIG})
  })
})
