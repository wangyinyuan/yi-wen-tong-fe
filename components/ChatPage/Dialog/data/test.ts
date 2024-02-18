import generateID from "@/utils/generateId";

export default [
  {
    _id: generateID(),
    text: "如果你要结束问诊，请点击这个对话框下面的“结束问诊”按钮",
    createdAt: new Date(),
    user: {
      _id: 1,
      name: "Bot",
      avatar:
        "https://cdn.jsdelivr.net/gh/wangyinyuan/Picgo/319b0fdf8cc9bb8ee9d281e3c970c72d.png",
    },
    quickReplies: {
      type: "radio",
      keepIt: true,
      values: [
        {
          title: "😘 结束问诊",
          value: "end",
        },
      ],
    },
  },
  {
    _id: generateID(),
    text: "你好！我是你的私人 AI 医生，有什么可以帮到你的吗？😘",
    createdAt: new Date(),
    user: {
      _id: 1,
      name: "Bot",
      avatar:
        "https://cdn.jsdelivr.net/gh/wangyinyuan/Picgo/319b0fdf8cc9bb8ee9d281e3c970c72d.png",
    },
  },
];
