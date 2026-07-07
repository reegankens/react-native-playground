import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { ScrollView } from "react-native";

export default function UserScreen() {
  return (
    <ScrollView className="flex-1 p-4">
      <ThemedView className="flex-1 p-4">
        <ThemedText>User</ThemedText>
      </ThemedView>
    </ScrollView>
  );
}
