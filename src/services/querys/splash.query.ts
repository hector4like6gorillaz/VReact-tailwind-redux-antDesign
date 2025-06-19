import { useQuery } from '@tanstack/react-query'
import type { AxiosError } from 'axios'
import type { CustomError } from 'src/interfaces/errors.interface'
import { fakeGetMeRxFail, GetMeFakeSuccess } from '../pokemon.service'

interface IFakeGetMe {
  success: true
  user: {
    name: 'Paco'
    role: 'admin'
  }
}

export const useSplashQuerySuccess = () => {
  return useQuery<
    IFakeGetMe,
    AxiosError<CustomError>,
    IFakeGetMe,
    [string, number?]
  >({
    queryKey: ['me'],
    queryFn: GetMeFakeSuccess,
  })
}
export const useSplashQueryFail = () => {
  return useQuery<
    IFakeGetMe,
    AxiosError<CustomError>,
    IFakeGetMe,
    [string, number?]
  >({
    queryKey: ['me'],
    queryFn: fakeGetMeRxFail,
    retry: false,
  })
}
