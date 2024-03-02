import FoodDetails from "@/components/SuggestionPage/Food/FoodDetails";
import { router, useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { View } from "react-native";

export default function Suggestions() {
  const [isVisible, setIsVisible] = useState(true);
  function handleClose() {
    setIsVisible(false);
    router.back();
    setIsVisible(true);
  }

  // 获取路径参数
  const { params } = useLocalSearchParams();
  console.log(params);

  return (
    <View>
      <FoodDetails isVisible={isVisible} onClose={handleClose} details={1} />
    </View>
  );
}