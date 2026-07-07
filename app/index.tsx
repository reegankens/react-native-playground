import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { useSession } from "@/context/auth";
import { AuthGuard } from "@/guards/auth-guard";
import { router } from "expo-router";
import { useState } from "react";
import { ScrollView } from "react-native";

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
    <AuthGuard>
      <ScrollView className="flex-1 p-4">
        <ThemedView className="flex-1 p-4">
          <ThemedText onPress={() => router.navigate("/user")}>
            • User
          </ThemedText>
        </ThemedView>
        <ThemedView className="flex-1 p-4">
          <ThemedText onPress={handleLogout} className="!text-red-500">
            Logout
          </ThemedText>
        </ThemedView>
      </ScrollView>
    </AuthGuard>
  );
}
