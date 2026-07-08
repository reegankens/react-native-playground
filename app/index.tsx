import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import React, { useState } from "react";
import {
  Button,
  FlatList,
  Pressable,
  ScrollView,
  TextInput,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface Todo {
  id: string;
  title: string;
}

export default function HomeScreen() {
  const [idTodo, setIdTodo] = useState<string | null>(null);
  const [dataTodoList, setDataTodoList] = useState<Todo[]>([]);
  const [textTodo, setTextTodo] = useState("");

  const handleAddTodo = () => {
    setDataTodoList([
      ...dataTodoList,
      { id: Math.random().toString(), title: textTodo },
    ]);
    setTextTodo("");
  };
  const handleDeleteTodo = (id: string) => {
    setDataTodoList(dataTodoList.filter((todo) => todo.id !== id));
  };
  const handleEditTodo = (id: string, newTitle: string) => {
    setDataTodoList(
      dataTodoList.map((todo) =>
        todo.id === id ? { ...todo, title: newTitle } : todo,
      ),
    );
    setIdTodo(null);
    setTextTodo("");
  };

  const renderTodoList = ({ item }: { item: Todo }) => {
    return (
      <ThemedView className="flex-row items-center gap-2 p-4">
        <ThemedText>{item.title}</ThemedText>
        <EvilIcons
          name="trash"
          size={24}
          color="red"
          onPress={() => handleDeleteTodo(item.id)}
        />
        <EvilIcons
          name="pencil"
          size={24}
          color="white"
          onPress={() => {
            setIdTodo(item.id);
            setTextTodo(item.title);
          }}
        />
      </ThemedView>
    );
  };

  return (
    <SafeAreaView edges={["top"]}>
      <ScrollView>
        <ThemedText className="text-lg font-bold p-4">Todo List:</ThemedText>
        <FlatList data={dataTodoList} renderItem={renderTodoList} />

        <ThemedView className="flex p-4">
          <TextInput
            placeholder="Input Todo"
            value={textTodo}
            onChangeText={setTextTodo}
            className="border border-gray-300 rounded-md p-2 !text-white"
          />
        </ThemedView>
        <ThemedView className="flex p-4">
          {!idTodo && (
            <Button disabled={!textTodo} title="ADD" onPress={handleAddTodo} />
          )}
          {idTodo && (
            <>
              {/* <>...</> <- React Fragment, menggabungkan beberapa elemen */}
              <Button
                title="EDIT"
                onPress={() => handleEditTodo(idTodo, textTodo)}
              />

              <Pressable
                className="bg-red-500 p-1 active:opacity-70 mt-2"
                onPress={() => {
                  setIdTodo(null);
                  setTextTodo("");
                }}
              >
                <ThemedText className="text-white text-center">
                  CANCEL
                </ThemedText>
              </Pressable>
            </>
          )}
        </ThemedView>
      </ScrollView>
    </SafeAreaView>
  );
}
