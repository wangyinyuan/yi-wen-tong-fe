import Dialog from "@/components/ChatPage/Dialog";
import useTheme from "@/hooks/useTheme";
import { useState } from "react";
import { StyleSheet, View } from "react-native";



export default function ChatPage() {
  // 输入框的内容
  const [input, setInput] = useState<string>("")
  
  // 导入颜色模式
  const theme = useTheme();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.pageBackground,
    },
    maxHeader: {
      fontFamily: "mon-semibold",
      fontSize: 50,
      textAlign: "center",
    }
    });

  return (<View style={styles.container}>
    <Dialog />
    {/* <ChatPageFooter input={input} setInput={setInput} /> */}
  </View>)
}

