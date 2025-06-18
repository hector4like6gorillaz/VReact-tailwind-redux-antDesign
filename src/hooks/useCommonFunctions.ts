import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const useCommonFunctions = () => {
  const navigate = useNavigate()
  const [isMovile, setisMovile] = useState(false)

  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  })

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])
  useEffect(() => {
    if (screenSize.width < 599) setisMovile(true)
    else setisMovile(false)
    return () => {}
  }, [screenSize])

  return {
    //local functions
    navigate,
    screenSize,
    isMovile,
  }
}

export default useCommonFunctions
