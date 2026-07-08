import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { useSession } from "@/context/auth";
import { router } from "expo-router";
import { useState } from "react";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  const { signOut } = useSession();
  const [error, setError] = useState<string | null>(null);
  const handleLogout = async () => {
    try {
      setError(null);
      signOut();
      router.replace("/login");
    } catch (e) {
      setError(e instanceof Error ? e.message : "Logout gagal");
    }
  };

  return (
    <SafeAreaView className="flex-1" edges={["top"]}>
      <ScrollView>
        <ThemedView className="p-4">
          <ThemedText onPress={() => router.navigate("/user")}>
            • User
          </ThemedText>
        </ThemedView>
        <ThemedView className="p-4">
          <ThemedText onPress={() => router.navigate("/master")}>
            • Master
          </ThemedText>
        </ThemedView>
        <ThemedView className="p-4">
          <ThemedText onPress={handleLogout} className="!text-red-500">
            Logout
          </ThemedText>
        </ThemedView>
      </ScrollView>
    </SafeAreaView>
  );
}
