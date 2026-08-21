import { SafeAreaView } from "react-native-safe-area-context";
import ExampleFlatList from "./exampleFlatList";

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1" edges={["top"]}>
      <ExampleFlatList />
    </SafeAreaView>
  );
}
