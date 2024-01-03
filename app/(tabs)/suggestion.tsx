import { View, Text, StyleSheet} from "react-native";

export default function SuggestionPage() {
  return (<View style={styles.container}>
    <Text style={styles.maxHeader}>Suggestion Page</Text>
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