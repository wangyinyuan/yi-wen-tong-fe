import CreateModal from "@/components/ReminderPage/CreateModal";
import { lightTheme } from "@/constants/Color";
import type { ReminderForm } from "@/types/Reminder";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { IconButton } from "react-native-paper";

export default function ReminderPage() {
  // 模态窗口可见
  const [isVisible, setVisible] = useState(false);
  // 表单数据
  const [form, setFrom] = useState<ReminderForm>({
    title: "",
    detail: "",
    dueDate: "",
  });

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <CreateModal
        isVisible={isVisible}
        setVisible={setVisible}
        form={form}
        setFrom={setFrom}></CreateModal>
      <View style={styles.buttonLayout}>
        <IconButton
          icon={(props) => (
            <Ionicons name="create" size={26} color={props.color}></Ionicons>
          )}
          color={lightTheme.tWhite}
          style={styles.buttonBg}
          onPress={() => setVisible(true)}></IconButton>
        <Text style={[styles.textBase, styles.buttonText]}>新建提醒</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
  textBase: {
    fontSize: 16,
    fontWeight: "bold",
  },
  maxHeader: {
    fontFamily: "mon-semibold",
    fontSize: 50,
    textAlign: "center",
  },
  buttonBg: {
    backgroundColor: lightTheme.bgPurple2,
    width: 46,
    height: 46,
    borderRadius: 23,
  },
  buttonLayout: {
    alignItems: "center",
    position: "absolute",
    bottom: 10,
    right: 30,
    zIndex: 10,
  },
  buttonText: {
    fontSize: 14,
    color: lightTheme.tGray1,
  },
});
