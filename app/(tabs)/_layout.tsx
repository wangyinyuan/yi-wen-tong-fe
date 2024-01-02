import { Tabs } from "expo-router";
import { lightTheme, darkTheme } from "@/constants/Color";
import { useColorScheme } from "react-native";
import type { ThemeType } from "@/constants/Color";
import { LinearGradient } from "expo-linear-gradient";

export default function TabsLayout() {
  // 导入颜色模式
  const colorScheme = useColorScheme();
  const theme = (colorScheme === "light" ? lightTheme : darkTheme) as ThemeType;

  return (
    <Tabs
      initialRouteName="index"
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: theme.activatedTintColor,
        tabBarInactiveTintColor: theme.inactivatedTintColor,
        tabBarStyle: {
          borderRadius: 15,
        },
        tabBarBackground: () => {
          return (
            <LinearGradient
              colors={[
                theme.navigatorBackgroundStart,
                theme.navigatorBackgroundEnd,
              ]}></LinearGradient>
          );
        },
      }}>
      <Tabs.Screen name="index" />
      <Tabs.Screen name="suggestion" />
      <Tabs.Screen name="reminder" />
      <Tabs.Screen name="report" />
    </Tabs>
  );
}
