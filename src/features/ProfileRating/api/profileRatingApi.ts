import {rtkApi} from '@/shared/api/rtkApi'
import {ProfileRating, RatingInfo} from '@/entities/Rating'

const profileRatingApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    fetchProfileRating: build.query<ProfileRating[], { profileId: string, userId: string }>({
      query: ({profileId, userId}) => ({
        url: '/profiles-ratings',
        params: {
          profileId,
          userId,
        },
      }),
    }),
    rateProfile: build.mutation<void, RatingInfo>({
      query: (body) => ({
        url: '/profiles-ratings',
        method: 'POST',
        body,
      }),
    }),
  }),
})
export const useFetchProfileRating = profileRatingApi.useFetchProfileRatingQuery
export const useRateProfile = profileRatingApi.useRateProfileMutation
