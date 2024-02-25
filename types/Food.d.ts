import { FoodDetails } from "@/components/SuggestionPage/Food/FoodDetails";
export type FoodCardProps = {
  // 卡片图片
  img: string;
  // 卡片标题
  title: "早餐" | "午餐" | "晚餐" | "加餐";
  // 卡路里
  calorieRange: string;
  // 单位
  unit: "cal" | "kcal";
  // 食物名称
  foods: string[];
  // 样式
  style?: ViewStyle;
};

export type FoodDetails = {
  img: string;
  title: string;
};
