import MyDrawer from "@/components/Global/MyDrawer";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useFonts } from "expo-font";
import { SplashScreen } from "expo-router";
import { Drawer } from "expo-router/drawer";
import { useEffect } from "react";
import { registerTranslation, zh } from "react-native-paper-dates";
import { UserProvider } from "@/context/UserContext";
import { RootSiblingParent } from "react-native-root-siblings";

// 注册 locale
registerTranslation("zh", zh);

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "(tabs)",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    ...FontAwesome.font,
    "mon-regular": require("@/assets/fonts/Montserrat-Regular.ttf"),
    "mon-bold": require("@/assets/fonts/Montserrat-Bold.ttf"),
    "mon-semibold": require("@/assets/fonts/Montserrat-SemiBold.ttf"),
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <UserProvider>
      <RootSiblingParent>
        <RootLayoutNav />
      </RootSiblingParent>
    </UserProvider>
  );
}

function RootLayoutNav() {
  return (
    <Drawer
      drawerContent={(props) => <MyDrawer {...props} />}
      screenOptions={{ headerShown: false }}>
      <Drawer.Screen name="(tabs)" options={{ headerShown: false }} />
      <Drawer.Screen name="settings/info" options={{ headerShown: true }} />
      <Drawer.Screen name="settings/account" options={{ headerShown: true }} />
    </Drawer>
  );
}
