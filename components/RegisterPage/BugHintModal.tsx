import { lightTheme } from "@/constants/Color";
import * as WebBrowser from "expo-web-browser";
import { StyleSheet, Text, View } from "react-native";
import Modal from "react-native-modal";
import { Button } from "react-native-paper";

export default function BugHintModal({
  isVisible = true,
  handleClose,
}: {
  isVisible?: boolean;
  handleClose?: () => void;
}) {
  return (
    <Modal
      isVisible={isVisible}
      backdropOpacity={0.2}
      style={styles.modal}
      animationIn="flipInX"
      animationOut="flipOutX"
      onBackdropPress={handleClose}>
      <View style={styles.container}>
        <Text style={styles.title}>公告</Text>
        <Text style={styles.text}>
          {`欢迎使用医智通👏
现在的程序还处于 beta版本阶段，没有在所有设备上完整测试过📱
根据用户反馈我们整理了目前已知的问题，请查收🙇‍♂️`}
        </Text>
        <Button
          mode="contained-tonal"
          style={styles.button}
          onPress={async () => {
            await WebBrowser.openBrowserAsync(
              "https://kvoc2hsxxda.feishu.cn/docx/OHt9dvRSGoE6FLxFZHpcOhU4n8f"
            );
          }}>
          在线文档
        </Button>
        <Text style={styles.hint}>点击外部关闭</Text>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 250,
    padding: 20,
    backgroundColor: lightTheme.pageBackground,
    borderRadius: 20,
    alignItems: "center",
  },
  modal: {
    alignItems: "center",
  },
  text: {
    fontSize: 15,
    lineHeight: 25,
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: lightTheme.tBlue2,
    textAlign: "center",
    marginBottom: 10,
  },
  button: {
    width: "70%",
    marginBottom: 10,
  },
  hint: {
    fontStyle: "italic",
    color: lightTheme.tGray3,
  },
});
