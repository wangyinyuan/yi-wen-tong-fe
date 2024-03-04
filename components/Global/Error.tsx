import { lightTheme } from "@/constants/Color";
import { Image } from "expo-image";
import { router } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";

export default function ErrorView({
  pathname,
  params,
}: {
  pathname: string;
  params?: any;
}) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.img}
        source="https://yzt-1314519343.cos.ap-nanjing.myqcloud.com/ghost-bian.png"></Image>
      <Text style={styles.text}>生活总有意外，有时候不能太急( •̀ ω •́ )✧</Text>
      <Text style={[styles.text, styles.hintText]}>
        （⚠️：如果你是新用户，可能是后端数据还没生成好，可以稍等 1-2
        分钟后重试😘）
      </Text>
      <Button
        onPress={() => {
          // @ts-ignore
          router.push({ pathname, params });
        }}
        mode="contained-tonal">
        重新加载
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  text: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 30,
    fontStyle: "italic",
    color: lightTheme.tGray1,
  },
  img: {
    width: 150,
    height: 150,
    marginBottom: 30,
  },
  hintText: {
    fontSize: 14,
    fontStyle: 'normal',
    color: lightTheme.tGray3
  }
});
