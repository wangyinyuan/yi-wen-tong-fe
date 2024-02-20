import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Suggestions() {
  return (
    <View>
      <Link href={"/suggestion/sports"} style={style.text}>sports</Link>
      <Link href={"/suggestion/food/"} style={style.text}>food</Link>
    </View>
  );
}

const style = StyleSheet.create({
  text: {
    fontSize: 20,
    margin: 10,
  }
})