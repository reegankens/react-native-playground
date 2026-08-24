import { useState } from "react";
import { Button, Text, View } from "react-native";
import { BaseModal } from "../modal/base-modal";


export function ExampleModal(){
  const [visible, setVisible] = useState(false);
  
  return (
    <View>
      <BaseModal
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
      </BaseModal>

      <View>
        <Text>Show Modal: {visible ? "true" : "false"}</Text>
      </View>
      
      <Button title="Show Modal" onPress={()=>{
        console.log('click show modal')
        setVisible(!visible);
      }}/>
    </View>
  );
}