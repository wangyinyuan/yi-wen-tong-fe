import { lightTheme } from "@/constants/Color";
import { toastSuccessConfig } from "@/constants/ToastConfig";
import { useUser } from "@/context/UserContext";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { DrawerActions } from "@react-navigation/native";
import { router } from "expo-router";
import * as React from "react";
import { StyleSheet } from "react-native";
import { DefaultTheme, Drawer } from "react-native-paper";
import Toast from "react-native-root-toast";

const customTheme = {
  ...DefaultTheme,
  fonts: {
    ...DefaultTheme.fonts,
    medium: {
      ...DefaultTheme.fonts.bodyMedium,
      fontSize: 20,
    },
  },
};

const customItem = {
  ...DefaultTheme,
  fonts: {
    ...DefaultTheme.fonts,
    medium: {
      ...DefaultTheme.fonts.bodyMedium,
      fontSize: 16,
    },
  },
  roundness: 25,
};

const customItem2 = {
  ...DefaultTheme,
  fonts: {
    ...DefaultTheme.fonts,
    medium: {
      ...DefaultTheme.fonts.bodyMedium,
      fontSize: 16,
    },
  },
  roundness: 25,
  colors: {
    ...DefaultTheme.colors,
    onSurfaceVariant: lightTheme.tRed1,
    secondaryContainer: lightTheme.bgRed1,
  },
};

const MyDrawer = (props: any) => {
  const [active, setActive] = React.useState("");

  const { logout } = useUser();

  return (
    <Drawer.Section
      title="控制中心 🎮"
      style={style.container}
      theme={customTheme}>
      <Drawer.Item
        label="个人信息"
        active={active === "info"}
        icon={(props) => (
          <MaterialCommunityIcons
            name="account"
            size={props.size}
            color={props.color}
          />
        )}
        onPress={() => {
          setActive("info");
          props.navigation.dispatch(DrawerActions.closeDrawer());
          props.navigation.navigate("settings/info");
        }}
        theme={customItem}
        style={{ height: 50, justifyContent: "center" }}
      />
      <Drawer.Item
        label="账户信息"
        active={active === "account"}
        icon={(props) => (
          <MaterialIcons
            name="security"
            size={props.size}
            color={props.color}
          />
        )}
        onPress={() => {
          setActive("account");
          props.navigation.dispatch(DrawerActions.closeDrawer());
          props.navigation.navigate("settings/account");
        }}
        theme={customItem}
        style={{ height: 50, justifyContent: "center" }}
      />
      <Drawer.Item
        label="退出登录"
        active={active === "logout"}
        icon={(props) => (
          <MaterialIcons name="logout" size={props.size} color={props.color} />
        )}
        onPress={async () => {
          setActive("");
          await logout();
          props.navigation.dispatch(DrawerActions.closeDrawer());
          Toast.show("退出登录成功！", toastSuccessConfig);
          router.replace("/login/");
        }}
        theme={customItem2}
        style={{ height: 50, justifyContent: "center" }}
      />
    </Drawer.Section>
  );
};

const style = StyleSheet.create({
  container: {
    marginTop: 40,
  },
});

export default MyDrawer;
