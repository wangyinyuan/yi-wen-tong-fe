import { lightTheme } from "@/constants/Color";
import { StyleSheet, View, ViewStyle } from "react-native";

const styles = StyleSheet.create({
  default: {
    height: 2,
    width: "100%",
    backgroundColor: lightTheme.bgGray1,
  },
});

export type DividerProps = {
  // 长度
  width?: ViewStyle["width"];
  // 粗细
  height?: ViewStyle["height"];
  // 颜色
  color?: ViewStyle["backgroundColor"];
};

export default function Divider({ width, height, color }: DividerProps) {
  const dividerStyle: ViewStyle = {
    ...styles.default,
    ...(width && { width }),
    ...(height && { height }),
    ...(color && { backgroundColor: color }),
  };
  return <View style={dividerStyle}></View>;
}
