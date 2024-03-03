import { lightTheme } from "@/constants/Color";
import type { SubmitButtonProps } from "@/types/Button";
import { StyleSheet } from "react-native";
import { Button } from "react-native-paper";

export default function SubmitButton({
  type = "confirm",
  handleClick = () => {},
  style,
  disabled = false,
}: SubmitButtonProps) {
  const text = type === "confirm" ? "确认" : "取消";
  const specificStyle = type === "confirm" ? styles.confirm : styles.cancel;

  return (
    <Button
      style={[styles.base, specificStyle, style]}
      mode="text"
      onPress={handleClick}
      textColor={type === "confirm" ? lightTheme.tGreen1 : lightTheme.tGray3}
      disabled={disabled}>
      {text}
    </Button>
  );
}

const styles = StyleSheet.create({
  base: {width: 80, margin: 5, borderRadius: 15,},
  confirm: {borderColor: lightTheme.tGreen1},
  cancel: {borderColor: lightTheme.tGray3},
});
