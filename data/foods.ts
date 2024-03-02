import { FoodCardProps } from "@/types/Food";

export const foodCard: FoodCardProps = {
  img: "https://cdn.jsdelivr.net/gh/wangyinyuan/Picgo/20240219231155.png",
  title: "早餐",
  calorieRange: "100-200",
  unit: "kcal",
  foods: ["牛奶/鲜果", "全谷物面包", "鸡蛋"],
  _id: "1",
};

export const foodSuggestions = [
  {
    title: "搭配考虑:",
    data: [
      "全谷物面包作为主要碳水来源开启一天活力",
      "鲜果补充纤维素、水分及维生素",
      "鸡蛋为您带来大量蛋白质",
    ],
  },
  {
    title: "个性化建议:",
    data: [
      "一个200g的红薯也是优秀的碳水来源",
      "您的鲜果偏好：苹果、香蕉",
      "能再喝上一杯豆浆也是极好的！",
    ],
  },
];
