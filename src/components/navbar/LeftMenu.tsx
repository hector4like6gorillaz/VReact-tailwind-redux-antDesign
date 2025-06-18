import { Menu, Typography } from 'antd'
import { MdClose, MdOutlineChevronLeft } from 'react-icons/md'
import useNavBar from 'src/hooks/useNavBar'

const LeftMenu = ({ isMovile }: { isMovile: boolean }) => {
  const {
    collapseDesktop,
    showMenuMovile,
    handleMovile,
    handleDesktop,
    handleClassContainer,
    handleClassMenu,
    getMenuUser,
  } = useNavBar({ onInit: true })
  const { Title } = Typography

  const getCollapse = (): string => {
    let className = ''
    if (isMovile) className = showMenuMovile ? 'w-[20rem]' : 'w-0'
    else className = !collapseDesktop ? 'w-[20rem]' : 'w-[3rem]'
    return className
  }

  return (
    <div className={`${handleClassContainer()}`}>
      <div className={`${getCollapse()} ${handleClassMenu()} duration-500 `}>
        <div
          className="w-full h-[3.5rem] flex items-center justify-center bg-primary cursor-pointer relative overflow-hidden"
          onClick={() => collapseDesktop && handleDesktop(!collapseDesktop)}
        >
          {isMovile && showMenuMovile && (
            <MdClose
              className={`w-spacing-2-r h-spacing-2-r absolute left-spacing-1-r top-0 bottom-0 m-auto ${
                showMenuMovile && 'delay-300'
              }`}
              onClick={() => handleMovile(false)}
            />
          )}
          <Title className="!p-0 !m-0 whitespace-nowrap" level={2}>
            {!isMovile && collapseDesktop ? 'C' : 'Condor'}
          </Title>
          {!isMovile && (
            <MdOutlineChevronLeft
              className={`absolute right-0 m-auto fill-gray-50 cursor-pointer delay-300
                ${
                  collapseDesktop
                    ? 'rotate-180 w-spacing-1-r h-auto top-0'
                    : 'w-spacing-2-r h-spacing-2-r top-0 bottom-0'
                }`}
              onClick={() => handleDesktop(!collapseDesktop)}
            />
          )}
        </div>

        <Menu
          title="interMenu"
          defaultSelectedKeys={['1']}
          mode="inline"
          inlineCollapsed={collapseDesktop}
          className={collapseDesktop ? '!w-[3rem]' : ''}
          items={getMenuUser('super_admin')}
        />
      </div>
    </div>
  )
}

export default LeftMenu
