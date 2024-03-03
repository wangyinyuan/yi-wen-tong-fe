import { useFoodCardsInfo } from "@/api/swr/advice/food";
import Indicator from "@/components/Global/Indicator";
import FoodCard from "@/components/SuggestionPage/Food/FoodCard";
import { lightTheme } from "@/constants/Color";
import { blurHash } from "@/constants/imgHolder";
import { Image } from "expo-image";
import { ScrollView, StyleSheet, Text, View } from "react-native";

function getTimeText(): string {
  const year = new Date().getFullYear();
  const month = new Date().getMonth() + 1;
  const day = new Date().getDate();
  return `${year}年${month}月${day}日`;
}

let timeText = getTimeText();

export default function Food() {
  // 请求食物卡片数据
  const { foodCards, isLoading } = useFoodCardsInfo();

  // 如果数据正在加载或者数据为空则显示加载指示器
  if (isLoading || !foodCards) return <Indicator animating={true} />;

  return (
    <ScrollView contentContainerStyle={[styles.row, styles.scrollLayout]}>
      <View style={styles.column}>
        <Text style={styles.timeText}>{timeText}</Text>
        <FoodCard
          {...foodCards[0]}
          key="1"
          style={styles.foodCardLayout}></FoodCard>
        <FoodCard
          {...foodCards[2]}
          key="2"
          style={styles.foodCardLayout}></FoodCard>
      </View>
      <View style={styles.column}>
        <Image
          source="https://cdn.jsdelivr.net/gh/wangyinyuan/Picgo/0f7835832ed948700571a2ffe47c5e66_720.png"
          style={styles.character}
          contentFit="contain"
          placeholder={blurHash}
          onError={(error) => console.error(error)}></Image>
        <FoodCard
          {...foodCards[1]}
          key="3"
          style={styles.foodCardLayout}></FoodCard>
        <FoodCard
          {...foodCards[3]}
          key="4"
          style={styles.foodCardLayout}></FoodCard>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollLayout: {
    // 空
  },
  column: {
    alignItems: "center",
    // borderWidth: 3,
  },
  row: {
    flexDirection: "row",
  },
  timeText: {
    fontSize: 25,
    fontWeight: "bold",
    color: lightTheme.tPurple1,
    marginLeft: 30,
    marginTop: 30,
    marginBottom: 30,
  },
  character: {
    width: 170,
    height: 200,
    marginTop: 10,
  },
  foodCardLayout: {
    marginBottom: 25,
  },
});
