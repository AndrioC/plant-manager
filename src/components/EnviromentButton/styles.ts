import styled from 'styled-components/native'
import colors from '../../../styles/colors'
import { RectButton } from 'react-native-gesture-handler'

interface RectButtonStyledProps{
    isActive: boolean;
}

interface TextProps{
    isActive: boolean;
}

export const RectButtonStyled = styled(RectButton)<RectButtonStyledProps>`
    background-color: ${props => props.isActive ? colors.green_light : colors.shape};
    height: 42px;
    width: 75px;
    justify-content: center;
    align-items: center;
    border-radius: 12px;
    margin-right: 6px;
`;

export const Text = styled.Text<TextProps>`
    color: ${props => props.isActive ? colors.green_dark : colors.heading};
    font-family: 'Jost';
    font-weight: ${props => props.isActive ? 'bold' : 'normal'}
`;
