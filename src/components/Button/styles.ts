import styled from 'styled-components/native'
import colors from '../../../styles/colors'

export const TouchableButton = styled.TouchableOpacity`
    background-color: ${colors.green};
    height: 57px;
    border-radius: 16px;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
    padding: 0 10px;
`;

export const ButtonText = styled.Text`
    font-size: 18px;
    color: ${colors.white};
    font-family: 'Jost';
`;