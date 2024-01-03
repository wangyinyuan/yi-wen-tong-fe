import { View, Text, StyleSheet } from "react-native";
import ChatPageFooter from "@/components/ChatPage/Footer";
import { useState } from "react";


export default function ChatPage() {
  // 输入框的内容
  const [input, setInput] = useState<string>("")


  return (<View style={styles.container}>
    <Text style={styles.maxHeader}>Chat Page</Text>
    <ChatPageFooter input={input} setInput={setInput} />
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