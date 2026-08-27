import { ExampleZustandSql } from "@/components/example/exampleZustandSql";
import { migrate } from "@/database/migrations";
import { useEffect, useState } from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


export default function HomeScreen() {
  const [ready, setReady] = useState(false);
  
  useEffect(()=>{
    async function initMigration(){
      try{
        await migrate();

        setReady(true)
      }
      catch(e){
        throw new Error("Migrasi gagal");
        
      }
    }

    initMigration();
  },[])
 
  
  if(!ready){
    return <Text>Inisialisasi Migrasi</Text>
  }


  return (
    <SafeAreaView edges={["top"]}>
      <ExampleZustandSql/>
    </SafeAreaView>
  );
}
