import React, { useEffect, useState } from 'react'
import { FlatList, View, ActivityIndicator } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import EnviromentButton from '../../components/EnviromentButton'
import Header from '../../components/Header'
import PlantCardPrimary from '../../components/PlantCardPrimary'
import Load from '../../components/Load'
import api from '../../services/api'

import {
    Container,
    ViewWrapper,
    ViewPlants,
    TextTitle,
    TextSubtitle,
} from './styles'
import colors from '../../../styles/colors'
import { PlantProps } from '../../libs/storage'

interface EnviromentProps{
    key: string;
    title: string;
}

const PlantSelect:React.FC = () => {
    const [enviroments, setEnviroments] = useState<EnviromentProps[]>([])
    const [plants, setPlants] = useState<PlantProps[]>([])
    const [filteredPlants, setFilteredPlants] = useState<PlantProps[]>([])
    const [enviromentSelected, setEnviromentSelected] = useState('all')
    const [loading, setLoading] = useState(true)

    const [page, setPage] = useState(1)
    const [loadingMore, setLoadingMore] = useState(false)

    const navigation = useNavigation()

    function handleEnviromentSelected(enviroment: string){
        setEnviromentSelected(enviroment)

        if (enviroment === 'all')
            return setFilteredPlants(plants)

        const filtered = plants.filter(plant =>
            plant.environments.includes(enviroment)
        )

        setFilteredPlants(filtered)
    }

    async function fetchPlants(){
        const { data } = await api.get(`plants?_sort=name&_order=asc&_page=${page}&_limit=8`)

        if (!data)
            return setLoading(true)

        if (page > 1){
            setPlants(oldValue => [...oldValue, ...data])
            setFilteredPlants(oldValue => [...oldValue, ...data])
        } else {
            setPlants(data)
            setFilteredPlants(data)
        }

        setLoading(false)
        setLoadingMore(false)
    }

    function handleFetchMore(distance: number){
        if (distance < 1)
            return
        
        setLoadingMore(true)
        setPage(oldValue => oldValue + 1)
        fetchPlants()
    }

    function handlePlantSelect(plant: PlantProps){
        navigation.navigate('PlantSave', { plant })
    }

    useEffect(() => {
        async function fetchEnviroment(){
            const { data } = await api.get('plants_environments?_sort=title&_order=asc')
            setEnviroments([
                {
                    key: 'all',
                    title: 'Todos',
                },
                ... data
            ])
        }

        fetchEnviroment()
    }, [])

    useEffect(() => {        
        fetchPlants()
    }, [])

    if (loading)
        return < Load />

    return (
        <Container>
            <ViewWrapper>
                <Header />
                <TextTitle>
                    Em qual ambiente
                </TextTitle>
                <TextSubtitle>
                    você quer colocar sua planta?
                </TextSubtitle>
            </ViewWrapper>
            <View>
                <FlatList 
                    data={enviroments}
                    keyExtractor={(item) => String(item.key)}
                    renderItem={({item}) => (
                        <EnviromentButton 
                            title={item.title}
                            active={item.key === enviromentSelected}
                            onPress={() => handleEnviromentSelected(item.key)}
                        />                        
                    )}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{
                        height: 42,
                        justifyContent: 'center',
                        paddingBottom: 6,
                        marginTop: 33,
                        paddingHorizontal: 33,
                    }}
                />
            </View>  

            <ViewPlants style={{padding: 33}}>
                <FlatList 
                    data={filteredPlants}
                    keyExtractor={(item) => String(item.id)}
                    renderItem={({item}) => (
                        <PlantCardPrimary 
                            data={item}
                            onPress={() => handlePlantSelect(item)}
                        />
                    )}
                    showsVerticalScrollIndicator={false}
                    numColumns={2}
                    onEndReachedThreshold={0.1}
                    onEndReached={({ distanceFromEnd }) => 
                        handleFetchMore(distanceFromEnd)
                    }
                    ListFooterComponent={
                        loadingMore ?
                            <ActivityIndicator color={colors.green} />
                        :
                            <></>
                    }
                />
            </ViewPlants> 
        </Container>
    )
}

export default PlantSelect