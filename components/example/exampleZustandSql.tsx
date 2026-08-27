import { UserModel } from "@/models/user.model";
import { useUserStoreSqlite } from "@/stores/userStore.sqlite";

import { Button, FlatList, Text, View } from "react-native";


export function  ExampleZustandSql(){
  const {users, loading, fetchUsers, addUser} = useUserStoreSqlite();

  // useEffect(()=>{
  //   async function getUsers(){
  //     await fetchUsers();
  //   }
  //   getUsers();
  //   console.log('Ready')
  // },[]);
  return (
    <View>
      {loading && <Text>Loading..</Text>}
      <Text>{users.length}</Text>
      <FlatList
        data={users}
        keyExtractor={(item: { id: string }) => item.id}
        renderItem={({ item }: { item: UserModel }) => (
          <View
            style={{
              backgroundColor: "#1868db",
              marginVertical: 2,
              paddingLeft: 5,
              flexDirection: "row",
            }}
          >
            <View style={{ flex: 8, alignSelf: "center", flexDirection:'row' }}>
              <Text style={{ flex:1,color: "white" }}>{item.id}</Text>
              <Text style={{ flex:1,color: "white" }}>{item.name}</Text>
              <Text style={{ flex:1,color: "white" }}>{item.age}</Text>
            </View>
            <View style={{ flex: 2, alignItems: "flex-end" }}></View>
          </View>
        )}
        style={{ height: 300, backgroundColor:'gray' }}
      />
      
      
      <Button title="Fetch User" onPress={()=>{
        async function getUsers(){
          await fetchUsers();
        }
        getUsers();
        // console.log('fetch ',users)
      }}
      />

      <Button title="Add User" onPress={()=>{
        async function setUser(){
          await addUser('Bambang',100)
        }
        setUser();
      }}
      />
    </View>

  );
}