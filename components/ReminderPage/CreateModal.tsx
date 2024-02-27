import { lightTheme } from "@/constants/Color";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Modal from "react-native-modal";
import { TextInput } from "react-native-paper";
import { InputBox } from "../Global/InputBox";
import type { ReminderForm } from "@/types/Reminder";

export default function CreateModal({
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
  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={() => setVisible(false)}
      style={styles.modalLayout}>
      <View style={styles.container}>
        <Text>年后再说</Text>
        <InputBox
          input={form.title}
          setInput={(text) => {
            setFrom({ ...form, title: text });
          }}></InputBox>
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
  },
  modalLayout: {
    alignItems: "center",
  },
});
