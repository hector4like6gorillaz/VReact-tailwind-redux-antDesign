import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { mapRoutes } from 'src/router/mapPath'
import { useSplashQuerySuccess } from 'src/services/querys/splash.query'
import useCommonFunctions from './useCommonFunctions'

const useSplash = () => {
  const { navigate } = useCommonFunctions()
  const [splashDone, setSplashDone] = useState(false)

  const location = useLocation()

  const isLoginRoute = location.pathname === mapRoutes.login
  const isPublicRoute = [mapRoutes.login, mapRoutes.landing].includes(
    location.pathname
  )

  const { isError, isSuccess, isFetching } = useSplashQuerySuccess()
  //aqui la data la puedes usar para guardarla en una variable global como datos del usuario
  //incluyendo el rol en caso de ser necesario
  //const { data, isError, isSuccess, isFetching } = useSplashQueryFail()

  useEffect(() => {
    if (!isFetching) {
      const timeout = setTimeout(() => setSplashDone(true), 2000)
      return () => clearTimeout(timeout)
    }
  }, [isFetching])

  useEffect(() => {
    if (!splashDone) return

    if (isError) {
      if (!isPublicRoute) navigate(mapRoutes.login, { replace: true })
    } else if (isSuccess) {
      if (isLoginRoute) navigate(mapRoutes.dashboard, { replace: true })
    }
  }, [splashDone, isError, isSuccess, navigate, location.pathname])

  return {
    //variables
    splashDone,
    isFetching,
  }
}

export default useSplash
