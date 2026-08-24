import { ChildButton } from "@/components/button/child-button";
import { Text, View } from "react-native";

export function ParentChild() {
  return (
    <View>
      <Text>Hello Parent Child</Text>
      <ChildButton
        onChange={(value: string) => {
          console.log("Parent : ", value);
        }}
      >
        {/* prop children */}
        <Text style={{ color: "white" }}>SUBMIT</Text>
      </ChildButton>
    </View>
  );
}
