import { Outlet } from 'react-router-dom'
import useSplash from 'src/hooks/useSplash'
import SplashModule from 'src/pages/splash/SplashModule'

const SplashInit = () => {
  const { splashDone, isFetching } = useSplash()

  if (!splashDone || isFetching) {
    return <SplashModule />
  }

  return <Outlet />
}

export default SplashInit
