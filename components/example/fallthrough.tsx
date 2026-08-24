import { BaseView } from "@/components/base-view";
import { BaseButton } from "@/components/button/base-button";
import { Text } from "react-native";

export function Fallthrough() {
  const baseButtonPress = () => {
    console.log("baseButtonPress");
  };
  return (
    <BaseView style={{ backgroundColor: "red" }}>
      <Text style={{ color: "white" }}>Hello Fallthrough</Text>
      <BaseButton title="Submit" onPress={baseButtonPress} />
    </BaseView>
  );
}
