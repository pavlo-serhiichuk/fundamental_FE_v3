import { DropdownDirection, ListBoxDirection } from '@/shared/types/ui'
import * as s from './popups.module.scss'

export const mapDropdownDirectionClass: Record<DropdownDirection, string> = {
  'top left': s.dropdownTopLeft,
  'top right': s.dropdownTopRight,
  'bottom left': s.dropdownBottomLeft,
  'bottom right': s.dropdownBottomRight,
}

export const mapListBoxDirectionClass: Record<ListBoxDirection, string> = {
  top: s.listBoxTop,
  bottom: s.listBoxBottom,
}
