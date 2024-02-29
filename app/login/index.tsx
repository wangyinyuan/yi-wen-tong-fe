import { lightTheme } from "@/constants/Color";
import { router } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";

export default function Login() {
    

  return (
    <View style={styles.container}>
      <View style={styles.titleLayout}>
        <Text style={[styles.textBase, styles.title]}>账号密码登录</Text>
        <View style={styles.registerLayout}>
          <Text style={[styles.textBase, styles.registerText]}>还没有账号？点击跳转到注册 {`->`}</Text>
          <Button onPress={() => router.push("/login/register")}>注册</Button>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: "80%",
    alignItems: "center",
  },
  titleLayout: {
    width: "100%",
  },
  registerLayout : {
    flexDirection: "row",
    alignItems: "center",
  },
  textBase: {
    fontSize: 14,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  registerText: {
    color: lightTheme.tGray3,
  }
});
