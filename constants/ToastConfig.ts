import { lightTheme } from "./Color";

// 成功，失败，警告，信息的背景颜色和文字颜色
export const toastColor = {
  success: {
    bg: lightTheme.bgGreen1,
    text: lightTheme.tGreen1,
  },
  error: {
    bg: lightTheme.bgRed1,
    text: lightTheme.tRed1,
  },
  warning: {
    bg: lightTheme.bgYellow1,
    text: lightTheme.tYellow1,
  },
  info: {
    bg: lightTheme.bgBlue1,
    text: lightTheme.tBlue1,
  },
};

export const toastSuccessConfig = {
  position: 50,
  // 默认 info 的颜色
  backgroundColor: toastColor.success.bg,
  textColor: toastColor.success.text,
};

export const toastErrorConfig = {
  position: 50,
  // 默认 info 的颜色
  backgroundColor: toastColor.error.bg,
  textColor: toastColor.error.text,
};

export const toastWarningConfig = {
  position: 50,
  // 默认 info 的颜色
  backgroundColor: toastColor.warning.bg,
  textColor: toastColor.warning.text,
};

export const toastInfoConfig = {
  position: 50,
  // 默认 info 的颜色
  backgroundColor: toastColor.info.bg,
  textColor: toastColor.info.text,
};
