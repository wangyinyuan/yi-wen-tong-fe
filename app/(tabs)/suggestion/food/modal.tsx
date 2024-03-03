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

  const { _id } = useLocalSearchParams();


  return (
    <View style={{ flex: 1 }}>
      <FoodDetails isVisible={isVisible} onClose={handleClose} />
    </View>
  );
}
