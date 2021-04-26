import React from 'react'
import { RectButtonProps } from 'react-native-gesture-handler'

import {
    RectButtonStyled,
    Text,
} from './styles'

interface EnvironmentButtonProps extends RectButtonProps{
    title: string;
    active?: boolean;
}

const EnviromentButton:React.FC<EnvironmentButtonProps> = ({ title, active = false, ...rest }) => {
    return (
        <RectButtonStyled {...rest} isActive={active}>
            <Text isActive={active}>
                {title}
            </Text>
        </RectButtonStyled>
    )
}

export default EnviromentButton