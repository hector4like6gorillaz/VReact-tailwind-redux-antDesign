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

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<NormalRoute />}>
          <Route path={mapRoutes.login} element={<LoginModule />} />
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

        <Route path="*" element={<div> 404 </div>} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
