import {memo} from 'react'
import {cls} from 'shared/lib/cls/cls'
import BigListIcon from 'shared/assets/icons/list.svg'
import SmallListIcon from 'shared/assets/icons/tile.svg'
import {Button} from 'shared/ui/Button/Button'
import {Icon} from 'shared/ui/Icon/Icon'
import {useAppDispatch} from 'shared/hooks/useAppDispatch'
import {useSelector} from 'react-redux'
import {changeListViewActions} from '../../module/slice/changeListViewSlice'
import {getListView} from '../../module/selectors/getListView'
import {ListView} from '../../module/consts/consts'
import * as s from './ChangeListView.module.scss'

interface ChangeListViewProps {
  className?: string
  onClick?: (view: ListView) => void
}

const listViewOptions = [
  {
    type: ListView.BIG,
    icon: BigListIcon,
  }, {
    type: ListView.SMALL,
    icon: SmallListIcon,
  },
]

export const ChangeListView = memo((props: ChangeListViewProps) => {
  const {className, onClick} = props
  const dispatch = useAppDispatch()
  const listView = useSelector(getListView)
  const handleClick = (view: ListView) => () => {
    dispatch(changeListViewActions.setListView(view))
  }

  return (
    <div className={cls(s.ChangeListView, {}, [className])}>
      {listViewOptions.map((viewOption) => {
        const isSelected = listView === viewOption.type
        return (
          <Button key={viewOption.type} theme="clear" className={cls('', {[s.selected]: isSelected})} onClick={handleClick(viewOption.type)}>
            <Icon Svg={viewOption.icon} />
          </Button>
        )
      })}
    </div>
  )
})
