import styled from 'styled-components/native'
import colors from '../../../styles/colors'
import { RectButton } from 'react-native-gesture-handler'

export const RectButtonStyled = styled(RectButton)`
    flex: 1;
    max-width: 45%;
    background-color: ${colors.shape};
    border-radius: 21px;
    padding: 24px 0;
    align-items: center;
    margin: 10px;
`;

export const Text = styled.Text`
    color: ${colors.green_dark};
    font-family: 'Jost';
    margin: 0 15px;
    font-weight: bold;
`;

export const Image = styled.Image`
    width: 70px;
    height: 70px;
    border-radius: 40px;
`;