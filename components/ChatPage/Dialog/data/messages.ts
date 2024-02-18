export default [
  {
    _id: 9,
    text: "#awesome 3",
    createdAt: new Date(),
    user: {
      _id: 1,
      name: "Developer",
    },
  },
  {
    _id: 8,
    text: "#awesome 2",
    createdAt: new Date(),
    user: {
      _id: 1,
      name: "Developer",
    },
  },
  {
    _id: 7,
    text: "#awesome",
    createdAt: new Date(),
    user: {
      _id: 1,
      name: "Developer",
    },
  },
  {
    _id: 6,
    text: "Paris",
    createdAt: new Date(),
    user: {
      _id: 2,
      name: "React Native",
    },
    image: "https://cdn.jsdelivr.net/gh/wangyinyuan/Picgo/20240217184258.png",
  },
  {
    _id: 5,
    text: "Send me a picture!",
    createdAt: new Date(),
    user: {
      _id: 1,
      name: "Developer",
    },
  },
  {
    _id: 4,
    text: "",
    createdAt: new Date(),
    user: {
      _id: 2,
      name: "React Native",
    },
    sent: true,
    received: true,
    location: {
      latitude: 48.864601,
      longitude: 2.398704,
    },
  },
  {
    _id: 3,
    text: "Where are you?",
    createdAt: new Date(),
    user: {
      _id: 1,
      name: "Developer",
    },
  },
  {
    _id: 2,
    text: "Yes, and I use #GiftedChat!",
    createdAt: new Date(),
    pending: true,
    user: {
      _id: 2,
      name: "React Native",
    },
    sent: true,
    received: true,
  },
  {
    _id: 10,
    text: "This is a quick reply. Do you love Gifted Chat? (radio) KEEP IT",
    createdAt: new Date(),
    quickReplies: {
      type: "radio", // or 'checkbox',
      keepIt: true,
      values: [
        {
          title: "😋 Yes",
          value: "yes",
        },
        {
          title:
            "📷 Yes, let me show you with a picture! Again let me show you with a picture!",
          value: "yes_picture",
        },
        {
          title: "😞 Nope. What?",
          value: "no",
        },
      ],
    },
    user: {
      _id: 2,
      name: "React Native",
    },
  },
  // {
  //   _id: 39,
  //   text: "刚刚去哪里神游了?🤔要继续问诊吗？",
  //   createdAt: new Date(),
  //   user: {
  //     _id: 2,
  //     name: "React Native",
  //   },
  //   quickReplies: {
  //     type: "radio",
  //     keepIt: true,
  //     values: [
  //       {
  //         title: "🤪 继续问诊",
  //         value: "yes",
  //       },
  //       {
  //         title: "😘 结束问诊",
  //         value: "no",
  //       },
  //     ],
  //   },
  // },
  // {
  //   _id: 40,
  //   text: "你好像很久没打字了🤔还要继续吗？",
  //   createdAt: new Date(),
  //   user: {
  //     _id: 2,
  //     name: "React Native",
  //   },
  //   quickReplies: {
  //     type: "radio",
  //     keepIt: true,
  //     values: [
  //       {
  //         title: "🤪 继续问诊",
  //         value: "yes",
  //       },
  //       {
  //         title: "😘 结束问诊",
  //         value: "no",
  //       },
  //     ],
  //   },
  // },
  {
    _id: 20,
    text: "This is a quick reply. Do you love Gifted Chat? (checkbox)",
    createdAt: new Date(),
    pending: true,
    quickReplies: {
      type: "checkbox",
      keepIt: true,
      values: [
        {
          title: "Yes Sir 😋",
          value: "yes",
        },
        {
          title: "Yes, let me show you with a picture!",
          value: "yes_picture",
        },
        {
          title: "Nope. What?",
          value: "no",
        },
      ],
    },
    user: {
      _id: 2,
      name: "React Native",
    },
  },
  {
    _id: 30,
    createdAt: new Date(),
    video: "https://media.giphy.com/media/3o6ZthZjk09Xx4ktZ6/giphy.mp4",
    user: {
      _id: 2,
      name: "React Native",
    },
  },
  {
    _id: 31,
    createdAt: new Date(),
    audio:
      "https://file-examples.com/wp-content/uploads/2017/11/file_example_MP3_700KB.mp3",
    user: {
      _id: 2,
      name: "React Native",
    },
  },
  {
    _id: 32,
    createdAt: new Date(),
    text: "This is a system message",
    system: true,
  },
];
