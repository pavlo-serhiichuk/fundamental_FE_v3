export const countries = {
  Ukraine: 'Ukraine',
  Poland: 'Poland',
  Italy: 'Italy',
  Georgia: 'Georgia',
} as const

export type Country = keyof typeof countries
