import { useFoodDetailInfo } from "@/api/swr/advice/food";
import ErrorView from "@/components/Global/Error";
import Indicator from "@/components/Global/Indicator";
import { lightTheme } from "@/constants/Color";
import { Image } from "expo-image";
import { useLocalSearchParams } from "expo-router";
import { Dimensions, SectionList, StyleSheet, Text, View } from "react-native";
import Modal from "react-native-modal";

const WIDTH = Dimensions.get("window").width;

export default function FoodDetails({
  isVisible,
  onClose,
}: {
  isVisible: boolean;
  onClose: any;
}) {
  const { _id } = useLocalSearchParams();

  // 获取食物详情
  const { foodDetail, isLoading } = useFoodDetailInfo(_id as string);

  if (isLoading || !foodDetail) return <Indicator animating={true} />;

  if (!foodDetail.detailCards || !foodDetail.details)
    return <ErrorView pathname="/suggestion/food/" />;

  // 卡片组件
  const foodCards = foodDetail.detailCards.map((item, index) => {
    const colors = {
      bg: lightTheme.bgGreen1,
      t: lightTheme.tGreen1,
    };
    switch (index) {
      case 0:
        break;
      case 1:
        colors.bg = lightTheme.bgYellow1;
        colors.t = lightTheme.tYellow1;
        break;
      case 2:
        colors.bg = lightTheme.bgBlue1;
        colors.t = lightTheme.tBlue1;
        break;
    }

    return (
      <View
        style={[styles.foodCard, { backgroundColor: colors.bg }]}
        key={index}>
        <Image source={item.img} style={styles.foodIcon}></Image>
        <Text style={[styles.textBase, { color: colors.t }]}>{item.name}</Text>
      </View>
    );
  });

  // 食物建议，把 suggestions 转换成 SectionList 的数据格式
  const foodSuggestionsData = foodDetail.details.map((item) => {
    return {
      title: item.title,
      data: item.suggestions,
    };
  });

  return (
    <Modal
      isVisible={isVisible}
      onSwipeComplete={onClose}
      swipeDirection={["down"]}
      style={styles.modal}
      propagateSwipe>
      <View style={styles.container}>
        <View style={styles.dropBar}></View>
        <Image source={foodDetail.img} style={styles.foodImgStyle}></Image>
        <View style={styles.foodCardLayout}>
          <SectionList
            sections={foodSuggestionsData}
            keyExtractor={(item, index) => item + index}
            ListHeaderComponent={
              <View>
                <Text style={[styles.textBase, styles.title]}>
                  {foodDetail.title}
                </Text>
                <View style={styles.foodCardContainer}>{foodCards}</View>
              </View>
            }
            renderItem={({ item }) => {
              return (
                <Text
                  style={[
                    styles.textBase,
                    styles.suggestionLine,
                  ]}>{`·${item}`}</Text>
              );
            }}
            renderSectionHeader={({ section: { title } }) => (
              <Text style={[styles.textBase, styles.suggestionTitle]}>
                {title}
              </Text>
            )}></SectionList>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modal: {
    margin: 0,
  },
  container: {
    height: "100%",
    backgroundColor: lightTheme.pageBackground,
    position: "relative",
  },
  foodImgStyle: {
    width: "100%",
    height: 340,
    flex: 0,
  },
  foodCardLayout: {
    width: "100%",
    flex: 1,
    marginTop: -65,
    backgroundColor: lightTheme.pageBackground,
    borderTopLeftRadius: 45,
    borderTopRightRadius: 45,
    padding: 20,
    paddingTop: 10,
  },
  textBase: {
    fontWeight: "bold",
    fontSize: 20,
  },
  title: {
    fontWeight: "700",
    fontSize: 35,
    marginLeft: 15,
    marginBottom: 10,
    letterSpacing: 8,
  },
  foodCardContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  foodCard: {
    height: 125,
    width: 110,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  foodIcon: {
    width: 50,
    height: 50,
  },
  suggestionLine: {
    marginLeft: 20,
    lineHeight: 30,
    fontWeight: "normal",
    fontSize: 18,
  },
  suggestionTitle: {
    fontSize: 22,
    marginLeft: 15,
    marginTop: 15,
    marginBottom: 10,
  },
  dropBar: {
    backgroundColor: lightTheme.bgPurple1,
    width: 80,
    height: 7,
    position: "absolute",
    left: WIDTH / 2 - 40,
    top: 20,
    zIndex: 10,
    borderRadius: 30,
  },
});
