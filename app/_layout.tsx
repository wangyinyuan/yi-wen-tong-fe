import MyDrawer from '@/components/Global/MyDrawer';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useFonts } from 'expo-font';
import { SplashScreen } from 'expo-router';
import { Drawer } from 'expo-router/drawer';
import { useEffect } from 'react';


export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    ...FontAwesome.font,
    "mon-regular": require('@/assets/fonts/Montserrat-Regular.ttf'),
    "mon-bold": require('@/assets/fonts/Montserrat-Bold.ttf'),
    "mon-semibold": require('@/assets/fonts/Montserrat-SemiBold.ttf'),
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

  return <RootLayoutNav />;
}

function RootLayoutNav() {

  return (
      // <Stack>
      //   <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      //   <Stack.Screen name="settings" options={{ headerShown: false }}/>
      // </Stack>
      <Drawer drawerContent={props => <MyDrawer {...props} />}>
        <Drawer.Screen name="(tabs)" options={{ headerShown: false }} />
        <Drawer.Screen name="settings/info"/>
        <Drawer.Screen name="settings/account" />
      </Drawer>
  );
}
