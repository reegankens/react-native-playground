import Constants from "expo-constants";
import { StyleSheet } from "react-native";
import { WebView, WebViewNavigation } from "react-native-webview";

export default function App() {
  const handleNavigation = (navState: WebViewNavigation) => {
    console.log("url: ", navState.url);

    const url = new URL(navState.url);
    // const code = url.searchParams.get("fpr");
    const code = url.searchParams.get("code");

    console.log("code ", code); //12345
  };

  return (
    <WebView
      style={styles.container}
      source={{ uri: "http://10.1.2.10:90/helloworld/dummy_sso/" }}
      onNavigationStateChange={handleNavigation}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
});
