import { ReactElement } from 'react'
import { FeatureFlags } from '@/shared/types/featureFlags'
import { getFeatureFlags } from '@/shared/lib/features'

interface ToggleFeatureProps {
  isV2InStorybook?: boolean
  feature: keyof FeatureFlags
  on: ReactElement
  off: ReactElement
}

export const ToggleFeature = (props: ToggleFeatureProps) => {
  const { feature, on, off, isV2InStorybook } = props
  const isFeatureActual = getFeatureFlags(feature)
  if (isFeatureActual || isV2InStorybook) {
    return on
  }

  return off
}
