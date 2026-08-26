//ini cara tanpa menggunakan Persist Zustand

import { storage } from "./mmkv";

const userId:string = '1';


type Token = {
  key:string,
  value:string|undefined,
}
export const token: Token = {
  key:'userToken',
  value:undefined
};
export const setToken = async () => {
  storage.set(token.key,'def456');
   return await getToken();
}
export const getToken = async ():Promise<string|undefined> => {
  token.value = storage.getString(token.key);

  return token.value;
}
export const removeToken = async () => {
  storage.remove(token.key);
  token.value = await getToken();
  return  token.value;
}