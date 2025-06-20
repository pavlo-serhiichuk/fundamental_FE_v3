import { memo, useCallback } from 'react'
import { useSelector } from 'react-redux'
import { cls } from '@/shared/lib/cls/cls'
import { useAppDispatch } from '@/shared/hooks/useAppDispatch'
import { Input as InputDeprecated } from '@/shared/ui/deprecated/Input'
import { filtersActions } from '../../module/slice/filtersSlice'
import { getFiltersSearchValue } from '../../module/selectors/getFiltersState'
import * as s from './SearchByName.module.scss'
import { ToggleFeature } from '@/shared/lib/features/components/ToggleFeature/ToggleFeature'
import { Input } from '@/shared/ui/V2/Input'

interface SortByParamProps {
  className?: string
  fetchData?: () => void
}

export const SearchByName = memo((props: SortByParamProps) => {
  const { className, fetchData } = props
  const searchValue = useSelector(getFiltersSearchValue)
  const dispatch = useAppDispatch()

  const onChange = useCallback(
    (value: string) => {
      dispatch(filtersActions.setSearchValue(value))
      fetchData?.()
    },
    [dispatch, fetchData],
  )

  return (
    <div className={cls(s.SearchByName, {}, [className])}>
      <Input
        value={searchValue}
        onChange={onChange}
        placeholder="Search..."
        withSearchIcon
        size="large"
      />
    </div>
  )
})
