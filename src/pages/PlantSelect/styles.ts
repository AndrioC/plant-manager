import styled from 'styled-components/native'
import colors from '../../../styles/colors'

export const Container = styled.View`
    flex: 1;
    background: ${colors.background};
`;

export const ViewWrapper = styled.View`
    padding: 0 33px;
`;

export const ViewPlants = styled.View`
    flex: 1;
    justify-content: center
`;


export const TextTitle = styled.Text`
    font-size: 18px;
    color: ${colors.heading};
    font-family: 'Jost';
    line-height: 21px;
    margin-top: 15px;
    font-weight: bold;
`;

export const TextSubtitle = styled.Text`
    font-size: 18px;
    font-family: 'Jost';
    color: ${colors.heading};
`;