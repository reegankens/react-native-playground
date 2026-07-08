import { AuthGuard } from "@/guards/auth-guard";
import { Stack } from "expo-router";

export default function AppLayout() {
  return (
    <AuthGuard>
      <Stack>
        <Stack.Screen
          name="index"
          options={{ headerShown: false, title: "Home" }}
        />
        <Stack.Screen name="user/index" options={{ title: "User" }} />
        <Stack.Screen name="master/index" options={{ title: "Master" }} />
      </Stack>
    </AuthGuard>
  );
}
