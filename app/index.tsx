import { ExampleProvider } from "@/components/example/exampleProvider";
import { SafeAreaView } from "react-native-safe-area-context";


export default function HomeScreen() {

  return (
    <SafeAreaView edges={["top"]}>
      <ExampleProvider/>
    </SafeAreaView>
  );
}
