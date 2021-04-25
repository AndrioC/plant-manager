import styled from 'styled-components/native'
import colors from '../../../styles/colors'
import { Dimensions } from 'react-native'

export const Container = styled.SafeAreaView`
    flex: 1;
    align-items: center;
    justify-content: space-around;
    background: white;
`;

export const TextTitle = styled.Text`
    font-size: 32px;
    font-weight: bold;
    text-align: center;
    color: ${colors.heading};
    margin-top: 39px;
    font-family: 'Jost';
    line-height: 36px;
`;

export const ImageStyled = styled.Image`
    width: ${Dimensions.get('window').width * .7}px;
`;

export const TextSubtitle = styled.Text`
    text-align: center;
    font-size: 18px;
    padding: 20px 0;
    color: ${colors.heading};

    font-family: sans-serif;
`;

export const TouchableButton = styled.TouchableOpacity`
    background-color: ${colors.green};
    justify-content: center;
    align-items: center;
    border-radius: 16px;
    margin-bottom: 10px;
    height: 57px;
    width: 57px;
`;