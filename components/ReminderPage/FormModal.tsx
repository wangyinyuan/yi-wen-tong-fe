import { taskReq } from "@/api/http/task/task";
import { useTasksList } from "@/api/swr/task/task";
import { lightTheme } from "@/constants/Color";
import { toastSuccessConfig } from "@/constants/ToastConfig";
import type { ReminderForm } from "@/types/Reminder";
import { useCallback, useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Modal from "react-native-modal";
import { Button } from "react-native-paper";
import { DatePickerModal, TimePickerModal } from "react-native-paper-dates";
import Toast from "react-native-root-toast";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { InputBox } from "../Global/InputBox";
import { MultiInputBox } from "../Global/MultiInputBox";
import SubmitButton from "../Global/SubmitButton";

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

// 星期数字和中文的对应关系
const dayMap = ["日", "一", "二", "三", "四", "五", "六"];

// 显示用户选择的日期（不含时间）
const getDisplayDate = (date: Date | undefined) => {
  if (date === undefined) return "";
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} 星期${
    dayMap[date.getDay()]
  }`;
};

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
  const [dateVisible, setDateVisible] = useState(false);
  const [timeVisible, setTimeVisible] = useState(false);
  const [isValid, setIsValid] = useState(false);

  // 手动改变 tasks 请求
  const { mutate } = useTasksList();

  const onDismissSingle = useCallback(() => {
    setDateVisible(false);
  }, [setDateVisible]);

  const onConfirmSingle = useCallback(
    (params: any) => {
      setDateVisible(false);
      setFrom({ ...form, dueDate: params.date });
    },
    [setDateVisible, setFrom, form]
  );

  // 处理时间选择与否
  // 如果用户没有选择时间，那么就不改变 form 的值
  const onDismissTime = useCallback(() => {
    setTimeVisible(false);
  }, [setTimeVisible]);

  // 确认改变时间
  const onConfirmTime = useCallback(
    ({ hours, minutes }: any) => {
      setTimeVisible(false);
      setFrom({ ...form, dueTime: `${hours}:${minutes}` });
    },
    [setTimeVisible, setFrom, form]
  );

  // 每次打开 Modal 的时候重新生成 tips
  useEffect(() => {
    if (isVisible) {
      setTip(getTip());
    }
  }, [isVisible]);

  // 判断是否可以提交
  useEffect(() => {
    if (form.title && form.dueDate && form.dueTime) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [form]);

  return (
    <Modal
      isVisible={isVisible}
      animationIn={"fadeIn"}
      animationOut={"fadeOut"}
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
        <View style={styles.timeContainer}>
          <SafeAreaProvider>
            <View style={styles.timePickerLayout}>
              <View style={styles.timeTextWrapper}>
                <Text style={styles.timeText}>
                  {getDisplayDate(form.dueDate)}
                </Text>
              </View>

              <Button
                onPress={() => setDateVisible(true)}
                uppercase={false}
                mode="contained-tonal"
                style={styles.button}>
                日期
              </Button>
              <DatePickerModal
                locale="zh"
                mode="single"
                visible={dateVisible}
                onDismiss={onDismissSingle}
                date={form.dueDate}
                onConfirm={onConfirmSingle}
              />
            </View>
          </SafeAreaProvider>
          <SafeAreaProvider>
            <View style={styles.timePickerLayout}>
              <View style={styles.timeTextWrapper}>
                <Text style={styles.timeText}>
                  {form.dueTime === "" ? "" : form.dueTime}
                </Text>
              </View>
              <Button
                onPress={() => setTimeVisible(true)}
                uppercase={false}
                mode="contained-tonal"
                style={styles.button}>
                时间
              </Button>
              <TimePickerModal
                locale="zh"
                visible={timeVisible}
                onDismiss={onDismissTime}
                onConfirm={onConfirmTime}
                hours={12}
                minutes={14}
              />
            </View>
          </SafeAreaProvider>
        </View>
        <View style={styles.submitLayout}>
          <SubmitButton
            type="cancel"
            handleClick={() => {
              // 清除数据
              setFrom({
                title: "",
                detail: "",
                dueDate: undefined,
                dueTime: "",
              });
              // 关闭 Modal
              setVisible(false);
            }}></SubmitButton>
          <SubmitButton
            type="confirm"
            handleClick={async () => {
              // 提交数据
              const res = await taskReq(form);
              if (res && res.msg) {
                Toast.show(res.msg, toastSuccessConfig);
              }
              // 手动触发 tasks 请求
              mutate();
              // 清除数据
              setFrom({
                title: "",
                detail: "",
                dueDate: undefined,
                dueTime: "",
              });
              // 关闭 Modal
              setVisible(false);
            }}
            disabled={!isValid}></SubmitButton>
        </View>
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
  timeContainer: {
    flexDirection: "row",
    marginLeft: 15,
    marginRight: 15,
    marginTop: 10,
  },
  button: {
    width: "80%",
  },
  timePickerLayout: {
    height: 70,
    alignItems: "center",
  },
  timeTextWrapper: {
    height: 30,
    width: "100%",
    // backgroundColor: lightTheme.tGray2,
  },
  timeText: {
    textAlign: "center",
  },
  submitLayout: {
    flexDirection: "row",
    justifyContent: "flex-end",
    width: "100%",
    marginTop: 20,
    paddingRight: 25,
  },
});
