import { lightTheme } from "@/constants/Color";
import type { InputBoxProps } from "@/types/ChatPage";
import { View } from "react-native";
import { TextInput } from "react-native-paper";

// 默认单行的输入框。
export const InputBox = ({
  input,
  setInput,
  placeholder,
  label = "输入框",
  error = false,
  containerStyle,
}: InputBoxProps<string>) => {
  return (
    <View style={containerStyle}>
      <TextInput
        label={label}
        mode="outlined"
        placeholder={placeholder}
        value={input}
        onChangeText={(text) => setInput(text)}
        error={error}
        selectionColor={lightTheme.bgPurple1}
        outlineColor={lightTheme.bgPurple2}
        activeOutlineColor={lightTheme.bgPurple3}
      />
    </View>
  );
};
