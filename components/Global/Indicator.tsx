import { ActivityIndicator } from "react-native-paper";

export default function Indicator({
  animating = false,
}: {
  animating: boolean;
}) {
  return <ActivityIndicator animating={animating} size="large" style={{marginTop: 30}}/>;
}
