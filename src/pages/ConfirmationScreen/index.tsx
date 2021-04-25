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


const ConfirmationScreen:React.FC = () => {

    return (
        <Container>
            <ViewContainer>
                <Text>
                    😄
                </Text>

                <TextTitle>
                    Prontinho
                </TextTitle>

                <TextSubTitle>
                    Agora vamos começar a cuidar das suas
                    plantinhas com muito cuidado.
                </TextSubTitle>

            <FooterView>
                <Button title="Confirmar"/>
            </FooterView>
            </ViewContainer>
        </Container>
    )
}

export default ConfirmationScreen