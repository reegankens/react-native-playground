import { useState } from "react";
import { Button, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ExampleModal } from "../components/example/exampleModal";


export default function HomeScreen() {
  const [visible, setVisible] = useState(false);
  
  return (
    <SafeAreaView edges={["top"]}>
      <ExampleModal 
        visible={visible} 
        transparent={true}
        onRequestClose={()=>{
          //ketika click tombol back di android, ini belum sempet dicoba
          console.log('onRequestClose: ');
          setVisible(false);
        }}
        animationType="fade"
      >
        <View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'gray'}}>
          <View style={{backgroundColor:'green',padding:10,width:200,height:200}}>
            <Text>Hello Modal</Text>
            <View style={{flex:1,flexDirection: "column",justifyContent:'flex-end'}}>
              <Button title="Close" 
              onPress={()=>{
                setVisible(false)
              }}
            />
            </View>
            
          </View>
          
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
