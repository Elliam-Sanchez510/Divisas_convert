import React from 'react'
import { TouchableOpacity, StyleSheet } from 'react-native'
import Textos from './Textos'

interface Props {
    color?: 'light' | 'dark';
    text: string;
    onPress: () => void
    disabled: boolean;
}

const ButtonCalcular = ({ color, text, onPress, disabled }: Props) => {
    return (
        <TouchableOpacity
            disabled={disabled}
            onPress={onPress}
            style={[
                styles.button,
                color === 'dark' ? styles.dark : null,
            ]}
        >
            <Textos text={text} type='normal'/>
        </TouchableOpacity>
    )
}

export default ButtonCalcular

const styles = StyleSheet.create({
    button: {
        marginLeft:100,
        margin: 10,
        top: 5,
        borderRadius: 5,
        height: 40,
        width: 100,

    },
    dark: {
        backgroundColor:'#abb8c3',
        borderColor: '#abb8c3',
        borderRadius: 50,
        paddingVertical: 5,
        paddingHorizontal: 9,
        textAlign: 'center',
    },
})