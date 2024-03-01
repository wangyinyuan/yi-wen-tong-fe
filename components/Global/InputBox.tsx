import { lightTheme } from "@/constants/Color";
import type { InputBoxProps } from "@/types/ChatPage";
import { View } from "react-native";
import { TextInput } from "react-native-paper";
import { useState } from "react";

// 默认单行的输入框。
export const InputBox = ({
  input,
  setInput,
  placeholder,
  label = "输入框",
  error = false,
  containerStyle,
  handleBlur,
  secureTextEntry = false,
}: InputBoxProps<string>) => {
  // 如果为密码输入框，则设置小眼睛图标。
  const [isSecureTextEntry, setIsSecureTextEntry] = useState(secureTextEntry);

  const togglePasswordVisibility = () => {
    setIsSecureTextEntry(!isSecureTextEntry);
  };

  const eyeIcon = secureTextEntry ? (
    <TextInput.Icon
      icon="eye"
      onPress={togglePasswordVisibility}></TextInput.Icon>
  ) : null;

  return (
    <View style={containerStyle}>
      <TextInput
        label={label}
        mode="outlined"
        secureTextEntry={isSecureTextEntry}
        placeholder={placeholder}
        value={input}
        onChangeText={(text) => setInput(text)}
        error={error}
        onBlur={handleBlur}
        selectionColor={lightTheme.bgPurple1}
        outlineColor={lightTheme.bgPurple2}
        activeOutlineColor={lightTheme.bgPurple3}
        theme={{ colors: { onSurfaceVariant: lightTheme.tGray3 } }}
        right={eyeIcon}
      />
    </View>
  );
};
