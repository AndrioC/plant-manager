import styled from 'styled-components/native'
import colors from '../../../styles/colors'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'

export const Container = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: ${getStatusBarHeight()}px;
`;

export const ViewContent = styled.View`

`;

export const TextGreeting = styled.Text`
    font-size: 33px;
    color: ${colors.heading};
    font-family: 'Jost';
`;

export const TextUsername = styled.Text`
    font-size: 33px;
    font-family: 'Jost';
    color: ${colors.heading};
    font-weight: bold;
    line-height: 39px;
`;

export const Image = styled.Image`
    width: 70px;
    height: 70px;
    border-radius: 40px;
`;