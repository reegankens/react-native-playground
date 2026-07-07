import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { ScrollView } from "react-native";

export default function LoginScreen() {
  return (
    <ScrollView style={{ flex: 1, padding: 16 }}>
      <ThemedView style={{ flex: 1, padding: 16 }}>
        <ThemedText>• Login</ThemedText>
      </ThemedView>
    </ScrollView>
  );
}
