import styled from 'styled-components/native'
import colors from '../../../styles/colors';

interface TextInputProps{
    isFocused: boolean;
    isFilled: boolean;
}

export const Container = styled.SafeAreaView`
    flex: 1;
    background: white;
    width: 100%;
    align-items: center;
    justify-content: space-around;
`;

export const KeyboardAvoidingView = styled.KeyboardAvoidingView`
    flex: 1;
    background: white;
    width: 100%;
    align-items: center;
    justify-content: space-around;
`;

export const ViewContainer = styled.View`
    flex: 1;
    width: 100%;
`;

export const ViewForm = styled.View`
    flex: 1;
    justify-content: center;
    padding: 0 54px;
    align-items: center;
`;

export const Text = styled.Text`
    font-size: 45px;
`;

export const TextTitle = styled.Text`
    font-size: 33px;
    text-align: center;
    color: ${colors.heading};
    font-family: 'Jost';
    font-weight: 600;
    line-height: 33px;
    margin-top: 21px;
`;

export const TextInput = styled.TextInput<TextInputProps>`
    border-bottom-width: 1px;
    border-bottom-color: ${props => (props.isFocused || props.isFilled) ? colors.green : colors.gray};
    color: #000;
    width: 100%;
    font-size: 18px;
    margin-top: 51px;
    padding: 10px;
    text-align: center;
`;

export const FooterView = styled.View`
    margin-top: 45px;
    width: 100%;
    padding: 0 20px;
`;