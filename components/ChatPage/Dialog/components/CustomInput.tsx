import { lightTheme } from "@/constants/Color";
import { FontAwesome } from "@expo/vector-icons";
import { Send } from "react-native-gifted-chat";

const baseStyle = {
  width: 40, // 按钮宽度
  height: 40, // 按钮高度
  borderRadius: 20, // 圆形按钮, 半径为宽/高的一半
  alignItems: "center",
  justifyContent: "center",
  marginHorizontal: 10,
  marginVertical: 1,
  marginLeft: 10,
};

export const renderSend = (props: any) => {
  return (
    <Send
      {...props}
      disabled={!props.text}
      containerStyle={{
        ...baseStyle,
        backgroundColor: props.text
          ? lightTheme.bgPurple3
          : lightTheme.bgPurple2,
      }}>
      <FontAwesome name="send-o" size={24} color={lightTheme.tWhite} />
    </Send>
  );
};
