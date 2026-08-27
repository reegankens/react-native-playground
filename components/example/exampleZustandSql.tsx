import { useUserStoreSqlite } from "@/stores/userStore.sqlite";

import { Button, Text, View } from "react-native";


export function  ExampleZustandSql(){

  const {users, loading, fetchUsers, addUser} = useUserStoreSqlite();
  return (
    <View>
      {loading && <Text>Loading..</Text>}

      {
        users.map(user => {
          return (
            <View key={user.id} style={{flex:1,flexDirection:'row'}} >
              <Text >{user.id}</Text>
              <Text >{user.name}</Text>
              <Text >{user.age}</Text>
            </View>
          )
        })
      }
      
      <Button title="Fetch User" onPress={()=>{
        async function getUsers(){
          await fetchUsers();
        }
        getUsers();
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