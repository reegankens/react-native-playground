import { Text, View, VirtualizedList } from "react-native";

type Data = {
  id: string;
  name: string;
};
const data: Data[] = [
  { id: "1", name: "bambang" },
  { id: "2", name: "bambang 2" }
];

const renderItem = ({item,index}: {item:Data, index:number}) => {
  return (
    <View style={{padding:4, marginVertical:2, backgroundColor:'gray'}}>
      <Text>index: {index} -- id: {item.id}</Text>
      <Text>name: {item.name}</Text>
    </View>
  );
};
export function ExampleVirtualizedList() {
  return (
    <VirtualizedList 
      data={data}
      renderItem={renderItem}
      getItem={(item,index)=> item[index] }
      getItemCount={(item) => item.length}
    />

  );
}
