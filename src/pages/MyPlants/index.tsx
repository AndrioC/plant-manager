import React, { useEffect, useState } from 'react'
import Header from '../../components/Header'

import {
    Container,
    ContainerSpotLight,
    ImageSpotLight,
    TextSpotLight,
    ContainerPlants,
    PlanTitle,
} from './styles'

import waterDrop from '../../assets/waterdrop.png'
import { FlatList } from 'react-native-gesture-handler'
import { PlantProps, loadPlant } from '../../libs/storage'
import { formatDistance } from 'date-fns'
import { pt } from 'date-fns/locale'
import { Text } from '../UserIdentification/styles'
import PlantCardSecondary from '../../components/PlantCardSecondary'

const MyPlants:React.FC = () => {
    
    const [myPlants, setMyPlants] = useState<PlantProps[]>([])
    const [loading, setLoading] = useState(true)
    const [nextWatered, setNextWatered] = useState<string>()

    useEffect(() => {
        async function loadStoragedData(){
            const plantsStoraged = await loadPlant()
            const nextTime = formatDistance(
                new Date(plantsStoraged[0].dateTimeNotification).getTime(),
                new Date().getTime(),
                { locale: pt }
            )

            setNextWatered(
                `Não esqueça de regar a ${plantsStoraged[0].name} às ${nextTime} horas.`
            )

            setMyPlants(plantsStoraged)
            setLoading(false)
        }

        loadStoragedData()
    }, [])

    return (
        <Container>
            <Header />

            <ContainerSpotLight>
                <ImageSpotLight source={waterDrop}/>
                <TextSpotLight>{nextWatered}</TextSpotLight>
            </ContainerSpotLight>

            <ContainerPlants>
                <PlanTitle>
                    Próximas regadas
                </PlanTitle>

                <FlatList 
                    data={myPlants}
                    keyExtractor={(item) => String(item.id)}
                    renderItem={({ item }) => (
                        <PlantCardSecondary data={item} />
                    )}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ flex: 1 }}
                />
            </ContainerPlants>

        </Container>
    )
}

export default MyPlants