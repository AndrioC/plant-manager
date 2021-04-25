import React from 'react'

import {
    Container,
    TextTitle,
    ImageStyled,
    TextSubtitle,
    TouchableButton,
} from './styles'

import Feather from 'react-native-vector-icons/Feather'

import wateringImg from '../../assets/watering.png'

const Welcome:React.FC = () => {
    return (
        <Container>
            <TextTitle>
                Gerencie {'\n'}
                suas plantas {'\n'}
                de forma fácil
            </TextTitle>

            <ImageStyled 
                source={wateringImg}
                resizeMode="contain"
            />
            <TextSubtitle>
                Não esqueça mais de regar suas plantas.
                Nós cuidamos de lembrar você sempre que precisar.
            </TextSubtitle>

            <TouchableButton activeOpacity={0.8}>
                <Feather name="chevron-right" size={18} color="#fff" style={{fontSize: 33}}/>
            </TouchableButton>
        </Container>
    )
}

export default Welcome