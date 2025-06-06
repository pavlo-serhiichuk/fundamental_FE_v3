import { FeatureFlags } from '../../types/featureFlags'

let featureFlags: FeatureFlags

// Features doesn't change
export function setFeatureFlags(newFeatureFlags: FeatureFlags): void {
  if (newFeatureFlags) {
    featureFlags = newFeatureFlags
    console.log(11, featureFlags)
  }
}

export function getFeatureFlags(flag: keyof FeatureFlags): boolean {
  if (featureFlags) {
    return featureFlags?.[flag]
  }

  return false
}
