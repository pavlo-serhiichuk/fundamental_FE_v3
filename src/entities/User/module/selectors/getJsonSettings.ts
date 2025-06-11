import { buildSelector } from '@/shared/store'
import { JsonSettings } from '@/shared/types/jsonSettings'

const defaultJsonSettings: JsonSettings = {}

export const [useGetJsonSettings, getJsonSettings] = buildSelector(
  (state) => state.user?.authData?.jsonSettings || defaultJsonSettings,
)

export const [useGetJsonSettingByKey] = buildSelector(
  (state, key: keyof JsonSettings) => state.user?.authData?.jsonSettings?.[key],
)
