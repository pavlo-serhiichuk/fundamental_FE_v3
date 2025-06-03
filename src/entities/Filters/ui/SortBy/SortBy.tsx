import { memo, useCallback, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { cls } from '@/shared/lib/cls/cls'
import { Select, SelectOption } from '@/shared/ui/Select'
import { useAppDispatch } from '@/shared/hooks/useAppDispatch'
import { filtersActions } from '../../module/slice/filtersSlice'
import { getFiltersSortBy } from '../../module/selectors/getFiltersState'
import { SortByType } from '../../module/consts/consts'
import * as s from './SortBy.module.scss'

interface SortByParamProps {
  className?: string
  fetchData?: () => void
}

export const SortBy = memo((props: SortByParamProps) => {
  const { className, fetchData } = props
  const { t } = useTranslation()
  const sortField = useSelector(getFiltersSortBy)
  const dispatch = useAppDispatch()
  const options = useMemo<SelectOption<SortByType>[]>(
    () => [
      {
        value: SortByType.NAME,
        content: t('name'),
      },
      {
        value: SortByType.VIEWS,
        content: t('views'),
      },
      {
        value: SortByType.DATE,
        content: t('date'),
      },
    ],
    [t],
  )

  const onChange = useCallback(
    (value: SortByType) => {
      dispatch(filtersActions.setSortBy(value))
      fetchData?.()
    },
    [dispatch, fetchData],
  )

  return (
    <div className={cls(s.SortByParam, {}, [className])}>
      <Select
        selectName={t('Sort by')}
        options={options}
        value={sortField}
        onChange={onChange}
      />
    </div>
  )
})
