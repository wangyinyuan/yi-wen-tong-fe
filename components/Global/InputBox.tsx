import type { InputBoxProps } from '@/types/ChatPage';
import { TextInput } from 'react-native-paper';
import { View } from 'react-native';

// 默认单行的输入框。
export const InputBox = ({input, setInput} : InputBoxProps<string>) => {


    return (
        <View>
            <TextInput
        label="输入框"
        mode="outlined"
        placeholder='请输入咨询的内容'
        multiline={true}
        numberOfLines={2}
        value={input}
        onChangeText={text => setInput(text)}
    />
        
    </View>
        
    )
}