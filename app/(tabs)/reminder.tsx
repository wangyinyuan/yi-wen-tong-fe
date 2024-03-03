import { useTasksList } from "@/api/swr/task/task";
import Indicator from "@/components/Global/Indicator";
import FormModal from "@/components/ReminderPage/FormModal";
import ReminderCard from "@/components/ReminderPage/ReminderCard";
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
    dueDate: undefined,
    dueTime: "",
  });

  // 获取卡片数据
  const { tasks, isLoading } = useTasksList();

  if (isLoading || !tasks) return <Indicator animating={true}></Indicator>;

  return (
    <View style={{flex: 1}}>
      <ScrollView contentContainerStyle={styles.container}>
        {tasks.map((item, index) => {
          return (
            <ReminderCard
              title={item.title}
              detail={item.detail}
              dueDate={item.dueDate}
              dueTime={item.dueTime}
              index={index}
              key={index}></ReminderCard>
          );
        })}
        <FormModal
          isVisible={isVisible}
          setVisible={setVisible}
          form={form}
          setFrom={setFrom}></FormModal>
      </ScrollView>
      <View style={styles.buttonLayout}>
        <IconButton
          icon={(props) => (
            <Ionicons name="create" size={26} color={props.color}></Ionicons>
          )}
          iconColor={lightTheme.tWhite}
          style={styles.buttonBg}
          onPress={() => setVisible(true)}></IconButton>
        <Text style={[styles.textBase, styles.buttonText]}>新建提醒</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
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
