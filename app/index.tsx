import { BaseButton } from "@/components/button/base-button";
import { Text } from "@react-navigation/elements";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1" edges={["top"]}>
      <View>
        <Text>Hello World</Text>
        <BaseButton
          onChange={(value: string) => {
            console.log("Parent : ", value);
          }}
        >
          {/* prop children */}
          <Text style={{ color: "white" }}>SUBMIT</Text>
        </BaseButton>
      </View>
    </SafeAreaView>
  );
}
