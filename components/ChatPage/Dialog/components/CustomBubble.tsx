import { Bubble, Time } from "react-native-gifted-chat";
import { lightTheme } from "@/constants/Color";


const renderTime = (props: any) => {
    const { currentMessage, position } = props;
        if (position === 'left' && currentMessage) {
          return (
            <Time
              {...props}
            timeTextStyle={{
                left: {
                  color: lightTheme.tGray1, // 将左侧时间文本颜色设置为白色
                },
              }}
            />
          );
        }
        return <Time {...props} />;
}


const CustomBubble = (props: any) => {
    return <Bubble {...props}
     wrapperStyle={{
        left: { backgroundColor: lightTheme.bgPurple1},
        right: {backgroundColor: lightTheme.bgPink1}
     }}
     renderTime={renderTime}
    />
}

export default CustomBubble;