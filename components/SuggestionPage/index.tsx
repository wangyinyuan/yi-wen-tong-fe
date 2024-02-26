import { lightTheme } from "@/constants/Color";
import { Image } from "expo-image";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { router } from "expo-router";

const activeOpacity = 0.8;

export default function Suggestions() {
  return (
    <View style={style.container}>
      <TouchableOpacity
        style={[style.bg, style.food]}
        activeOpacity={activeOpacity}
        onPress={() => {
          router.push("/suggestion/food/");
        }}>
        <View>
          <Image
            source={
              "https://cdn.jsdelivr.net/gh/wangyinyuan/Picgo/0edeceb92ac5d3646c851aa106cab4f6.png"
            }
            style={[style.img, style.foodImg]}></Image>
          <Text style={[style.text, style.foodText]}>饮</Text>
          <Text
            style={[
              style.text,
              style.foodText,
              {
                transform: [
                  { translateX: 30 },
                  { rotate: "-10deg" },
                  { translateY: -30 },
                ],
              },
            ]}>
            食
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={[style.bg, style.sports]}
        activeOpacity={activeOpacity}
        onPress={() => {
          router.push("/suggestion/sports");
        }}>
        <View>
          <Image
            source={
              "https://cdn.jsdelivr.net/gh/wangyinyuan/Picgo/CDA2B2650E9A53EF46B6A691D75B2473.png"
            }
            style={[style.img, style.sportsImg]}></Image>
          <Text style={[style.text, style.sportsText]}>运</Text>
          <Text
            style={[
              style.text,
              style.sportsText,
              {
                transform: [
                  { translateX: 490 },
                  { translateY: 160 },
                  { rotate: "20deg" },
                ],
              },
            ]}>
            动
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 40,
    fontWeight: "bold",
    color: lightTheme.tWhite,
  },
  foodText: {
    transform: [{ translateX: 20 }],
  },
  sportsText: {
    transform: [{ translateX: 530 }, { translateY: 50 }],
    color: "black",
  },
  bg: {
    width: 600,
    height: 500,
    borderRadius: 400,
    position: "absolute",
  },
  food: {
    backgroundColor: lightTheme.bgPink2,
    transform: [
      { rotate: "-40deg" },
      { translateX: 180 },
      { translateY: -180 },
    ],
  },
  sports: {
    backgroundColor: lightTheme.bgPurple1,
    transform: [
      { rotate: "-45deg" },
      { translateX: -470 },
      { translateY: 120 },
    ],
  },
  img: {
    width: 180,
    height: 220,
  },
  foodImg: {
    transform: [{ rotate: "40deg" }, { translateX: 200 }, { translateY: 100 }],
  },
  sportsImg: {
    transform: [{ rotate: "45deg" }, { translateX: 300 }, { translateY: -160 }],
  },
});
