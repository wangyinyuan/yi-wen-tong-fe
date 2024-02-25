import FoodDetails from "@/components/SuggestionPage/Food/FoodDetails";
import { router } from "expo-router";
import { useState } from "react";
import { View } from "react-native";

export default function Suggestions() {
  const [isVisible, setIsVisible] = useState(true);
  function handleClose() {
    setIsVisible(false);
    router.back();
    setIsVisible(true);
  }

  return (
    <View>
      <FoodDetails isVisible={isVisible} onClose={handleClose} details={1} />
    </View>
  );
}