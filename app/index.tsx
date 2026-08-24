import { useState } from "react";
import { Button, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ExampleModal } from "../components/example/exampleModal";


export default function HomeScreen() {
  const [visible, setVisible] = useState(false);
  
  return (
    <SafeAreaView className="flex-1" edges={["top"]}>
      
      <ExampleModal 
        visible={visible} 
        transparent={false}
        onRequestClose={()=>{
          console.log('onRequestClose: ');
          setVisible(false);
        }}
        animationType="fade"
      >
        <View>
          <Text>Hello Modal</Text>
        </View>
      </ExampleModal>
      <View>
        <Text>Show Modal: {visible ? "true" : "false"}</Text>
      </View>
      
      <Button title="Show Modal" onPress={()=>{
        console.log('click show modal')
        setVisible(!visible);
      }}/>
    </SafeAreaView>
  );
}
