import React, {Suspense} from 'react'
import {Route, Routes} from 'react-router-dom'
import {AppRoutesProps, routesConfig} from '@/shared/config/routesConfig/routesConfig'
import {RequireAuth} from '@/app/providers/router/ui/RequireAuth'

const AppRouter = () => {
  const renderWithProtection = (route: AppRoutesProps) => {
    const element = (
      <Suspense fallback={<div />}>
        {route.element}
      </Suspense>
    )

    return (
      <Route
        key={route.path}
        path={route.path}
        element={route.authOnly ? <RequireAuth roles={route.roles}>{element}</RequireAuth> : element}
      />
    )
  }
  return (
    <Routes>
      {Object.values(routesConfig).map(renderWithProtection)}
    </Routes>
  )
}

export default AppRouter
