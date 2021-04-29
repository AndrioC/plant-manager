import styled from 'styled-components/native'
import colors from '../../../styles/colors'

export const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: space-between;
    padding: 0 30px;
    padding-top: 50px;
    background: ${colors.background};
`;

export const ContainerSpotLight = styled.View`
    background: ${colors.blue_light};
    padding: 0 21px;
    border-radius: 21px;
    height: 110px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const ImageSpotLight = styled.Image`
    width: 60px;
    height: 60px;
`;

export const TextSpotLight = styled.Text`
    flex: 1;
    color: ${colors.blue};
    padding: 0 21px;
    text-align: justify;
`;

export const ContainerPlants = styled.View`
    flex: 1;
    width: 100%;
`;

export const PlanTitle = styled.Text`
    font-size: 24px;
    font-family: 'Jost';
    color: ${colors.heading};
    margin: 21px 0;
    font-weight: bold;
`;

