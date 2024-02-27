import { Card } from "react-native-paper";
// Carousel 里面的一个数据项
export type CarouselData = {
  img: string;
  value: string;
};

export type CardData = {
  title: string;
  content: string;
  value: string;
};

export type SportsData = {
  carouselData: CarouselData[];
  frequencyList: CardData[];
  contentList: CardData[];
};
