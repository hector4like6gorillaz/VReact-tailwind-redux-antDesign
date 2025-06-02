import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NormalRoute from './NormalRoute'

import App from 'src/App'
import PrivateRoute from './PrivateRoute'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<NormalRoute />}>
          <Route path="/" element={<App />} />
        </Route>

        <Route element={<PrivateRoute />}>
          <Route path="/user" element={<App />} />
        </Route>

        <Route path="*" element={<div> 404 </div>} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
