import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { router } from "expo-router";
import { ScrollView } from "react-native";

export default function HomeScreen() {
  return (
    <ScrollView style={{ flex: 1, padding: 16 }}>
      <ThemedView style={{ flex: 1, padding: 16 }}>
        <ThemedText onPress={() => router.navigate("/user")}>• User</ThemedText>
      </ThemedView>
      <ThemedView style={{ flex: 1, padding: 16 }}>
        <ThemedText onPress={() => router.navigate("/login")}>
          • Login
        </ThemedText>
      </ThemedView>
    </ScrollView>
  );
}
