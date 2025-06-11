import { ReactElement } from 'react'
import { FeatureFlags } from '@/shared/types/featureFlags'
import { getFeatureFlags } from '@/shared/lib/features'

interface ToggleFeatureProps {
  feature: keyof FeatureFlags
  on: ReactElement
  off: ReactElement
}

export const ToggleFeature = (props: ToggleFeatureProps) => {
  const { feature, on, off } = props
  const isFeatureActual = getFeatureFlags(feature)
  if (isFeatureActual) {
    return on
  }

  return off
}
