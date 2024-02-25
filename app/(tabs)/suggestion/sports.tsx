import { lightTheme } from "@/constants/Color";
import { sportsImgs } from "@/data/sports";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { useState } from "react";
import { Dimensions, ScrollView, StyleSheet, Text, View } from "react-native";
import { ToggleButton } from "react-native-paper";
import Carousel from "react-native-reanimated-carousel";

const WIDTH = Dimensions.get("window").width;
const ITEM_WIDTH = Math.round(WIDTH * 0.6);

export default function Sports() {
  const [selectedContent, setSelectedContent] = useState("content");

  const renderItem = ({ item }: { item: string }) => {
    return (
      <View style={styles.imgCard}>
        <Image source={item} style={styles.img}></Image>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <Carousel
        loop
        data={sportsImgs as Array<string>}
        mode="horizontal-stack"
        modeConfig={{
          stackInterval: 25,
          moveSize: 200,
          scaleInterval: 0.08,
          opacityInterval: 0.25,
          rotateZDeg: 0,
        }}
        renderItem={renderItem}
        width={ITEM_WIDTH}
        height={ITEM_WIDTH}
        pagingEnabled={false}
        style={styles.customCarousel}></Carousel>
      <View style={styles.detailCardContainer}>
        <View style={styles.headerLayout}>
          <Text style={[styles.textBase, styles.title]}>力量训练</Text>
        </View>
        <ScrollView></ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: "center",
  },
  customCarousel: {
    width: WIDTH,
    justifyContent: "center",
    marginLeft: -ITEM_WIDTH / 6,
    marginBottom: 25,
  },
  imgCard: {
    borderRadius: 30,
    backgroundColor: "#FFC19A",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  detailCardContainer: {
    width: "100%",
    height: "70%",
    elevation: 8,
    shadowColor: "#FF8D1A",
    backgroundColor: lightTheme.pageBackground,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
  },
  img: {
    width: "80%",
    height: "80%",
  },
  textBase: {
    fontSize: 18,
    fontWeight: "bold",
  },
  title: {
    fontSize: 25,
    color: "#ED8C78",
    marginLeft: 10,
  },
  headerLayout: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
  },
});
