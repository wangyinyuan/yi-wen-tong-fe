import { View, Text, StyleSheet } from "react-native";

export default function ReminderPage() {
  return (<View style={styles.container}>
    <Text style={styles.maxHeader}>Reminder Page</Text>
  </View>)
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
  }
  });