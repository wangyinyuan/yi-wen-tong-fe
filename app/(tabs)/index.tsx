import Dialog from "@/components/ChatPage/Dialog";
import MyDrawer from "@/components/Global/MyDrawer";
import { useUser } from "@/context/UserContext";
import useTheme from "@/hooks/useTheme";
import { useState } from "react";
import { StyleSheet, View } from "react-native";

export default function ChatPage() {
  // 获得 token
  const { user } = useUser();

  // 导入颜色模式
  const theme = useTheme();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.pageBackground,
    },
    maxHeader: {
      fontFamily: "mon-semibold",
      fontSize: 50,
      textAlign: "center",
    },
  });

  return (
    <View style={styles.container}>{user && user.token && <Dialog />}</View>
  );
}
