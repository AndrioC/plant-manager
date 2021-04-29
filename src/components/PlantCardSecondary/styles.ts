import styled from 'styled-components/native'
import colors from '../../../styles/colors'
import { RectButton } from 'react-native-gesture-handler'

export const RectButtonStyled = styled(RectButton)`
    width: 100%;
    padding: 25px 10px;
    border-radius: 21px;
    flex-direction: row;
    align-items: center;
    background-color: ${colors.shape};
    margin: 5px 0;
`;

export const TextTitle = styled.Text`
    color: ${colors.heading};
    font-family: 'Jost';
    font-size: 18px;
    font-weight: bold;
`;

export const Image = styled.Image`
    width: 70px;
    height: 70px;
    border-radius: 40px; 
    //{1:49h}
`;