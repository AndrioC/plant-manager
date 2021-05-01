import React from 'react'
import { View, Animated } from 'react-native'
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'
import Swipeable from 'react-native-gesture-handler/Swipeable'
import { SvgFromUri } from 'react-native-svg'
import colors from '../../../styles/colors'
import { Text } from '../../pages/UserIdentification/styles'

import Feather from 'react-native-vector-icons/Feather'

import {
    RectButtonStyled,
    TextTitle,
} from './styles'

interface PlantCardSecondaryProps extends RectButtonProps{
    data: {
        name: string;
        photo: string;
        hour: string;
    };
    handleRemove: () => void;
}

const PlantCardSecondary:React.FC<PlantCardSecondaryProps> = ({ data, handleRemove, ...rest }) => {
    return (
        <Swipeable
            overshootRight={false}
            renderRightActions={() => (
                <Animated.View>
                    <View>
                        <RectButton
                            style={{
                                width: 100,
                                height: 84,
                                backgroundColor: colors.red,
                                marginTop: 15,
                                borderRadius: 21,
                                justifyContent: 'center',
                                alignItems: 'center',
                                position: 'relative',
                                right: 10,
                                paddingLeft: 15,
                            }}
                            onPress={handleRemove}
                        >
                            <Feather 
                                name="trash"
                                size={32}
                                color={colors.white}
                            />
                        </RectButton>
                    </View>
                </Animated.View>
            )}
        >
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
        </Swipeable>
    )
}

export default PlantCardSecondary