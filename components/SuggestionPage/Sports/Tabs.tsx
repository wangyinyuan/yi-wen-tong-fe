import { lightTheme } from "@/constants/Color";
import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

const CONTAINER_WIDTH = 190;
const TAB_WIDTH = CONTAINER_WIDTH / 2;

export default function Tabs({
  tabs = [],
  defaultIndex = 0,
  onActivatedChange = () => {},
}: {
  tabs?: Array<string>;
  defaultIndex?: number;
  onActivatedChange?: (item: string) => void;
}) {
  const [selectedIndex, setSelectedIndex] = useState(defaultIndex);
  const position = useSharedValue(defaultIndex * TAB_WIDTH);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: withTiming(position.value, { duration: 200 }) },
      ],
    };
  });

  const itemsComponent = tabs.map((item, index) => (
    <TouchableOpacity
      key={item}
      style={[styles.textContainer]}
      activeOpacity={0.5}
      onPress={() => {
        setSelectedIndex(index);
        position.value = index * TAB_WIDTH;
        onActivatedChange(item);
      }}>
      <Text style={styles.text}>{item}</Text>
    </TouchableOpacity>
  ));

  return (
    <View style={[styles.tabsContainer]}>
      {itemsComponent}
      <Animated.View style={[styles.highlight, animatedStyle]} />
    </View>
  );
}

const styles = StyleSheet.create({
  tabsContainer: {
    flexDirection: "row",
    width: CONTAINER_WIDTH,
    height: 40,
    borderRadius: 20,
    borderColor: lightTheme.bgPink5,
    borderWidth: 2,
    position: "relative",
  },
  highlight: {
    height: 37,
    backgroundColor: lightTheme.bgPink5,
    position: "absolute",
    bottom: 0,
    width: TAB_WIDTH,
    borderRadius: 17,
    zIndex: -1,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
  textContainer: {
    width: TAB_WIDTH,
    justifyContent: "center",
    alignItems: "center",
  },
});
