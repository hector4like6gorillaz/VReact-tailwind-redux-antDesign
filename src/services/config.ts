import axios from "axios";

const TOKEN_NAME = import.meta.env.TOKKEN_NAME;

const environmentIsDev =
  window.location.href.includes("develop") ||
  window.location.href.includes("localhost");

let baseURL: any = environmentIsDev
  ? import.meta.env.VITE_APP_API
  : import.meta.env.VITE_APP_API_PROD;

const getTokenData = (): string | null => {
  if (TOKEN_NAME) return localStorage.getItem(TOKEN_NAME);
  return null;
};

const getAuthHeaders = (
  token: string | null,
  contentType = "application/json"
): Record<string, string> => ({
  "Content-Type": `${contentType}; charset=utf-8`,
  ...(token ? { Authorization: `Bearer ${token}` } : {}),
});
const createAxiosInstance = (
  auth: boolean,
  contentType = "application/json"
) => {
  const token = getTokenData();
  if (auth && !token) throw new Error("UNAUTHENTICATED");

  return axios.create({
    baseURL,
    headers: getAuthHeaders(auth ? token : null, contentType),
  });
};

const SERVICE = () => createAxiosInstance(false);
const AUTHSERVICE = () => createAxiosInstance(true);
const AUTHSERVICE_FORMDATA = () =>
  createAxiosInstance(true, "multipart/form-data");

export { SERVICE, AUTHSERVICE, AUTHSERVICE_FORMDATA };
