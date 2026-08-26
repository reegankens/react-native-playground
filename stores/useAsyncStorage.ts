//ini cara tanpa menggunakan Persist Zustand
import AsyncStorage from '@react-native-async-storage/async-storage';
type Token = {
  key:string,
  value:string|null,
}
export const token: Token = {
  key:'userToken',
  value:null
};
export const setToken = async () => {
  console.log('Set Token abc123')
   await AsyncStorage.setItem(token.key, "abc123");
   return await getToken();
}
export const getToken = async ():Promise<string|null> => {
  token.value = await AsyncStorage.getItem(token.key);
  console.log("Get Token:", token); // abc123
  return token.value
}
export const removeToken = async () => {
  console.log('remove token')
  await AsyncStorage.removeItem(token.key);
  token.value = await getToken();
  console.log('Get Token',token.value)
  return  token.value;
}