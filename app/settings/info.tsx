import EmptyView from "@/components/Global/Empty";
import { Text, View } from "react-native";

export default function Info() {
  if (true) {
    return <EmptyView />;
  }

  return (
    <View>
      <Text>Info</Text>
    </View>
  );
}
