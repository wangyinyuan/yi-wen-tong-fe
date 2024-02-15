import type { ThemeType } from "@/constants/Color";
import { darkTheme, lightTheme } from "@/constants/Color";
import {
  Entypo,
  FontAwesome5,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { Tabs } from "expo-router";
import { StyleSheet, useColorScheme } from "react-native";

function GradientBackground({ colors }: { colors: string[] }) {
  return (
    <LinearGradient
      colors={colors}
      style={{
        ...StyleSheet.absoluteFillObject,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
      }}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
    />
  );
}

export default function TabsLayout() {
  // 导入颜色模式
  const colorScheme = useColorScheme();
  const theme = (colorScheme === "light" ? lightTheme : darkTheme) as ThemeType;

  return (
    <Tabs
      initialRouteName="index"
      screenOptions={{
        headerTitleAlign: "center",
        headerTintColor: theme.headerTintColor,
        headerBackground: () => {
          return (
            <GradientBackground
              colors={[
                theme.navigatorBackgroundStart,
                theme.navigatorBackgroundEnd,
              ]}
            />
          );
        },
        tabBarShowLabel: false,
        tabBarActiveTintColor: theme.activatedTintColor,
        tabBarInactiveTintColor: theme.inactivatedTintColor,
        tabBarBackground: () => {
          return (
            <GradientBackground
              colors={[
                theme.navigatorBackgroundStart,
                theme.navigatorBackgroundEnd,
              ]}
            />
          );
        },
        tabBarStyle: {
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
          backgroundColor: "transparent",
        
        },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Entypo name="chat" size={size} color={color} />
          ),
          headerTitle: "AI医生在线提供咨询",
        }}
      />
      <Tabs.Screen
        name="suggestion"
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="heartbeat" size={size} color={color} />
          ),
          headerTitle: "个性化生活建议",
        }}
      />
      <Tabs.Screen
        name="reminder"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-time" size={size} color={color} />
          ),
          headerTitle: "用药提醒",
        }}
      />
      <Tabs.Screen
        name="report"
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="chart-box"
              size={size}
              color={color}
            />
          ),
          headerTitle: "个性健康报告",
        }}
      />
    </Tabs>
  );
}
