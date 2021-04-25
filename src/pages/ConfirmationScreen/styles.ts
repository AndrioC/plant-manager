import styled from 'styled-components/native'
import colors from '../../../styles/colors';

export const Container = styled.SafeAreaView`
    flex: 1;
    background: white;
    width: 100%;
    align-items: center;
    justify-content: space-around;
`;

export const ViewContainer = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 0 30px;
`;

export const Text = styled.Text`
    font-size: 75px;
`;

export const TextTitle = styled.Text`
    font-size: 21px;
    text-align: center;
    font-weight: bold;
    color: ${colors.heading};
    line-height: 39px;
    margin-top: 15px;
`;

export const TextSubTitle = styled.Text`
    font-family: 'Jost';
    text-align: center;
    font-size: 18px;
    padding: 12px 0;
    color: ${colors.heading};
`;

export const FooterView = styled.View`
    width: 100%;
    padding: 0 48px;
    margin-top: 21px;
`;