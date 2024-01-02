import { createContext } from "react";

export const ThemeContext = createContext('light');

// TODO: 检验 RN 的 ThemeProvider 是否可以直接使用，不用自己封装。