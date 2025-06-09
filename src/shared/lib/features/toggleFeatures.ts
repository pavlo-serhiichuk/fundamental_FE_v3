import { FeatureFlags } from '../../types/featureFlags'
import { getFeatureFlags } from './setGetFeatureFlags'

interface ToggleFeaturesOptions<T> {
  name: keyof FeatureFlags
  on: () => T
  off: () => T
}

export function toggleFeatures<T>({
  name,
  on,
  off,
}: ToggleFeaturesOptions<T>): T {
  console.log(11, getFeatureFlags(name))
  if (getFeatureFlags(name)) {
    return on()
  }

  return off()
}
