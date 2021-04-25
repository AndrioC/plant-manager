import React from 'react'
import { TouchableOpacityProps } from 'react-native'

import {
    TouchableButton,
    ButtonText,
} from './styles'

interface ButtonProps extends TouchableOpacityProps{
    title: string;
}

const Button:React.FC<ButtonProps> = ({ title, ...rest }) => {
    return (
        <TouchableButton 
            activeOpacity={0.8} 
            { ...rest }
        >
            <ButtonText>
                { title }
            </ButtonText>
        </TouchableButton>
    )
}

export default Button