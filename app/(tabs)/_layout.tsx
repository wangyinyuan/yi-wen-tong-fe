import { lightTheme } from "@/constants/Color";
import {
  Entypo,
  FontAwesome5,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { LinearGradient } from "expo-linear-gradient";
import { Tabs, useNavigation } from "expo-router";
import { StyleSheet } from "react-native";

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
  const navigation = useNavigation();

  return (
      <Tabs
        initialRouteName="index"
        screenOptions={{
          headerTitleAlign: "center",
          headerTintColor: lightTheme.headerTintColor,
          headerLeft: () => {
            return (
              <MaterialCommunityIcons
                name="menu"
                size={30}
                color={lightTheme.headerTintColor}
                style={{ marginLeft: 10 }}
                onPress={() => {
                  // @ts-ignore
                  navigation.openDrawer();
                }}
              />
            );
          },
          headerBackground: () => {
            return (
              <GradientBackground
                colors={[
                  lightTheme.navigatorBackgroundStart,
                  lightTheme.navigatorBackgroundEnd,
                ]}
              />
            );
          },
          tabBarShowLabel: false,
          tabBarActiveTintColor: lightTheme.activatedTintColor,
          tabBarInactiveTintColor: lightTheme.inactivatedTintColor,
          tabBarBackground: () => {
            return (
              <GradientBackground
                colors={[
                  lightTheme.navigatorBackgroundStart,
                  lightTheme.navigatorBackgroundEnd,
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
