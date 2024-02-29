import { lightTheme } from "@/constants/Color";
import { Image } from "expo-image";
import { router } from "expo-router";
import { Button } from "react-native-paper";

import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";

export default function ReportPage() {
  const { width, height } = useWindowDimensions();

  return (
    <View style={styles.container}>
      <Image
        source="https://cdn.jsdelivr.net/gh/wangyinyuan/Picgo/illustration.png"
        style={[styles.decorationImg, { width: width - 50 }]}
        contentFit="contain"></Image>
      <Text></Text>
      <View style={[styles.mainLayout]}>
        <ScrollView>
          <Button
            onPress={() => {
              router.push("/login/");
            }}
            mode="contained">
            跳转到登录页面
          </Button>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: lightTheme.bgPink2,
    alignItems: "center",
  },
  decorationImg: {
    position: "absolute",
    height: 220,
    zIndex: 10,
  },
  mainLayout: {
    marginTop: 160,
    flex: 1,
    width: "95%",
    backgroundColor: lightTheme.pageBackground,
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    padding: 20,
    paddingTop: 30,
    paddingBottom: 0,
  },
});
