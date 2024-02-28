import { lightTheme } from "@/constants/Color";
import type { InputBoxProps } from "@/types/ChatPage";
import { TextStyle, View } from "react-native";
import { TextInput } from "react-native-paper";

// 默认单行的输入框。
export const MultiInputBox = ({
  input,
  setInput,
  placeholder,
  label = "输入框",
  error = false,
  containerStyle,
  style = { height: 125 },
  numberOfLines = 4,
}: InputBoxProps<string> & { style?: TextStyle }) => {
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
        multiline={true}
        numberOfLines={numberOfLines}
        style={style}
        theme={{ colors: { onSurfaceVariant: lightTheme.tGray3 } }}
      />
    </View>
  );
};
