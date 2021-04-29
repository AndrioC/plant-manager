import { useNavigation, useRoute } from '@react-navigation/core'
import React from 'react'
import Button from '../../components/Button'

import {
    Container,
    ViewContainer,
    Text,
    TextTitle,
    TextSubTitle,
    FooterView,
} from './styles'

interface Props{
    title: string;
    subtitle: string;
    buttonTitle: string;
    icon: 'smile' | 'hug';
    nextScreen: string;
}

const emojis = {
    hug: '🤗',
    smile: '😄',
}


const ConfirmationScreen:React.FC = () => {
    const navigation = useNavigation()
    const routes = useRoute()

    const {
        title,
        subtitle,
        buttonTitle,
        icon,
        nextScreen,
    } = routes.params as Props

    function handleMoveOn(){
        navigation.navigate(nextScreen)
    }

    return (
        <Container>
            <ViewContainer>
                <Text>
                    {emojis[icon]}
                </Text>

                <TextTitle>
                    {title}
                </TextTitle>

                <TextSubTitle>
                    {subtitle}
                </TextSubTitle>

            <FooterView>
                <Button title={buttonTitle} onPress={handleMoveOn}/>
            </FooterView>
            </ViewContainer>
        </Container>
    )
}

export default ConfirmationScreen