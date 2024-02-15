import { useColorScheme } from "react-native";
import { darkTheme, lightTheme } from "@/constants/Color";
import type { ThemeType } from "@/constants/Color";

export default function useTheme() {
  // 导入颜色模式
  const colorScheme = useColorScheme();
  const theme = (colorScheme === "light" ? lightTheme : darkTheme) as ThemeType;
  return theme;
}
