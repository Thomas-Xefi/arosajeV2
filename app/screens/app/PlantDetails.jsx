import {Badge, BadgeText, Button, Image, Text, VStack} from "@gluestack-ui/themed";
import {SafeAreaView, View, StyleSheet} from "react-native";
import {useContext, useEffect, useState} from "react";
import axios from "axios";
import {API_URL, useAuth} from "../../context/AuthContext";
import {useNavigation} from "@react-navigation/native";

export function PlantDetails({route}) {
    const navigation = useNavigation();
    const {user} = useAuth()
    const [plant, setPlant] = useState(route.params)

    const updateGuardian = async () => {
        const result = await axios.put(`${API_URL}/plants/${plant.id}?includes=guardian,owner,status`,
            {
                'guardian_id': user.id
            }
        )

        setPlant(result.data)
    }

    useEffect(() => {
        navigation.setOptions({
            title: `Details ${plant.name}`
        });
    }, [navigation, plant]);

    return (
        <>
            <SafeAreaView>
                <View style={{justifyContent: 'center', marginTop: 20, alignItems: 'center'}}>
                    <Image
                        style={{resizeMode: 'contain'}}
                        size={'2xl'}
                        borderRadius="$md"
                        source={{uri: 'https://picsum.photos/700'}}
                    />
                </View>
                <VStack space={'2xl'} style={styles.detailsContainer}>
                    <View style={{alignItems: 'flex-start', marginHorizontal: 20}}>
                        <Badge size="lg" variant="solid" borderRadius="$full" action="muted">
                            <BadgeText>{plant.status.name}</BadgeText>
                        </Badge>
                    </View>
                    <View style={{
                        marginLeft: 20,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}>
                        <Text style={{fontSize: 22, fontWeight: 'bold'}}>{plant.name}</Text>
                        <View style={styles.priceTag}>
                            <Text style={{
                                color: 'white',
                                fontWeight: 'bold',
                                fontSize: 16
                            }}>{plant.price}<sup>€</sup>/j</Text>
                        </View>
                    </View>
                    <VStack space={'sm'} style={{marginHorizontal: 20}}>
                        <Text style={{fontSize: 20, fontWeight: 'bold'}}>About</Text>
                        <Text style={{color: 'grey', fontSize: 16}}>{plant.description}</Text>
                    </VStack>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'flex-end',
                        justifyContent: 'flex-end',
                        marginHorizontal: 20
                    }}>
                        {
                            plant.guardian
                                ? <Text style={{fontWeight: 'bold', fontSize: 17}}>
                                    Plante gardée par {plant.guardian.firstname} {plant.guardian.lastname}
                                </Text>
                                : plant.owner.id !== user.id &&
                                <Button backgroundColor={'#72c269'} borderRadius={16} onPress={updateGuardian}>
                                    <Text style={{color: '#fff'}}>Je veux garder la plante</Text>
                                </Button>
                        }
                    </View>
                </VStack>
            </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    detailsContainer: {
        flex: 1,
        backgroundColor: '#fff',
        marginHorizontal: 7,
        marginBottom: 7,
        borderRadius: 20,
        marginTop: 30,
        paddingVertical: 30
    },
    priceTag: {
        backgroundColor: '#72c269',
        width: 100,
        height: 40,
        borderTopLeftRadius: 25,
        borderBottomLeftRadius: 25,
        justifyContent: 'center',
        alignItems: 'center'
    }
})