import { getToken, removeToken, setToken } from "@/stores/useMmkv";
import { useUserStorePersistMmkv } from "@/stores/useUserStorePersistMmkv";
import { useEffect, useState } from "react";

import { Button, Pressable, Text, View } from "react-native";


export function  ExampleZustand(){

  const {name, setName} = useUserStorePersistMmkv();
  const [getTokenName, setTokenName] = useState<string | null>();
  useEffect(()=>{
    const load = async () => {
      console.log('ready')
      const token = await getToken()
      setTokenName(token);
    }
    load();
  },[])
  return (
    <View>
      <Text>{name}</Text>
      <Button title="Change Name" onPress={()=>{
        setName('Budi')
      }}></Button>
      <Text>{getTokenName}</Text>
      <Button title="Set Token abc123" onPress={async ()=>{
        const token = await setToken();
        setTokenName(token);
      }}/>


      <Button title="Get Token" onPress={async ()=>{
        const token = await getToken()
        setTokenName(token);
      }}/>
      <Pressable style={{backgroundColor:'red', justifyContent:'center', alignItems:'center',padding:4}} onPress={ async ()=>{
        const token = await removeToken();
        setTokenName(token);
      }}><Text style={{color:'white',}}>Remove Token</Text></Pressable>



    </View>

  );
}