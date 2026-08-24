import { useUserStore } from "@/stores/userStore";
import { Button, Text, View } from "react-native";

export function  ExampleZustand(){
  const {name, setName} = useUserStore();
  return (
    <View>
      <Text>{name}</Text>
      <Button title="Change Name" onPress={()=>{
        setName('Budi')
      }}></Button>
    </View>

  );
}