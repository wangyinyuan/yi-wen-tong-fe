import { ViewProps } from "react-native";

export type SubmitButtonProps = {
  type?: "confirm" | "cancel";
  handleClick?: () => void;
  style?: any;
};
