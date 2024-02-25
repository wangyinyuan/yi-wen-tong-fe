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
};

export type MyIMessage = IMessage & { createdAt: string | Date | number };
