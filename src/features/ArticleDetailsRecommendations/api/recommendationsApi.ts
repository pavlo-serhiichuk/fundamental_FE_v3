import {rtkApi} from 'shared/api/rtkApi'

const recommendationsApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    fetchArticleDetailsRecommendationsList: build.query({
      query: (limit) => ({
        url: '/articles',
        params: {
          _limit: limit,
        },
      }),
    }),
  }),
})
export const useFetchArticleDetailsRecommendationsList = recommendationsApi.useFetchArticleDetailsRecommendationsListQuery
