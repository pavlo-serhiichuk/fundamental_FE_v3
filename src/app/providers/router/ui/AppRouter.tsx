import React, {ReactNode, Suspense} from 'react';
import {Route, RouteObject, Routes} from 'react-router-dom'
import {routesConfig, RoutesConfigType} from 'shared/config/routesConfig/routesConfig'

const AppRouter = () => {

  return (
    <Suspense fallback={<div className={'page-wrapper'}>Loading...</div>}>
      <Routes>
        {Object.values(routesConfig).map(({path, element}) =>
          <Route
            element={(
              <div className={'page-wrapper'}>
                {element}
              </div>
            )}
            path={path}
            key={path}
          />)}
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
