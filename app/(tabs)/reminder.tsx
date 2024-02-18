import { View, Text, StyleSheet, Image } from "react-native";

export default function ReminderPage() {
  return (
    <View style={styles.container}>
      <Text style={styles.maxHeader}>Reminder Page</Text>
      <Image
        source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
        style={{
          width: 100,
          height: 100,
        }}
        onError={(error) => {console.error(error)}}></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  maxHeader: {
    fontFamily: "mon-semibold",
    fontSize: 50,
    textAlign: "center",
  },
});
