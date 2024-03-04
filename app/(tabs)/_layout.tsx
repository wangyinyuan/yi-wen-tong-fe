import { lightTheme } from "@/constants/Color";
import { toastInfoConfig } from "@/constants/ToastConfig";
import {
  Entypo,
  FontAwesome5,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { DrawerActions } from "@react-navigation/native";
import * as Device from "expo-device";
import { LinearGradient } from "expo-linear-gradient";
import * as Notifications from "expo-notifications";
import { Tabs, useNavigation } from "expo-router";
import { Platform, StyleSheet } from "react-native";
import Toast from "react-native-root-toast";

// 设置消息通知
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

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

  // useEffect(() => {
  //   // 请求通知权限
  //   registerForPushNotificationsAsync().catch((e) => {
  //     console.log(e);
  //   });
  // }, []);

  // 请求通知权限函数
  async function registerForPushNotificationsAsync() {
    if (Platform.OS === "android") {
      await Notifications.setNotificationChannelAsync("default", {
        name: "default",
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: "#FF231F7C",
      });
    }

    const { status: existingStatus } =
      await Notifications.getPermissionsAsync();

    let finalStatus = existingStatus;

    if (Device.isDevice) {
      if (existingStatus !== "granted") {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }

      if (finalStatus !== "granted") {
        Toast.show("被拒绝了，好难过😢", toastInfoConfig);
        return;
      }
    }
  }

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
                navigation.dispatch(DrawerActions.toggleDrawer());
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
