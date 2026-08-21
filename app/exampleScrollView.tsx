import { Image, ScrollView, Text, View } from "react-native";

export function ExampleScrollView() {
  return (
    <ScrollView>
      {Array.from({ length: 100 }, (_, index) => (
        <View
          key={index}
          style={{
            backgroundColor: "#1868db",
            marginVertical: 2,
            paddingLeft: 5,
            flexDirection: "row",
          }}
        >
          <View style={{ flex: 8, alignSelf: "center" }}>
            <Text style={{ color: "white" }}>{index + 1}</Text>
          </View>
          <View style={{ flex: 2, alignItems: "flex-end" }}>
            <Image
              width={50}
              height={50}
              source={{
                uri: "https://reactnative.dev/img/tiny_logo.png",
              }}
            />
          </View>
        </View>
      ))}
    </ScrollView>
  );
}
