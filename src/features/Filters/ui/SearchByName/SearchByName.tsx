import {memo, useCallback} from 'react'
import {cls} from 'shared/lib/cls/cls'
import {useTranslation} from 'react-i18next'
import {useSelector} from 'react-redux'
import {getFiltersSearchValue} from 'features/Filters/module/selectors/getFiltersState'
import {useAppDispatch} from 'shared/hooks/useAppDispatch'
import {filtersActions} from 'features/Filters'
import {Input} from 'shared/ui/Input/Input'
import {useSearchParams} from 'react-router-dom'
import * as s from './SearchByName.module.scss'

interface SortByParamProps {
  className?: string
  fetchData?: () => void
}

export const SearchByName = memo((props: SortByParamProps) => {
  const {className, fetchData} = props
  const {t} = useTranslation()
  const searchValue = useSelector(getFiltersSearchValue)
  const dispatch = useAppDispatch()

  const onChange = useCallback((value: string) => {
    dispatch(filtersActions.setSearchValue(value))
    fetchData?.()
  }, [dispatch, searchValue])

  return (
    <div className={cls(s.SearchByName, {}, [className])}>
      <Input value={searchValue} onChange={onChange} />
    </div>
  )
})
