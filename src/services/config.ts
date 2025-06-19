import axios from 'axios'
import { secureGetItem } from './localForage/collapse.service'
import { localForageKeys } from './localForage/keys'
import { mapRoutes } from 'src/router/mapPath'

const environmentIsDev =
  window.location.href.includes('develop') ||
  window.location.href.includes('localhost')

let baseURL: any = environmentIsDev
  ? import.meta.env.VITE_APP_API
  : import.meta.env.VITE_APP_API_PROD

const getSecureToken = async (): Promise<string | null> => {
  try {
    const token = await secureGetItem(localForageKeys.token) // usa el nombre que tú uses
    return token ?? null
  } catch {
    return null
  }
}

const createAxiosInstance = async (
  auth: boolean,
  contentType = 'application/json'
) => {
  const token = auth ? await getSecureToken() : null

  if (auth && !token) window.location.href = mapRoutes.login

  return axios.create({
    baseURL,
    headers: {
      'Content-Type': `${contentType}; charset=utf-8`,
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
  })
}

const SERVICE = async () => await createAxiosInstance(false)

const AUTHSERVICE = async () => await createAxiosInstance(true)

const AUTHSERVICE_FORMDATA = async () =>
  await createAxiosInstance(true, 'multipart/form-data')

const SERVICE_FORMDATA = async () =>
  await createAxiosInstance(false, 'multipart/form-data')

export { SERVICE, AUTHSERVICE, AUTHSERVICE_FORMDATA, SERVICE_FORMDATA }
