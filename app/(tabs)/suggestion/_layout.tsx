import { Stack } from "expo-router";

export default function Layout() {
  return <Stack screenOptions={{headerShown: false}}>
    <Stack.Screen name="index"></Stack.Screen>
    <Stack.Screen name="sports"></Stack.Screen>
    <Stack.Screen name="food"></Stack.Screen>
  </Stack>;
}
