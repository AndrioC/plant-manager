import React, { useState } from 'react'
import { Alert, Platform } from 'react-native'
import Button from '../../components/Button'

import {
    Container,
    KeyboardAvoidingView,
    ViewContainer,
    ViewForm,
    TextTitle,
    Text,
    TextInput,
    FooterView,
} from './styles'


const UserIdentification:React.FC = () => {
    const [isFocused, setIsFocused] = useState(false)
    const [isFilled, setIsFilled] = useState(false)
    const [name, setName] = useState<string>()

    function handleInputBlur(){
        setIsFocused(false)
        setIsFilled(!!name)
    }

    function handleInputFocus(){
        setIsFocused(true)
    }

    function handleInputChange(value: string){
        setIsFilled(!!value)
        setName(value)
    }

    return (
        <Container>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
                <ViewContainer>
                    <ViewForm>
                        <Text>
                            {isFilled ? '😊' : '😄' }
                        </Text>
                        <TextTitle>
                            Como podemos {'\n'}
                            chamar você?
                        </TextTitle>

                        <TextInput 
                            placeholder="Digite um nome" 
                            placeholderTextColor="#b9b8b8"
                            onBlur={handleInputBlur}
                            onFocus={handleInputFocus}
                            isFocused={isFocused}
                            isFilled={isFilled}
                            onChangeText={handleInputChange}
                        />
                        <FooterView>
                            <Button title="Confirmar"/>
                        </FooterView>
                    </ViewForm>
                </ViewContainer>
            </KeyboardAvoidingView>
        </Container>
    )
}

export default UserIdentification