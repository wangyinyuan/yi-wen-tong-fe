import { lightTheme } from "@/constants/Color";
import { Image } from "expo-image";
import { router } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";

export default function EmptyView() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.img}
        source="https://yzt-1314519343.cos.ap-nanjing.myqcloud.com/ghost-cry.png"></Image>
      <Text style={styles.text}>
        你似乎来到了荒地，工程师正在玩命开发中……(╯°□°）╯︵ ┻━┻
      </Text>
      <Button
        onPress={() => {
          // @ts-ignore
          router.back();
        }}
        mode="contained-tonal">
        返回
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
    marginBottom: 20,
  },
});
