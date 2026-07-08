import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { ScrollView } from "react-native";

export default function MasterScreen() {
  return (
    <ScrollView>
      <ThemedView className="p-4">
        <ThemedText>Master</ThemedText>
      </ThemedView>
    </ScrollView>
  );
}
