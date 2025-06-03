// Record is a regular object but with limited amount of values
export type Mods = Record<string, string | boolean>

// const a: Mods = {
//   '123': true
// }

export function cls(
  className: string,
  mods: Mods = {},
  additional: Array<string | undefined> = [],
): string {
  const modsClasses = Object.entries(mods)
    .filter(([_, value]) => Boolean(value))
    .map(([className, _]: [string, string | boolean]) => className)
    .flat(1)

  return [className, ...modsClasses, ...additional.filter(Boolean)]
    .join(' ')
    .trim()
}
