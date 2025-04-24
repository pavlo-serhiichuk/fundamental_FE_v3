import {memo, useCallback, useMemo} from 'react'
import {cls} from 'shared/lib/cls/cls'
import {useTranslation} from 'react-i18next'
import {useSelector} from 'react-redux'
import {getFiltersSortBy} from 'features/Filters/module/selectors/getFiltersState'
import {Select, SelectOption} from 'shared/ui/Select/Select'
import {useAppDispatch} from 'shared/hooks/useAppDispatch'
import {filtersActions} from 'features/Filters'
import {SortByParams} from '../../module/types/FiltersSchema'
import * as s from './SortBy.module.scss'

interface SortByParamProps {
  className?: string
}

export const SortBy = memo((props: SortByParamProps) => {
  const {className} = props
  const {t} = useTranslation()
  const sortField = useSelector(getFiltersSortBy)
  const dispatch = useAppDispatch()
  const options = useMemo<SelectOption<SortByParams>[]>(() => ([
    {
      value: SortByParams.NAME,
      content: t('name'),
    },
    {
      value: SortByParams.VIEWS,
      content: t('views'),
    },
    {
      value: SortByParams.DATE,
      content: t('date'),
    },
  ]), [])

  const onChange = useCallback((value: SortByParams) => {
    dispatch(filtersActions.setSortField(value))
  }, [dispatch, sortField])

  return (
    <div className={cls(s.SortByParam, {}, [className])}>
      <Select selectName={t('Sort by')} options={options} value={sortField} onChange={onChange} />
    </div>
  )
})
