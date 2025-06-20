import { memo, useCallback, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { HStack, VStack } from '@/shared/ui/stationary/Stack'
import { cls } from '@/shared/lib/cls/cls'
import {
  OrderByDeprecated,
  SearchByNameDeprecated,
  SortByDeprecated,
  TabsDeprecated,
  TopicType,
  TabOptionDeprecated,
  OrderBy,
  Tabs,
  SortBy,
  SearchByName,
} from '@/entities/Filters'
import { ChangeListView } from '@/features/ChangeListView'
import { useDebounce } from '@/shared/hooks/useDebounce'
import { useAppDispatch } from '@/shared/hooks/useAppDispatch'
import { fetchArticlesList } from '../../module/services/fetchArticlesList/fetchArticlesList'
import { articlesPageActions } from '../../module/slice/articlesPageSlice'
import * as s from './ArticlesPageFilters.module.scss'
import { AppRouteNames } from '@/shared/const/routers'
import { ToggleFeature } from '@/shared/lib/features/ToggleFeature/ToggleFeature'
import { Card } from '@/shared/ui/V2/Card'
import { Text } from '@/shared/ui/V2/Text'

export const ArticlesPageFilters = memo(() => {
  const dispatch = useAppDispatch()
  const { t } = useTranslation()
  const fetchFilteredArticlesList = useCallback(() => {
    dispatch(articlesPageActions.setPageNumber(1))
    dispatch(fetchArticlesList({ replace: true }))
  }, [dispatch])

  const debouncedFilteredArticlesList = useDebounce(
    fetchFilteredArticlesList,
    500,
  )

  const articleOptions: TabOptionDeprecated<TopicType>[] = useMemo(
    () => [
      { value: 'ALL', content: t('All articles') },
      { value: 'IT', content: t('IT') },
      { value: 'ECONOMICS', content: t('Economics') },
      { value: 'SCIENCE', content: t('Science') },
    ],
    [t],
  )

  return (
    <ToggleFeature
      feature="isV2"
      on={
        <Card className={cls(s.ArticlesFiltersV2, {})} padding="20">
          <VStack gap="32">
            <SearchByName
              fetchData={debouncedFilteredArticlesList}
              className={s.searchArticlesInput}
            />
            <Tabs
              fetchData={fetchFilteredArticlesList}
              page={AppRouteNames.ARTICLES}
              options={articleOptions}
            />
            <VStack gap="10">
              <Text title={t('Sort by:')} size="text_size_m" />
              <OrderBy fetchData={debouncedFilteredArticlesList} />
              <SortBy fetchData={debouncedFilteredArticlesList} />
            </VStack>
          </VStack>
        </Card>
      }
      off={
        <div className={cls(s.ArticlesFilters, {})}>
          <HStack justify="between" className={s.controllers}>
            <div className={s.sortWrapper}>
              <OrderByDeprecated fetchData={debouncedFilteredArticlesList} />
              <SortByDeprecated fetchData={debouncedFilteredArticlesList} />
            </div>
            <ChangeListView />
          </HStack>
          <SearchByNameDeprecated
            fetchData={debouncedFilteredArticlesList}
            className={s.searchArticlesInput}
          />
          <TabsDeprecated
            fetchData={fetchFilteredArticlesList}
            page={AppRouteNames.ARTICLES}
            options={articleOptions}
          />
        </div>
      }
    />
  )
})
