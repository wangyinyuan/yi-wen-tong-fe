import React, { useState, useEffect } from 'react';
import { Text } from 'react-native';

export default function TypingMessage({ text }: { text: string}) {
    const [displayedText, setDisplayedText] = useState('');

    return <Text>{ displayedText }</Text>
}