import { GiDropletSplash } from 'react-icons/gi'
import { Spin } from 'antd'


const SplashModule = () => {
  return (
    <div className="fixed w-full h-full bg-gradient-primary z-50 flex flex-col items-center justify-center">
      <GiDropletSplash className="w-[70%] tablet:w-[60%] desktop:w-[20rem] ultrawide:w-[20rem] h-auto" />
      <Spin spinning />
    </div>
  )
}

export default SplashModule
