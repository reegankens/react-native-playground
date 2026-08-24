import { ExampleZustand } from "@/components/example/exampleZustand";
import { SafeAreaView } from "react-native-safe-area-context";


export default function HomeScreen() {

  return (
    <SafeAreaView edges={["top"]}>
      <ExampleZustand/>
    </SafeAreaView>
  );
}
