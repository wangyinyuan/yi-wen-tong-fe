import { useSportsInfo } from "@/api/swr/advice/sports";
import ErrorView from "@/components/Global/Error";
import Indicator from "@/components/Global/Indicator";
import Card from "@/components/SuggestionPage/Sports/Card";
import Tabs from "@/components/SuggestionPage/Sports/Tabs";
import { lightTheme } from "@/constants/Color";
import { Image } from "expo-image";
import { useEffect, useRef, useState } from "react";
import { Dimensions, ScrollView, StyleSheet, View } from "react-native";
import Carousel from "react-native-reanimated-carousel";

const WIDTH = Dimensions.get("window").width;
const ITEM_WIDTH = Math.round(WIDTH * 0.6);

const tabs = ["频率时长", "训练内容"];

// 根据文字长度决定卡片的高度
const getCardHeight = (content: string) => {
  const lineHeight = 20;
  const paddings = 60;
  const textNumPerLine = 18;
  const textLines = content.length / textNumPerLine;
  return textLines * lineHeight + paddings;
};

export default function Sports() {
  const [selectedContent, setSelectedContent] = useState("训练内容");
  const [itemStatus, setItemStatus] = useState<{ [key: string]: boolean }>({});
  const [contentOffsets, setContentOffsets] = useState<number[]>([]);
  const [frequencyOffsets, setFrequencyOffsets] = useState<number[]>([]);

  const scrollViewRef = useRef<ScrollView>(null);

  // 获取数据
  const { sports, isLoading } = useSportsInfo();

  // 管理当前选中的内容
  useEffect(() => {
    if (!sports || !sports.carouselData) return;
    const newItemStatus = sports.carouselData.reduce((acc, item, index) => {
      return { ...acc, [item.value]: !index ? true : false };
    }, {});
    setItemStatus(newItemStatus);
  }, [sports?.carouselData]);

  // 计算每个卡片的偏移量
  useEffect(() => {
    if (!sports || !sports.contentList || !sports.frequencyList) return;
    const content = [];
    const frequency = [];
    for (let i = 0; i < sports.contentList.length; i++) {
      if (i === 0) {
        content[i] = 0;
        continue;
      }
      content[i] =
        getCardHeight(sports.contentList[i - 1].content) + content[i - 1];
    }
    for (let i = 0; i < sports.frequencyList.length; i++) {
      if (i === 0) {
        frequency[i] = 0;
        continue;
      }
      frequency[i] =
        getCardHeight(sports.frequencyList[i - 1].content) + frequency[i - 1];
    }
    setFrequencyOffsets(frequency);
    setContentOffsets(content);
  }, [sports?.contentList, sports?.frequencyList]);

  // 加载中
  if (isLoading || !sports) return <Indicator animating={true} />;

  // 无数据
  if (
    !sports.carouselData ||
    !sports.contentList ||
    !sports.frequencyList ||
    !sports.carouselData.length ||
    !sports.contentList.length ||
    !sports.frequencyList.length
  ) {
    return <ErrorView pathname="/suggestion/"></ErrorView>;
  }

  // 轮播图图片视图
  const renderItem = ({ item }: { item: string }) => {
    return (
      <View style={styles.imgCard}>
        <Image source={item} style={styles.img}></Image>
      </View>
    );
  };

  // 频率建议卡片的渲染
  const renderFrequencyCard = sports.frequencyList.map((item, index) => {
    return (
      <Card
        title={item.title}
        content={item.content}
        bgColor={
          itemStatus[item.value] ? lightTheme.bgPink4 : lightTheme.bgPink6
        }
        key={item.value}></Card>
    );
  });

  // 训练内容建议卡片的渲染
  const renderContentCard = sports.contentList.map((item, index) => {
    return (
      <Card
        title={item.title}
        content={item.content}
        bgColor={
          itemStatus[item.value] ? lightTheme.bgPink4 : lightTheme.bgPink6
        }
        key={item.value}></Card>
    );
  });
  return (
    <View style={styles.container}>
      <Carousel
        loop={false}
        data={sports.carouselData.map((item) => item.img)}
        mode="horizontal-stack"
        onSnapToItem={(index) => {
          // 设置当前选中的卡片
          setItemStatus((prev) => {
            return Object.keys(prev).reduce((acc, key, i) => {
              return { ...acc, [key]: index === i };
            }, {} as { [key: string]: boolean });
          });

          // 滚动到对应的卡片
          if (selectedContent === "训练内容") {
            scrollViewRef.current?.scrollTo({
              y: contentOffsets[index],
              animated: true,
            });
          } else {
            scrollViewRef.current?.scrollTo({
              y: frequencyOffsets[index],
              animated: true,
            });
          }
        }}
        modeConfig={{
          stackInterval: 25,
          moveSize: 260,
          scaleInterval: 0.08,
          opacityInterval: 0.25,
          rotateZDeg: 0,
        }}
        renderItem={renderItem}
        width={ITEM_WIDTH}
        height={ITEM_WIDTH}
        pagingEnabled={true}
        style={styles.customCarousel}></Carousel>
      <View style={styles.detailCardContainer}>
        <View style={styles.headerLayout}>
          <Tabs
            tabs={tabs}
            defaultIndex={1}
            onActivatedChange={setSelectedContent}></Tabs>
        </View>
        <ScrollView
          contentContainerStyle={styles.cardsLayout}
          nestedScrollEnabled={true}
          ref={scrollViewRef}>
          {selectedContent === "频率时长"
            ? renderFrequencyCard
            : renderContentCard}
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
    backgroundColor: lightTheme.bgPink4,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  detailCardContainer: {
    width: "100%",
    flex: 1,
    elevation: 8,
    shadowColor: lightTheme.bgPink1,
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
  headerLayout: {
    flexDirection: "row",
    justifyContent: "center",
    padding: 15,
  },
  cardsLayout: {
    alignItems: "center",
  },
});
