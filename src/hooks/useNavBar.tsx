import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  secureGetItem,
  secureSetItem,
} from 'src/services/localForage/collapse.service'
import { localForageKeys } from 'src/services/localForage/keys'
import type { RootState } from 'src/store'
import {
  handleCollapseDesktop,
  handleCollapseMovile,
} from 'src/store/reducers/navigationSlice'
import useCommonFunctions from './useCommonFunctions'
import type { MenuItem } from 'src/interfaces/menu.interface'
import { MdDashboard } from 'react-icons/md'
import { FaCar, FaUsersGear } from 'react-icons/fa6'
import { BsBuildings } from 'react-icons/bs'
import { mapRoutes } from 'src/router/mapPath'
import type { TRoles } from 'src/interfaces/roles.interface'

const useNavBar = (props?: { onInit?: boolean }) => {
  const { isMovile, navigate } = useCommonFunctions()
  const { collapseDesktop, showMenuMovile } = useSelector(
    (state: RootState) => state.navigation
  )
  const dispatch = useDispatch()

  const handleDesktop = (val: boolean) => {
    secureSetItem(localForageKeys.collapseNavBarDesktop, val)
      .then(() => {
        dispatch(handleCollapseDesktop(val))
      })
      .catch((e) => {
        console.error(e)
        console.error('No se puede guardar la variable en el localForage')
        dispatch(handleCollapseDesktop(val))
      })
  }
  const handleMovile = (val: boolean) => {
    dispatch(handleCollapseMovile(val))
  }

  const handleClassContainer = () => {
    let className = 'block h-screen shadow-md'
    if (isMovile)
      className = `absolute left-0 top-0 ${
        showMenuMovile ? 'right-0' : 'right-[100%]'
      }  bottom-0 m-auto  bg-black/40 z-10 `
    return className
  }
  const handleClassMenu = () => {
    let className = ''
    if (isMovile) className = 'bg-white h-full overflow-hidden'
    return className
  }

  const fonstSize = 'text-[1.3rem] '
  const IconSize = 'w-[1.3rem] h-[1.3rem] '

  const getMenuUser = (role: TRoles) => {
    let menu: MenuItem[] = []

    const superAdminMenuItems: MenuItem[] = [
      {
        key: '1',
        icon: <MdDashboard className={IconSize} />,
        label: 'Dashboard',
        className: `${fonstSize}`,
        onClick: () => navigate(mapRoutes.dashboard),
      },
      {
        key: '2',
        icon: <FaUsersGear className={IconSize} />,
        label: 'Usuarios',
        className: `${fonstSize}`,
        onClick: () => navigate(mapRoutes.users),
      },
      {
        key: '3',
        icon: <BsBuildings className={IconSize} />,
        label: 'Condominios',
        className: `${fonstSize}`,
        onClick: () => navigate(mapRoutes.condominiums),
      },
      {
        key: '4',
        icon: <FaCar className={IconSize} />,
        label: 'Autos',
        className: `${fonstSize}`,
        onClick: () => navigate(mapRoutes.cars),
      },
    ]
    const adminMenuItems: MenuItem[] = [
      {
        key: '1',
        icon: <MdDashboard className={IconSize} />,
        label: 'Dashboard',
        className: `${fonstSize}`,
        //onClick: () => navigate(mapRoutes.dashboard),
      },
      {
        key: '2',
        icon: <FaUsersGear className={IconSize} />,
        label: 'Usuarios',
        className: `${fonstSize}`,
        //onClick: () => navigate(mapRoutes.users),
      },
      {
        key: '3',
        icon: <BsBuildings className={IconSize} />,
        label: 'Condominios',
        className: `${fonstSize}`,
        //onClick: () => navigate(mapRoutes.reports),
      },
    ]
    const managerMenuItems: MenuItem[] = [
      {
        key: '1',
        icon: <MdDashboard className={IconSize} />,
        label: 'Dashboard',
        className: `${fonstSize}`,
        //onClick: () => navigate(mapRoutes.dashboard),
      },

      {
        key: '2',
        icon: <BsBuildings className={IconSize} />,
        label: 'Condominios',
        className: `${fonstSize}`,
        //onClick: () => navigate(mapRoutes.reports),
      },
    ]

    switch (role) {
      case 'super_admin':
        menu = superAdminMenuItems
        break
      case 'admin':
        menu = adminMenuItems
        break
      case 'manager':
        menu = managerMenuItems
        break

      default:
        break
    }

    return menu
  }

  useEffect(() => {
    if (props?.onInit)
      secureGetItem(localForageKeys.collapseNavBarDesktop)
        .then((dat) => {
          if (dat === null) {
            secureSetItem(localForageKeys.collapseNavBarDesktop, false)
              .then(() => {
                dispatch(handleCollapseDesktop(false))
              })
              .catch((e) => console.error(e))
          } else {
            dispatch(handleCollapseDesktop(dat))
          }
        })
        .catch((e) => console.error(e))
  }, [])

  useEffect(() => {
    if (isMovile) {
      handleDesktop(false)
    }
  }, [isMovile])

  return {
    //variables
    //global variables
    collapseDesktop,
    showMenuMovile,
    //functions
    handleDesktop,
    handleMovile,
    handleClassContainer,
    handleClassMenu,
    getMenuUser,
  }
}

export default useNavBar
