import { FeatureFlags } from '../../../types/featureFlags'
import { LS_DESIGN_VERSION } from '@/shared/const/localStorage'

const defFeatureFlags: FeatureFlags = {
  isV2: localStorage.getItem(LS_DESIGN_VERSION) === '"V2"',
}

let featureFlags: FeatureFlags = {
  ...defFeatureFlags,
}

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
