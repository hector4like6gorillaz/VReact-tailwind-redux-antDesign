import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { timer, Subscription } from 'rxjs'

const useCommonFunctions = (props?: {
  redirect: boolean
  path: string
  delay?: number
}) => {
  const { delay = 3000 } = props ?? {}

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
  }, [screenSize])

  useEffect(() => {
    if (!props?.redirect) return
    const sub: Subscription = timer(delay).subscribe(() => {
      navigate(props.path)
    })

    return () => sub.unsubscribe()
  }, [navigate, props?.path])

  return {
    //local functions
    navigate,
    screenSize,
    isMovile,
  }
}

export default useCommonFunctions
