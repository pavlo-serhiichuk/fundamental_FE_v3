import { ToggleFeature } from '@/shared/lib/features/ToggleFeature/ToggleFeature'
import { Sidebar as SidebarOld } from './ui/deprecated/Sidebar/Sidebar'
import { Sidebar as SidebarNew } from './ui/V2/Sidebar/Sidebar'

export const Sidebar = () => {
  return (
    <ToggleFeature feature="isV2" on={<SidebarNew />} off={<SidebarOld />} />
  )
}
