import React from 'react'
import { RectButtonProps } from 'react-native-gesture-handler'
import { SvgFromUri } from 'react-native-svg'

import {
    RectButtonStyled,
    Text,
    Image,
} from './styles'

interface PlantCardPrimaryProps extends RectButtonProps{
    data: {
        name: string;
        photo: string;
    }
}

const PlantCardPrimary:React.FC<PlantCardPrimaryProps> = ({ data, ...rest }) => {
    return (
        <RectButtonStyled {...rest}>
            <SvgFromUri 
                uri={data.photo}
                width={70}
                height={70}
            />
            <Text>
                {data.name}
            </Text>
        </RectButtonStyled>   
    )
}

export default PlantCardPrimary