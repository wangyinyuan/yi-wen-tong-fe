import { loginReq } from "@/api/http/user/login";
import { InputBox } from "@/components/Global/InputBox";
import { lightTheme } from "@/constants/Color";
import { toastSuccessConfig } from "@/constants/ToastConfig";
import { useUser } from "@/context/UserContext";
import { checkEmail } from "@/utils/checkEmail";
import { router } from "expo-router";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, HelperText } from "react-native-paper";
import Toast from "react-native-root-toast";

export default function Login() {
  // 表单信息
  const [form, setForm] = useState<{ email: string; password: string }>({
    email: "",
    password: "",
  });

  // 获取用户信息
  const { login } = useUser();

  const [isEmailValid, setIsEmailValid] = useState(true);

  // 当 form 中有空字符串时，禁用登录按钮
  const isFormValid = () => {
    return form.email && form.password;
  };

  const handleEmailBlur = () => {
    if (!form.email) {
      setIsEmailValid(true);
      return;
    }

    if (checkEmail(form.email)) {
      setIsEmailValid(true);
    } else {
      setIsEmailValid(false);
    }
  };

  const handleLogin = async () => {
    // 提交表单信息
    const res = await loginReq(form);
    if (res) {
      login(res);
      Toast.show("登录成功！", toastSuccessConfig);
      router.replace("/(tabs)");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleLayout}>
        <Text style={[styles.textBase, styles.title]}>账号密码登录</Text>
        <View style={styles.registerLayout}>
          <Text style={[styles.textBase, styles.registerText]}>
            还没有账号？点击跳转到注册 {`->`}
          </Text>
          <Button onPress={() => router.push("/login/register")}>注册</Button>
        </View>
        <InputBox
          input={form.email}
          setInput={(text) => {
            setForm({ ...form, email: text });
          }}
          placeholder="注意邮箱格式哦"
          label="邮箱"
          containerStyle={styles.textInputContainer}
          handleBlur={handleEmailBlur}
          error={!isEmailValid}></InputBox>
        <HelperText
          type="error"
          visible={!isEmailValid}
          style={styles.helperText}>
          请检查邮箱格式！
        </HelperText>
        <InputBox
          input={form.password}
          setInput={(text) => {
            setForm({ ...form, password: text });
          }}
          label="密码"
          containerStyle={styles.textInputContainer}
          secureTextEntry={true}></InputBox>
        <Button
          onPress={handleLogin}
          mode="contained-tonal"
          disabled={!isFormValid() || !isEmailValid}
          style={styles.loginButton}>
          登录
        </Button>
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
  registerLayout: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
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
  },
  textInputContainer: {
    marginBottom: 20,
  },
  helperText: {
    marginTop: -20,
  },
  loginButton: {
    marginTop: 10,
    marginBottom: 20,
  },
});
