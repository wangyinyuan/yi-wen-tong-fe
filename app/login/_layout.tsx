import { lightTheme } from "@/constants/Color";
import { useUser } from "@/context/UserContext";
import { Image } from "expo-image";
import { Slot, Stack, router } from "expo-router";
import { useEffect } from "react";
import { KeyboardAvoidingView, ScrollView, StyleSheet } from "react-native";

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
          source="https://yzt-1314519343.cos.ap-nanjing.myqcloud.com/foodGeneral/static/bg-pix.png"
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
