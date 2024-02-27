import { lightTheme } from "@/constants/Color";
import type { ReminderForm } from "@/types/Reminder";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Modal from "react-native-modal";
import { InputBox } from "../Global/InputBox";
import { MultiInputBox } from "../Global/MultiInputBox";
import { Button } from "react-native-paper";
import { DatePickerModal } from "react-native-paper-dates";

// tips 温馨提醒
const tips = [
  "再忙也要记得按时吃药哦~",
  "生活再忙碌，健康优先，别忘了按时服药呀~",
  "无论多忙，记得给自己的健康充充电，准时吃药喔~",
  "时间宝贵，健康更重要，别忘了定时吃药呢~",
  "每一刻都很重要，包括按时吃药的那一刻，保持健康哦~",
];

// 随机选择一个 tips
function getTip() {
  if (tips.length === 0) return "再忙也要记得按时吃药哦~";
  return tips[Math.floor(Math.random() * tips.length)];
}

export default function FormModal({
  isVisible,
  setVisible,
  form,
  setFrom,
}: {
  isVisible: boolean;
  setVisible: (visible: boolean) => void;
  form: ReminderForm;
  setFrom: (form: ReminderForm) => void;
}) {
  const [tip, setTip] = useState<string>();

  // 每次打开 Modal 的时候重新生成 tips
  useEffect(() => {
    if (isVisible) {
      setTip(getTip());
    }
  }, [isVisible]);

  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={() => setVisible(false)}
      style={styles.modalLayout}>
      <View style={styles.container}>
        <Text style={styles.tipStyle}>{`Tips: ${tip}`}</Text>
        <InputBox
          input={form.title}
          setInput={(text) => {
            setFrom({ ...form, title: text });
          }}
          label="提醒名称"
          placeholder="祝你安好💜"
          containerStyle={styles.inputStyle}></InputBox>
        <MultiInputBox
          input={form.detail as string}
          setInput={(text) => {
            setFrom({ ...form, detail: text });
          }}
          label="具体描述"
          placeholder="照顾好自己🫂"
          containerStyle={styles.inputStyle}
          numberOfLines={3}
          style={{ height: 100 }}></MultiInputBox>
        <View></View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 300,
    height: 400,
    backgroundColor: lightTheme.pageBackground,
    borderRadius: 15,
    alignItems: "center",
  },
  modalLayout: {
    alignItems: "center",
  },
  inputStyle: {
    width: "80%",
    marginTop: 5,
    marginBottom: 5,
  },
  tipStyle: {
    color: lightTheme.tGray3,
    marginTop: 20,
    textAlign: "center",
    marginLeft: 15,
    marginRight: 15,
  },
});
