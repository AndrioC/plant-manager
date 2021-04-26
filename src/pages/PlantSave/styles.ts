import styled from 'styled-components/native'
import colors from '../../../styles/colors'
import { getBottomSpace } from 'react-native-iphone-x-helper'

export const Container = styled.View`
    flex: 1;
    justify-content: space-between;
    background-color: ${colors.shape};
`;

export const PlantInfo = styled.View`
    flex: 1;
    padding: 50px 30px;
    align-items: center;
    justify-content: center;
    background-color: ${colors.shape};
`;

export const PlantNameText = styled.Text`
    font-family: 'Jost';
    font-weight: 700;
    font-size: 24px;
    color: ${colors.heading};
    margin-top: 15px;
`;


export const AboutPlantTexT = styled.Text`
    text-align: center;
    font-family: 'Jost';
    font-size: 18px;
    color: ${colors.heading};
`;


export const ViewController = styled.View`
    background-color: ${colors.white};
    padding: 0 21px;
    padding-top: 21px;
    padding-bottom: ${getBottomSpace() || 20}px;
`;


export const ViewTipContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: ${colors.blue_light};
    padding: 21px;
    border-radius: 21px;
    position: relative;
    bottom: 60px;
`;


export const ImageTip = styled.Image`
    width: 57px;
    height: 57px;
`;


export const TextTip = styled.Text`
    flex: 1;
    margin-left: 21px;
    font-family: 'Jost';
    color: ${colors.blue};
    font-size: 15px;
    text-align: justify;
`;


export const TextAlert = styled.Text`
    text-align: center;
    font-family: 'Jost';
    color: ${colors.heading};
    font-size: 13px;
    margin-bottom: 6px;
`;

export const DateTimePickerText = styled.Text`
    color: ${colors.heading};
    font-size: 24px;
`;