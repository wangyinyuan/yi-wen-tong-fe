import { lightTheme } from "@/constants/Color";
import { Image } from "expo-image";
import { Slot, Stack } from "expo-router";
import { StyleSheet, View } from "react-native";

export default function LoginLayout() {
  return (
    <View style={styles.container}>
      <Image
        source="https://cdn.jsdelivr.net/gh/wangyinyuan/Picgo/9755d89cc05fc2c812cc66b83a8248cd.png"
        style={styles.img}
      />
      <Slot></Slot>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: lightTheme.pageBackground,
  },
  img: {
    height: 240,
    width: "100%",
    marginBottom: 30,
  },
});

export function LoginStack() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="register" />
    </Stack>
  );
}
