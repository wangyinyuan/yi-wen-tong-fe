import Divider from "@/components/Global/Divider";
import { lightTheme } from "@/constants/Color";
import { FoodCardProps } from "@/types/Food";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";

export default function FoodCard({
  img,
  title,
  calorieRange,
  unit,
  foods,
  style,
}: FoodCardProps) {
  const getImageHeight = () => {
    switch (title) {
      case "早餐":
        return 160;
      case "晚餐":
        return 180;
      case "午餐":
        return 150;
      default:
        return 130;
    }
  };

  const imgHeight = getImageHeight();

  const foodList = foods.map((food, index) => (
    <Text key={index} style={styles.food}>
      {food}
    </Text>
  ));

  return (
    <View style={[styles.container, style]}>
      <View style={styles.container}>
        <Image
          source={img}
          style={{ ...styles.img, height: imgHeight }}></Image>
      </View>
      <View style={[styles.row, styles.titleLayout]}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.calorie}>{`${calorieRange} ${unit}`}</Text>
      </View>

      <View style={{ alignItems: "center", marginTop: 2, marginBottom: 5 }}>
        <Divider width="90%"></Divider>
      </View>
      <View style={styles.foodLayout}>{foodList}</View>
    </View>
  );
}

// 图片和边框的圆角
const borderRadius = 20;

const styles = StyleSheet.create({
  container: {
    backgroundColor: lightTheme.pageBackground,
    width: 160,
    borderRadius: borderRadius,
    // shadow
    elevation: 10,
  },
  row: {
    flexDirection: "row",
  },
  titleLayout: {
    alignItems: "flex-end",
    justifyContent: "space-evenly",
    marginTop: 5,
  },
  img: {
    width: "100%",
    borderRadius: borderRadius,
  },
  title: {
    fontSize: 20,
    fontWeight: "800",
  },
  calorie: {
    fontSize: 14,
    color: lightTheme.tGray2,
    fontWeight: "bold",
  },
  foodLayout: {
    marginLeft: 12,
    flexWrap: "wrap",
    marginBottom: 10,
  },
  food: {
    fontSize: 14,
    fontWeight: "bold",
    lineHeight: 20,
  },
});
