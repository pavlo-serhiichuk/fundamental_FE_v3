import React, {Suspense} from 'react'
import {Route, Routes} from 'react-router-dom'
import {RequireAuth} from './RequireAuth'
import {routesConfig} from '../config/routesConfig'
import {AppRoutesProps} from '@/shared/types/router'

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
