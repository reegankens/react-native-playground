import { SafeAreaView } from "react-native-safe-area-context";
import { ExampleVirtualizedList } from "./exampleVirtualiedList";

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1" edges={["top"]}>
      <ExampleVirtualizedList />
    </SafeAreaView>
  );
}
