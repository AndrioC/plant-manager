import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

import {
    Container,
    ViewContent,
    TextGreeting,
    TextUsername,
    Image,
} from './styles'

import profileImage from '../../assets/image.jpg'

const Header:React.FC = () => {

    const [name, setName] = useState<string>()

    useEffect(() => {
        async function loadStorageUserName(){
            const user = await AsyncStorage.getItem('@plantmanager:user')
            setName(user || '')
        }
        loadStorageUserName()
    }, [])

    return (
        <Container>
            <ViewContent>
                <TextGreeting>Olá,</TextGreeting>
                <TextUsername>{name}</TextUsername>
            </ViewContent>
            <Image source={profileImage}/>
        </Container>   
    )
}

export default Header