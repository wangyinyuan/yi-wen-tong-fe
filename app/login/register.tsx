import { registerReq } from "@/api/http/user/register";
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

export default function Register() {
  // 表单信息
  const [form, setForm] = useState<{
    email: string;
    password: string;
    name: string;
  }>({
    email: "",
    password: "",
    name: "",
  });

  // 获取用户信息
  const { login } = useUser();

  const [isEmailValid, setIsEmailValid] = useState(true);

  // 当 form 中有空字符串时，禁用登录按钮
  const isFormValid = () => {
    return form.email && form.password && form.name;
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

  const handleRegister = async () => {
    // 提交表单信息
    const res = await registerReq(form);
    if (res) {
      login(res);
      Toast.show("注册成功！", toastSuccessConfig);
      router.replace("/(tabs)");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleLayout}>
        <Text style={[styles.textBase, styles.title]}>注册</Text>
        <View style={styles.registerLayout}>
          <Text style={[styles.textBase, styles.registerText]}>
            返回登录页面 {`->`}
          </Text>
          <Button onPress={() => router.push("/login/")}>登录</Button>
        </View>
        <InputBox
          input={form.name}
          setInput={(text) => {
            setForm({ ...form, name: text });
          }}
          label="用户名"
          containerStyle={styles.textInputContainer}></InputBox>
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
          onPress={handleRegister}
          mode="contained-tonal"
          disabled={!isFormValid() || !isEmailValid}
          style={styles.loginButton}>
          注册
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
