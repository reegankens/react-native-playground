import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { useSession } from "@/context/auth";
import { router } from "expo-router";
import { useState } from "react";
import { ScrollView, TextInput } from "react-native";

/* ThemedText memiliki warna default putih, menggunakan style. */
/* jadi perlu tanda seru/important (!) */

export default function LoginScreen() {
  const { signIn } = useSession();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async () => {
    try {
      setError(null);
      await signIn(username, password);
      router.replace("/");
    } catch (e) {
      setError(e instanceof Error ? e.message : "Login gagal");
    }
  };

  return (
    <ScrollView className="flex-1 p-4">
      <ThemedView className="flex-1 p-4">
        <TextInput
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
          className="text-white bg-gray-700 p-2 rounded mt-2"
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          className="text-white bg-gray-700 p-2 rounded mt-2"
        />

        {error && <ThemedText className="!text-red-500">{error}</ThemedText>}
        <ThemedText
          onPress={handleLogin}
          className="text-white bg-blue-500 p-2 rounded mt-4"
        >
          Login
        </ThemedText>
      </ThemedView>
    </ScrollView>
  );
}
