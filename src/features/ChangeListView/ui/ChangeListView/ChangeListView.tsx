import { memo } from 'react'
import { useSelector } from 'react-redux'
import { cls } from '@/shared/lib/cls/cls'
import BigListIcon from '@/shared/assets/icons/list.svg'
import SmallListIcon from '@/shared/assets/icons/tile.svg'
import { Button as ButtonDeprecated } from '@/shared/ui/deprecated/Button'
import { Icon as IconDeprecated } from '@/shared/ui/deprecated/Icon'
import { useAppDispatch } from '@/shared/hooks/useAppDispatch'
import { changeListViewActions } from '../../module/slice/changeListViewSlice'
import { getListView } from '../../module/selectors/getListView'
import { ListView } from '../../module/consts/consts'
import * as s from './ChangeListView.module.scss'
import { ToggleFeature } from '@/shared/lib/features/ToggleFeature/ToggleFeature'
import { Card } from '@/shared/ui/V2/Card'
import { Button } from '@/shared/ui/V2/Button'
import { Icon } from '@/shared/ui/V2/Icon'

interface ChangeListViewProps {
  className?: string
  onClick?: (view: ListView) => void
}

const listViewOptions = [
  {
    type: ListView.BIG,
    icon: BigListIcon,
  },
  {
    type: ListView.SMALL,
    icon: SmallListIcon,
  },
]

export const ChangeListView = memo((props: ChangeListViewProps) => {
  const { className, onClick } = props
  const dispatch = useAppDispatch()
  const listView = useSelector(getListView)
  const handleClick = (view: ListView) => () => {
    dispatch(changeListViewActions.setListView(view))
  }

  return (
    <ToggleFeature
      feature="isV2"
      on={
        <Card padding="16" className={cls(s.ChangeListView, {}, [className])}>
          {listViewOptions.map((viewOption) => {
            const isSelected = listView === viewOption.type
            return (
              <Icon
                key={viewOption.type}
                Svg={viewOption.icon}
                onClick={handleClick(viewOption.type)}
                className={cls('', { [s.selectedV2]: isSelected })}
              />
            )
          })}
        </Card>
      }
      off={
        <div className={cls(s.ChangeListView, {}, [className])}>
          {listViewOptions.map((viewOption) => {
            const isSelected = listView === viewOption.type
            return (
              <ButtonDeprecated
                key={viewOption.type}
                theme="clear"
                className={cls('', { [s.selected]: isSelected })}
                onClick={handleClick(viewOption.type)}
              >
                <IconDeprecated Svg={viewOption.icon} />
              </ButtonDeprecated>
            )
          })}
        </div>
      }
    />
  )
})
