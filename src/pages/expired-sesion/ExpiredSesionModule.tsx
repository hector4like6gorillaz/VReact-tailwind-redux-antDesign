import expiredGif from 'src/assets/expired.gif'
import useCommonFunctions from 'src/hooks/useCommonFunctions'
import { mapRoutes } from 'src/router/mapPath'

const ExpiredSesionModule = () => {
  const {} = useCommonFunctions({
    redirect: true,
    path: mapRoutes.login,
  })

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center ">
      <img src={expiredGif} />
      <h1 className="text-xl tablet:text-2xl desktop:text-[2rem]">
        Oops... tus credenciales ya no son válidas
      </h1>
      <p>Estás siendo redirigido...</p>
    </div>
  )
}

export default ExpiredSesionModule
