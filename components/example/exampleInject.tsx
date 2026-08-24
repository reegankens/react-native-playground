import { useUser } from "@/context/useUser";
import { Text, View } from "react-native";

export function ExampleInject(){
  const {name} = useUser();
  return (
    <View style={{flex:1, justifyContent:'center',alignItems:'center'}}>
      <Text>{name}</Text>
    </View>
  )
}