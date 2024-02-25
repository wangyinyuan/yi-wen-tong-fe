import { lightTheme } from "@/constants/Color";
import { foodSuggestions } from "@/data/foods";
import { Image } from "expo-image";
import { SectionList, StyleSheet, Text, View } from "react-native";
import Modal from "react-native-modal";

export default function FoodDetails({
  isVisible,
  onClose,
  details,
}: {
  isVisible: boolean;
  onClose: any;
  details: any;
}) {
  return (
    <Modal
      isVisible={isVisible}
      onSwipeComplete={onClose}
      swipeDirection={["down"]}
      style={styles.modal}
      propagateSwipe>
      <View style={styles.container}>
        <Image
          source={
            "https://cdn.jsdelivr.net/gh/wangyinyuan/Picgo/20240219231155.png"
          }
          style={styles.foodImgStyle}></Image>
        <View style={styles.foodCardLayout}>
          <SectionList
            sections={foodSuggestions}
            keyExtractor={(item, index) => item + index}
            ListHeaderComponent={
              <View>
                <Text style={[styles.textBase, styles.title]}>早餐</Text>
                <View style={styles.foodCardContainer}>
                  <View
                    style={[
                      styles.foodCard,
                      { backgroundColor: lightTheme.bgGreen1 },
                    ]}>
                    <Image
                      source="https://cdn.jsdelivr.net/gh/wangyinyuan/Picgo/包子1323.png"
                      style={styles.foodIcon}></Image>
                    <Text
                      style={[styles.textBase, { color: lightTheme.tGreen1 }]}>
                      包子
                    </Text>
                  </View>
                  <View
                    style={[
                      styles.foodCard,
                      { backgroundColor: lightTheme.bgYellow1 },
                    ]}>
                    <Image
                      source="https://cdn.jsdelivr.net/gh/wangyinyuan/Picgo/芒果65448.png"
                      style={styles.foodIcon}></Image>
                    <Text
                      style={[styles.textBase, { color: lightTheme.tYellow1 }]}>
                      芒果
                    </Text>
                  </View>
                  <View
                    style={[
                      styles.foodCard,
                      { backgroundColor: lightTheme.bgBlue1 },
                    ]}>
                    <Image
                      source="https://cdn.jsdelivr.net/gh/wangyinyuan/Picgo/咖啡豆4648.png"
                      style={styles.foodIcon}></Image>
                    <Text
                      style={[styles.textBase, { color: lightTheme.tBlue1 }]}>
                      咖啡豆
                    </Text>
                  </View>
                </View>
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
});
