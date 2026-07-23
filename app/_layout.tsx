import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";

import "@/global.css";

import { useColorScheme } from "@/hooks/use-color-scheme";
import { useEffect, useState } from "react";

export const unstable_settings = {
  anchor: "index",
};

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      if (__DEV__) {
        await import("@/msw.polyfills");
        const { server } = await import("@/mocks/server");
        server.listen();
      }

      setReady(true);
    }

    prepare();
  }, []);

  if (!ready) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === "dark" ? DefaultTheme : DarkTheme}>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
