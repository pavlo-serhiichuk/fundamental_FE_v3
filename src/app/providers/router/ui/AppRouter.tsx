import React, {Suspense} from 'react'
import {Route, Routes} from 'react-router-dom'
import {routesConfig} from 'shared/config/routesConfig/routesConfig'
import {PageLoader} from 'widgets/PageLoader/PageLoader'

const AppRouter = () => (
  <Suspense fallback={<PageLoader />}>
    <Routes>
      {Object.values(routesConfig).map(({path, element}) => (
        <Route
          element={(
            <div className="page-wrapper">
              {element}
            </div>
          )}
          path={path}
          key={path}
        />
      ))}
    </Routes>
  </Suspense>
)

export default AppRouter
