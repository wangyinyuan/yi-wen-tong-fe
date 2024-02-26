import Card from "@/components/SuggestionPage/Sports/Card";
import Tabs from "@/components/SuggestionPage/Sports/Tabs";
import { lightTheme } from "@/constants/Color";
import { sportsImgs } from "@/data/sports";
import { Image } from "expo-image";
import { useState } from "react";
import { Dimensions, ScrollView, StyleSheet, Text, View } from "react-native";
import Carousel from "react-native-reanimated-carousel";

const WIDTH = Dimensions.get("window").width;
const ITEM_WIDTH = Math.round(WIDTH * 0.6);

const tabs = ["频率时长", "训练内容"];

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
          <Tabs tabs={tabs} defaultIndex={1}></Tabs>
        </View>
        <ScrollView
          contentContainerStyle={styles.cardsLayout}
          nestedScrollEnabled={true}>
          <Card
            title="哑铃卧推"
            content="是一项全身性的练习，特别针对腿部和臀部的大肌群。保持脊柱中立，重量以能够控制动作并完成所有回合为宜。"
            bgColor="#ffbd7a"></Card>
          <Card
            title="哑铃卧推"
            content="是一项全身性的练习，特别针对腿部和臀部的大肌群。保持脊柱中立，重量以能够控制动作并完成所有回合为宜。"
            bgColor="#ffbd7a"></Card>
          <Card
            title="哑铃卧推"
            content="是一项全身性的练习，特别针对腿部和臀部的大肌群。保持脊柱中立，重量以能够控制动作并完成所有回合为宜。"
            bgColor="#ffbd7a"></Card>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: "center",
    flex: 1,
    paddingBottom: 0,
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
    flex: 1,
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
  cardsLayout: {
    alignItems: "center",
  },
});
