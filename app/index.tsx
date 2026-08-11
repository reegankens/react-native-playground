// import { ThemedText } from "@/components/themed-text";
// import { ThemedView } from "@/components/themed-view";
// import EvilIcons from "@expo/vector-icons/EvilIcons";
import React, { useEffect, useMemo, useState } from "react";
import { Button, Text, TextInput, View } from "react-native";

interface Todo {
  id: string;
  title: string;
}
interface Mainan {
  namaMobil: string;
  namaBoneka: string;
}
interface Children {
  name: string;
  umur: number;
  mainan: Mainan[];
}
interface Parent {
  name: string;
  umur: number;
  children: Children[];
}

export default function HomeScreen() {
  const [idTodo, setIdTodo] = useState<string>("");
  const [getParent, setParent] = useState<Parent>({
    name: "Bambang",
    umur: 89,
    children: [
      {
        name: "anak bambang",
        umur: 100,
        mainan: [
          {
            namaMobil: "mobil kayu",
            namaBoneka: "boneka beruang",
          },
        ],
      },
      {
        name: "anak angkat bambang",
        umur: 100,
        mainan: [
          {
            namaMobil: "mobil kayu",
            namaBoneka: "boneka beruang",
          },
        ],
      },
    ],
  });
  const addBtn = () => {
    console.log("click");
  };
  useMemo(() => {}, []);
  useEffect(() => {
    console.log("useWatchEffect", idTodo);
  }, [idTodo]);

  return (
    <View>
      <Text>{idTodo}</Text>
      <TextInput
        placeholder="halo"
        value={idTodo}
        onChangeText={setIdTodo}
      ></TextInput>
      <Button title="ADD" onPress={addBtn}></Button>
      <Text>{getParent.name}</Text>
      <Text>{getParent.umur}</Text>
      {getParent.children.map((children) => {
        return (
          <>
            <Text style={{ marginLeft: 10 }}>{children.name}</Text>;
            {children.mainan.map((mainain) => (
              <View style={{ marginLeft: 20 }}>
                <Text>{mainain.namaBoneka}</Text>
                <Text>{mainain.namaMobil}</Text>
              </View>
            ))}
          </>
        );
      })}
    </View>
  );
}
