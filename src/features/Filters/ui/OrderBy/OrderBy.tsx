import {memo, useCallback, useMemo} from 'react'
import {cls} from 'shared/lib/cls/cls'
import {useTranslation} from 'react-i18next'
import {useSelector} from 'react-redux'
import {getFiltersOrder} from 'features/Filters/module/selectors/getFiltersState'
import {Select} from 'shared/ui/Select/Select'
import {useAppDispatch} from 'shared/hooks/useAppDispatch'
import {filtersActions} from 'features/Filters'
import {type OrderType} from '../../module/types/FiltersSchema'
import * as s from './OrderBy.module.scss'

interface SortByOrderProps {
  className?: string
}

export const OrderBy = memo((props: SortByOrderProps) => {
  const {className} = props
  const {t} = useTranslation()
  const order = useSelector(getFiltersOrder)
  const dispatch = useAppDispatch()
  const options = useMemo(() => ([
    {
      value: 'asc',
      content: t('ascend'),
    },
    {
      value: 'desc',
      content: t('descend'),
    },
  ]), [])

  const onChange = useCallback((value: OrderType) => {
    dispatch(filtersActions.setOrder(value))
  }, [dispatch, order])

  return (
    <div className={cls(s.SortByOrder, {}, [className])}>
      <Select selectName={t('Order by')} options={options} value={order} onChange={onChange} />
    </div>
  )
})
