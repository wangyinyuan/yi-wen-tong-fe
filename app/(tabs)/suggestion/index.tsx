import Suggestions from "@/components/SuggestionPage";
import { View, Text, StyleSheet } from "react-native";

export default function SuggestionPage() {
  return (
    <View style={styles.container}>
      <Suggestions />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
