import { SafeAreaView } from "react-native-safe-area-context";
import { ExampleModal } from "../components/example/exampleModal";


export default function HomeScreen() {

  return (
    <SafeAreaView edges={["top"]}>
      <ExampleModal/>
    </SafeAreaView>
  );
}
