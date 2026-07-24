import { DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";

import "@/global.css";

import { useColorScheme } from "@/hooks/use-color-scheme";

export const unstable_settings = {
  anchor: "index",
};

export default function RootLayout() {
  const colorScheme = useColorScheme();
  // const [ready, setReady] = useState(false);

  // useEffect(() => {
  //   async function prepare() {
  //     console.log("prepare ", __DEV__);
  //     if (__DEV__) {
  //       await import("@/msw.polyfills");
  //       const { server } = await import("@/mocks/server");
  //       server.listen();
  //     }

  //     setReady(true);
  //   }
  //   console.log("prepare start: ", __DEV__);
  //   prepare();
  // }, []);

  // if (!ready) {
  //   return null;
  // }

  return (
    <ThemeProvider value={DefaultTheme}>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
