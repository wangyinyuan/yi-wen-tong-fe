import { View, ViewStyle } from "react-native";
import { IMessage } from "react-native-gifted-chat";

/**
 * 输入框属性类型定义。
 */
export type InputBoxProps<T> = {
  /**
   * 输入值。
   */
  input: T;
  /**
   * 设置输入值的函数。
   * @param input 新的输入值。
   */
  setInput: (input: T) => void;

  /**
   * 输入框的占位符。
   */
  placeholder?: string;

  /**
   * 输入框标签。
   */
  label?: string;

  error?: boolean;

  containerStyle?: ViewStyle;

  numberOfLines?: number;

  // 处理输入框失焦事件。
  handleBlur?: () => void;

  // 是否为密码输入框。
  secureTextEntry?: boolean;
};

export type MyIMessage = IMessage & { createdAt: string | Date | number };

export type NewChatData = {
  _id: string;
  createdAt: string | Date | number;
  messages: MyIMessage[];
};

export type History = {
  _id: string;
  createdAt: string | Date | number;
  title: string;
};

export type Messages = {
  _id: string;
  createdAt: string | Date | number;
  messages: MyIMessage[];
};

export type ReplyContent = {
  title: string;
  value: string;
  messageId?: any;
};
