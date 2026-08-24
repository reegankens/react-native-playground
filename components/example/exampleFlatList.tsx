import { FlatList, Text, View } from "react-native";

interface FinalData {
  id: number;
  name: string;
  umur: number;
  gender: string;
}
const DATA: FinalData[] = [
  {
    id: 1,
    name: "bambang-1",
    umur: 100,
    gender: "L",
  },
  {
    id: 2,
    name: "bambang-2",
    umur: 100,
    gender: "L",
  },
  {
    id: 3,
    name: "bambang-3",
    umur: 100,
    gender: "p",
  },
  {
    id: 4,
    name: "bambang-4",
    umur: 100,
    gender: "p",
  },
  {
    id: 5,
    name: "bambang-5",
    umur: 100,
    gender: "p",
  },
];
export default function ExampleFlatList() {
  return (
    <FlatList
      data={DATA}
      keyExtractor={(item: { id: string }) => item.id}
      renderItem={({ item }: { item: FinalData }) => (
        <View
          style={{
            backgroundColor: "#1868db",
            marginVertical: 2,
            paddingLeft: 5,
            flexDirection: "row",
          }}
        >
          <View style={{ flex: 2, alignSelf: "center" }}>
            <Text style={{ color: "white" }}>
              {item.name} - {item.umur}
            </Text>
          </View>
          <View style={{ flex: 5, alignItems: "flex-end" }}></View>
        </View>
      )}
    />
  );
}
