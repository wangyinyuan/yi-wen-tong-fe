import { lightTheme } from "@/constants/Color";
import { Image } from "expo-image";
import MarkDown from "react-native-markdown-display";

import { useReports } from "@/api/swr/reports/reports";
import ErrorView from "@/components/Global/Error";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";

export default function ReportPage() {
  const { width, height } = useWindowDimensions();

  const { reports } = useReports();
  
  if (!reports) return <ErrorView pathname="/(tabs)/report"></ErrorView>;

  return (
    <View style={styles.container}>
      <Image
        source="https://yzt-1314519343.cos.ap-nanjing.myqcloud.com/foodGeneral/static/bg-flowr.png"
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
                ]}>{`"${reports.tips}"`}</Text>
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
                {reports.symptoms.map((item, index) => {
                  return (
                    <Text style={[styles.textBase, styles.symptomText]} key={index}>
                      {item}
                    </Text>
                  );
                })}
              </ScrollView>
            </View>
          </View>
          <View style={[styles.cardContainer, styles.largeCardContainer]}>
            <MarkDown>{reports.fullReport}</MarkDown>
          </View>
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
