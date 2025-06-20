import { memo, useCallback, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { SelectOption } from '@/shared/ui/deprecated/Select'
import { useAppDispatch } from '@/shared/hooks/useAppDispatch'
import { getFiltersOrder } from '../../module/selectors/getFiltersState'
import { filtersActions } from '../../module/slice/filtersSlice'
import { type OrderByType } from '../../module/types/FiltersSchema'
import { ListBox } from '@/shared/ui/V2/Popups'

interface SortByOrderProps {
  className?: string
  fetchData?: () => void
}

export const OrderBy = memo((props: SortByOrderProps) => {
  const { className, fetchData } = props
  const { t } = useTranslation()
  const orderBy = useSelector(getFiltersOrder)
  const dispatch = useAppDispatch()
  const options = useMemo<SelectOption<OrderByType>[]>(
    () => [
      {
        value: 'asc',
        content: t('ascend'),
      },
      {
        value: 'desc',
        content: t('descend'),
      },
    ],
    [t],
  )

  const onChange = useCallback(
    (value: OrderByType) => {
      dispatch(filtersActions.setOrderBy(value))
      fetchData?.()
    },
    [dispatch, fetchData],
  )

  return <ListBox items={options} value={orderBy} onChange={onChange} />
})
