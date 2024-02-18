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

const MyDrawer = (props: any) => {
  const [active, setActive] = React.useState("");

  // console.log(props);

  return (
    <Drawer.Section title="控制中心 🎮" style={style.container} theme={customTheme}>
      <Drawer.Item
        label="baba"
        active={active === "first"}
        onPress={() => setActive("first")}
      />
      <Drawer.Item
        label="dawo"
        active={active === "second"}
        onPress={() => setActive("second")}
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
