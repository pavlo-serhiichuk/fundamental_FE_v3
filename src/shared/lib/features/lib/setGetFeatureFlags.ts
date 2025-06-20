import { FeatureFlags } from '../../../types/featureFlags'

let featureFlags: FeatureFlags = {}

// Features doesn't change
export function setFeatureFlags(newFeatureFlags?: FeatureFlags): void {
  if (newFeatureFlags) {
    featureFlags = newFeatureFlags
  }
}

export function getFeatureFlags(flag: keyof FeatureFlags): boolean {
  return !!featureFlags[flag]
}

export function getAllFeatureFlags() {
  return featureFlags
}
