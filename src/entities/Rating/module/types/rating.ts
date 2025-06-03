export interface RatingBase {
  id?: number
  rate: number
  userId: string
  feedback?: string
}

export interface ProfileRating extends RatingBase {
  profileId: string
}

export interface ArticleRating extends RatingBase {
  articleId: string
}

export type RatingInfo = ProfileRating | ArticleRating
