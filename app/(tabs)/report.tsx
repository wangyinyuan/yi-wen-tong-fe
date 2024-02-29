import { lightTheme } from "@/constants/Color";
import { Image } from "expo-image";
import { router } from "expo-router";
import MarkDown from "react-native-markdown-display";
import { Button } from "react-native-paper";

import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";

const advice = "不喜欢健身房？开个家庭舞会，跳舞也是燃烧卡路里的好方法。";

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
        <ScrollView contentContainerStyle={{ alignItems: "center" }}>
          <Text style={[styles.textBase, styles.hintText]}>
            这是您的个人健康报告
          </Text>
          <View style={styles.topCardsLayout}>
            <View style={[styles.cardContainer, styles.smallCardContainer]}>
              <Text style={[styles.textBase, styles.adviceHint]}>小贴士：</Text>
              <Text
                style={[
                  styles.textBase,
                  styles.adviceText,
                ]}>{`"${advice}"`}</Text>
            </View>
            <View
              style={[
                styles.cardContainer,
                styles.smallCardContainer,
                { backgroundColor: lightTheme.bgPink3 },
              ]}>
              <Text style={[styles.textBase, styles.adviceHint]}>
                您的症状：
              </Text>
              <ScrollView
                contentContainerStyle={{
                  alignItems: "center",
                  justifyContent: "center",
                }}>
                <Text style={[styles.textBase, styles.symptomText]}>头疼</Text>
                <Text style={[styles.textBase, styles.symptomText]}>胃疼</Text>
                <Text style={[styles.textBase, styles.symptomText]}>感冒</Text>
                <Text style={[styles.textBase, styles.symptomText]}>感冒</Text>
              </ScrollView>
            </View>
          </View>
          <View style={[styles.cardContainer, styles.largeCardContainer]}>
            <MarkDown>
              {`# 健康状态
您的体重指数（BMI）为56.7，属于严重肥胖。这可能会增加您患心脏病、糖尿病、高血压和其他慢性疾病的风险。同时，您目前的症状包括咳嗽和肠胃 炎，可能需要进一步的医疗评估和治疗。
# 疾病风险评估
由于您的体重过重，您有较高的心脏病、糖尿病、高血压等慢性疾病的风险。此外，您的咳嗽可能是由于呼吸道感染或其他呼吸系统疾病引起的，需要进一步检查。肠胃炎可能是由于食物中毒或病毒感染引起的，也需要适当的治疗。
# 生活建议
1.  **饮食**：尝试采取健康的饮食习惯，包括多吃蔬菜、水果、全谷类食品，少吃高糖、高脂肪和加工食品。避免过度饮食，尤其是高热量食物。    
2.  **运动**：定期进行适量的运动可以帮助您减轻体重，改善健康状况。建议每周至少150分钟的中等强度有氧运动，如快步走或骑自行车。
3.  **医疗检查**：对于您的咳嗽和肠胃炎症状，建议尽快就医，以便得到正确的诊断和治疗。同时，定期进行体检，监测您的血压、血糖和胆固醇水平，以及心脏健康状况。
4.  **心理健康**：保持积极的心态，避免过度压力，这对于改善健康状况也是非常重要的。`}
            </MarkDown>
          </View>
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
  textBase: {
    fontSize: 16,
  },
  hintText: {
    fontSize: 20,
    color: lightTheme.tBlue2,
    fontWeight: "bold",
  },
  topCardsLayout: {
    width: "100%",
    marginTop: 20,
    marginBottom: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  smallCardContainer: {
    width: "46%",
    height: 180,
    backgroundColor: lightTheme.bgGreen2,
  },
  largeCardContainer: {
    width: "100%",
    backgroundColor: lightTheme.bgPurple1,
    marginBottom: 20,
  },
  cardContainer: {
    borderRadius: 25,
    padding: 20,
  },
  adviceText: {
    fontStyle: "italic",
  },
  adviceHint: {
    fontSize: 14,
    color: lightTheme.tGray1,
    marginBottom: 5,
  },
  symptomText: {
    fontSize: 18,
    marginBottom: 5,
    color: lightTheme.tBlue2,
  },
});
