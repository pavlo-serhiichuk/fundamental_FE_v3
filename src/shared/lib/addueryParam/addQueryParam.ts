import { AppRouteType } from '@/shared/const/routers'

export function getQueryParams(
  params: Record<string, string>,
  path: AppRouteType | string = '',
) {
  const searchParams = new URLSearchParams(window.location.search)
  Object.entries(params).forEach(([name, value]) => {
    if (value !== undefined) {
      searchParams.set(name, value)
    }
  })
  return `${path}?${searchParams.toString()}`
}

export function addQueryParam(
  params: Record<string, string>,
  path: AppRouteType | string = '',
) {
  window.history.pushState(null, '', getQueryParams(params, path))
}
