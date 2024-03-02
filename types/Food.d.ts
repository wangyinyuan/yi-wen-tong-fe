import { DetailCard } from "./Food.d";
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
  _id: string;
};

export type FoodDetails = {
  img: string;
  // 卡片标题
  title: "早餐" | "午餐" | "晚餐" | "加餐";
  // 食物卡片
  detailCards: DetailCard[];

  details: Detail[];
};

export type Detail = {
  // 详细建议
  title: string;
  suggestions: string[];
};

// 单个食物卡片
export type DetailCard = {
  name: string;
  img: string;
};

export type FoodCardData = {
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
  // 详情页请求
  _id: string;
};
