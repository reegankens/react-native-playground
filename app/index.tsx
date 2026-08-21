import { SafeAreaView } from "react-native-safe-area-context";
import { ExampleScrollView } from "./exampleScrollView";

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1" edges={["top"]}>
      <ExampleScrollView />
    </SafeAreaView>
  );
}
