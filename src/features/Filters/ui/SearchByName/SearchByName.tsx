import {memo, useCallback} from 'react'
import {cls} from 'shared/lib/cls/cls'
import {useTranslation} from 'react-i18next'
import {useSelector} from 'react-redux'
import {getFiltersSearchValue} from 'features/Filters/module/selectors/getFiltersState'
import {useAppDispatch} from 'shared/hooks/useAppDispatch'
import {filtersActions} from 'features/Filters'
import {Input} from 'shared/ui/Input/Input'
import * as s from './SearchByName.module.scss'

interface SortByParamProps {
  className?: string
}

export const SearchByName = memo((props: SortByParamProps) => {
  const {className} = props
  const {t} = useTranslation()
  const searchValue = useSelector(getFiltersSearchValue)
  const dispatch = useAppDispatch()

  const onChange = useCallback((value: string) => {
    dispatch(filtersActions.setSearchValue(value))
  }, [dispatch, searchValue])

  return (
    <div className={cls(s.SearchByName, {}, [className])}>
      <Input value={searchValue} onChange={onChange} />
    </div>
  )
})
