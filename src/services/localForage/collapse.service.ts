import localforage from 'localforage'
import CryptoJS from 'crypto-js'

const secretKey = import.meta.env.VITE_APP_LOCAL_SECRET

if (!secretKey) {
  console.warn(
    '[⚠️ WARNING] VITE_APP_LOCAL_SECRET no está definida. Usando clave por defecto.'
  )
}
const finalSecret = secretKey || 'cambia-la-clave-de-encriptacion'

export const secureSetItem = async (key: string, value: any) => {
  const stringValue = JSON.stringify(value)
  const encrypted = CryptoJS.AES.encrypt(stringValue, finalSecret).toString()
  await localforage.setItem(key, encrypted)
}

export const secureGetItem = async (key: string): Promise<any | null> => {
  const encrypted = await localforage.getItem<string>(key)
  if (!encrypted) return null
  try {
    const bytes = CryptoJS.AES.decrypt(encrypted, finalSecret)
    const decrypted = bytes.toString(CryptoJS.enc.Utf8)
    return JSON.parse(decrypted)
  } catch (e) {
    console.error('Error desencriptando', e)
    return null
  }
}

export const secureRemoveItem = async (key: string): Promise<void> => {
  try {
    await localforage.removeItem(key)
  } catch (error) {
    console.error(`Error al eliminar la clave ${key}`, error)
  }
}
