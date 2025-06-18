import { Avatar } from 'antd'

import { IoMdMenu } from 'react-icons/io'
import useCommonFunctions from 'src/hooks/useCommonFunctions'
import useNavBar from 'src/hooks/useNavBar'

const TopStatusBar = () => {
  const { handleMovile } = useNavBar()
  const { isMovile } = useCommonFunctions()
  return (
    <div className="h-[3.5rem] w-full flex items-center justify-center px-[1rem]">
      <div
        className={`bg-primary w-full flex justify-between items-center px-[1rem] rounded-3xl shadow-md py-1 ${
          !isMovile && 'flex-row-reverse'
        }`}
      >
        {isMovile && (
          <IoMdMenu
            className="w-spacing-2-r h-spacing-2-r"
            onClick={() => handleMovile(true)}
          />
        )}
        <Avatar className="!bg-warning-green" size={35}>
          HB
        </Avatar>
      </div>
    </div>
  )
}

export default TopStatusBar
