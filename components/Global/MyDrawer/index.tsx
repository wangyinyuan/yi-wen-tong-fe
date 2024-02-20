import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import * as React from "react";
import { StyleSheet } from "react-native";
import { DefaultTheme, Drawer } from "react-native-paper";

const customTheme = {
  ...DefaultTheme,
  fonts: {
    ...DefaultTheme.fonts,
    medium: {
      ...DefaultTheme.fonts.medium,
      fontSize: 20,
    },
  },
};

const customItem = {
  ...DefaultTheme,
  fonts: {
    ...DefaultTheme.fonts,
    medium: {
      ...DefaultTheme.fonts.medium,
      fontSize: 16,
    },
  },
  roundness: 25,
}

const MyDrawer = (props: any) => {
  const [active, setActive] = React.useState("");

  return (
    <Drawer.Section
      title="控制中心 🎮"
      style={style.container}
      theme={customTheme}>
      <Drawer.Item
        label="个人信息"
        active={active === "info"}
        icon={(props) => <MaterialCommunityIcons name="account" size={props.size} color={props.color} />}
        onPress={() => {
          setActive("info");
          props.navigation.navigate("settings/info");
        }}
        theme={customItem}
        style={{height: 50, justifyContent: "center"}}
      />
      <Drawer.Item
        label="账户信息"
        active={active === "account"}
        icon={(props) => <MaterialIcons name="security" size={props.size} color={props.color} />}
        onPress={() => {
          setActive("account");
          props.navigation.navigate("settings/account");
        }}
        theme={customItem}
        style={{height: 50, justifyContent: "center"}}
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
