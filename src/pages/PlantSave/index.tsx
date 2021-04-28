import React, { useState } from 'react'

import {
    Container,
    PlantInfo,
    PlantNameText,
    AboutPlantTexT,
    ViewController,
    ViewTipContainer,
    ImageTip,
    TextTip,
    TextAlert,
    DateTimePickerText,
} from './styles'

import { SvgFromUri } from 'react-native-svg'
import { useRoute } from '@react-navigation/core'
import DateTimePicker, { Event } from '@react-native-community/datetimepicker'
import { isBefore, format } from 'date-fns'
import { Alert, Platform } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

import waterDrop from '../../assets/waterdrop.png'
import Button from '../../components/Button'
import { loadPlant, PlantProps, savePlant } from '../../libs/storage'

interface Params{    
    plant: PlantProps;
}

const PlantSave:React.FC = () => {

    const [selectedDateTime, setSelectedDateTime] = useState(new Date())
    const [showDatePicker, setShowDataPicker] = useState(Platform.OS === 'ios')

    const route = useRoute()
    const { plant } = route.params as Params 

    function handleChangeTime(event: Event, dateTime: Date | undefined){
        if(Platform.OS === 'android'){
            setShowDataPicker(oldState => !oldState)
        }

        if(dateTime && isBefore(dateTime, new Date())){
            setSelectedDateTime(new Date())
            return Alert.alert('Escolha uma hora no futuro!')
        }

        if (dateTime){
            setSelectedDateTime(dateTime)
        }
    }

    function handleOpenDateTimePickerForAndroid(){
        setShowDataPicker(oldState => !oldState)    
    }

    async function handleSave(){
        
       try {
            await savePlant({
                ...plant,
                dateTimeNotification: selectedDateTime,
            })
        } catch {
            Alert.alert("Não foi possível salvar!")
        }
        
    }

    return (
        <Container>
            <PlantInfo>
                <SvgFromUri 
                    uri={plant.photo}
                    width={150}
                    height={150}
                />

                <PlantNameText>{plant.name}</PlantNameText>
                <AboutPlantTexT>{plant.about}</AboutPlantTexT>
            </PlantInfo>

            <ViewController>
                <ViewTipContainer>
                    <ImageTip source={waterDrop} />
                    <TextTip>{plant.water_tips}</TextTip>
                </ViewTipContainer>

                <TextAlert>
                    Escolha o melhor horário para ser lembrado:
                </TextAlert>

                {showDatePicker && (
                    <DateTimePicker 
                        value={selectedDateTime}
                        mode="time"
                        display="spinner"
                        onChange={handleChangeTime}                    
                    />
                )}

                {
                    Platform.OS === 'android' && (
                        <TouchableOpacity 
                        style={{
                            width: '100%',
                            alignItems: 'center',
                            paddingVertical: 40,
                        }}
                        onPress={handleOpenDateTimePickerForAndroid}>
                            <DateTimePickerText>
                                {`Mudar ${format(selectedDateTime, 'HH:mm')}`}
                            </DateTimePickerText>
                        </TouchableOpacity>
                    )
                }

                <Button 
                    title="Cadastrar planta" 
                    onPress={handleSave}
                />

            </ViewController>

        </Container>
    )
}

export default PlantSave