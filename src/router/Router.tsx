import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NormalRoute from './NormalRoute'

import PrivateRoute from './PrivateRoute'
import LoginModule from 'src/pages/login/LoginModule'
import MainLayout from 'src/HOCs/MainLayout'
import DasboardModule from 'src/pages/dashboard/DasboardModule'
import UsersModule from 'src/pages/users/UsersModule'
import CondominiumsModule from 'src/pages/condominiums/CondominiumsModule'
import CarsModule from 'src/pages/cars/CarsModule'

import { mapRoutes } from './mapPath'
import App from 'src/App'
import ExpiredSesionModule from 'src/pages/expired-sesion/ExpiredSesionModule'
import NotFoundPage from 'src/pages/404/NotFound'
import SplashInit from 'src/components/splash-init/SplashInit'
import CloseSessionModule from 'src/pages/close-session/CloseSessionModule'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={mapRoutes.expired} element={<ExpiredSesionModule />} />
        <Route
          path={mapRoutes.closedSession}
          element={<CloseSessionModule />}
        />
        <Route path="*" element={<NotFoundPage />} />

        <Route element={<SplashInit />}>
          <Route element={<NormalRoute />}>
            <Route path={mapRoutes.login} element={<LoginModule />} />
            <Route path={mapRoutes.landing} element={<App />} />
          </Route>

          <Route element={<PrivateRoute />}>
            <Route element={<MainLayout />}>
              <Route path={mapRoutes.dashboard} element={<DasboardModule />} />
              <Route path={mapRoutes.users} element={<UsersModule />} />
              <Route
                path={mapRoutes.condominiums}
                element={<CondominiumsModule />}
              />
              <Route path={mapRoutes.cars} element={<CarsModule />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router
