import { Button } from 'antd'
import SVG from '../../assets/404.svg'
import { mapRoutes } from 'src/router/mapPath'

const NotFoundPage = () => {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center">
      <img src={SVG} alt="Imagen de error" className="h-64" />
      <div className="text-center flex flex-col gap-4">
        <h2 className="text-6xl">404</h2>
        <p className="text-xl">Oops… No encontramos la página que buscas</p>
      </div>
      <Button className="w-auto mt-4" type="primary" href={mapRoutes.dashboard}>
        Regresar al inicio
      </Button>
    </div>
  )
}

export default NotFoundPage
