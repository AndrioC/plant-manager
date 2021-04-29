import React from 'react'
import { View } from 'react-native'
import { RectButtonProps } from 'react-native-gesture-handler'
import { SvgFromUri } from 'react-native-svg'
import colors from '../../../styles/colors'
import { Text } from '../../pages/UserIdentification/styles'

import {
    RectButtonStyled,
    TextTitle,
} from './styles'

interface PlantCardSecondaryProps extends RectButtonProps{
    data: {
        name: string;
        photo: string;
        hour: string;
    }
}

const PlantCardSecondary:React.FC<PlantCardSecondaryProps> = ({ data, ...rest }) => {
    return (
        <RectButtonStyled {...rest}>
            <SvgFromUri 
                uri={data.photo}
                width={50}
                height={50}
            />
            <TextTitle>
                {data.name}
            </TextTitle>
            <View
                style={{
                    flex: 1,
                    alignItems: 'flex-end', 
                }}
            >
                <Text
                    style={{
                        fontSize: 16,
                        color: colors.body_light,
                    }}
                >Regar às</Text>
                <Text
                    style={{
                        marginTop: 5,
                        fontSize: 16,
                        color: colors.body_dark,
                    }}
                >{data.hour}</Text>
            </View>
        </RectButtonStyled>  
    )
}

export default PlantCardSecondary