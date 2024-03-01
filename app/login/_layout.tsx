import { lightTheme } from "@/constants/Color";
import { Image } from "expo-image";
import { Slot, Stack } from "expo-router";
import { KeyboardAvoidingView, ScrollView, StyleSheet } from "react-native";
import { useUser } from "@/context/UserContext";
import { useEffect } from "react";
import { router } from "expo-router";

export default function LoginLayout() {
  // 如果已经有用户 token, 则直接跳转到主页
  const { user } = useUser();

  useEffect(() => {
    if (user) {
      router.replace("/(tabs)");
    }
  }, [user]);

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: lightTheme.pageBackground }}>
      <ScrollView contentContainerStyle={styles.container}>
        <Image
          source="https://cdn.jsdelivr.net/gh/wangyinyuan/Picgo/9755d89cc05fc2c812cc66b83a8248cd.png"
          style={styles.img}
        />
        <Slot></Slot>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
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
