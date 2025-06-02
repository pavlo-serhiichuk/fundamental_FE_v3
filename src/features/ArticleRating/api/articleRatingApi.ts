import {rtkApi} from '@/shared/api/rtkApi'
import {ArticleRating, RatingInfo} from '@/entities/Rating'

const articleRatingApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    fetchArticleRating: build.query<ArticleRating[], { articleId: string | undefined, userId: string }>({
      query: ({articleId, userId}) => ({
        url: '/articles-ratings',
        params: {
          articleId,
          userId,
        },
      }),
    }),
    rateArticle: build.mutation<void, RatingInfo>({
      query: (body) => ({
        url: '/articles-ratings',
        method: 'POST',
        body,
      }),
    }),
  }),
})
export const useFetchArticleRating = articleRatingApi.useFetchArticleRatingQuery
export const useRateArticle = articleRatingApi.useRateArticleMutation
