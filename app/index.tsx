import { SafeAreaView } from "react-native-safe-area-context";
import { Fallthrough } from "./fallthrough";

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1" edges={["top"]}>
      <Fallthrough />
    </SafeAreaView>
  );
}
