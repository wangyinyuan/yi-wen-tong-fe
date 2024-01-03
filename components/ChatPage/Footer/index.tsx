import React from 'react';
import { View, Text } from 'react-native';
import { InputBox } from './components/InputBox';
import type { InputBoxProps } from '@/types/ChatPage';

export default function ChatPageFooter({input, setInput} : InputBoxProps<string>) {
    return (
        <View>
            <Text>ChatPageFooter</Text>
            <InputBox input={input} setInput={setInput}/>
        </View>
    );
}