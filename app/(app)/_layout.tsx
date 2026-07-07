import { AuthGuard } from "@/guards/auth-guard";
import { Stack } from "expo-router";

export default function AppLayout() {
  return (
    <AuthGuard>
      <Stack>
        <Stack.Screen name="user/index" options={{ title: "Menu User" }} />
      </Stack>
    </AuthGuard>
  );
}
