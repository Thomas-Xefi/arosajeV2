import {Dimensions, StyleSheet, View} from "react-native";
import {Box, Text, Image, Pressable} from "@gluestack-ui/themed";
import Ionicons from 'react-native-vector-icons/Ionicons'
import {useNavigation} from "@react-navigation/native";

export function PlantCard({plant}) {
    const navigation = useNavigation();

    return (
        <>
            <Box style={styles.card}>
                <Image style={{alignSelf: 'center', height: 100, width: 100}} borderRadius="$md" source={{uri: plant.img_url}}/>
                <Text style={{fontWeight: 'bold', fontSize: 17, marginTop: 10}}>{plant.name}</Text>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 5}}>
                    <Text style={{fontWeight: 'bold', fontSize: 19}}>
                        {plant.price}
                        <sup>€</sup>
                        /j
                    </Text>
                    <Pressable
                        style={{padding: 6, backgroundColor: '#72c269', borderRadius: 5, alignItems: 'center', justifyContent: 'center'}}
                        onPress={() => navigation.navigate('PlantDetails', plant)}
                    >
                        <Ionicons name={'eye-outline'} size={20} color={'white'} />
                    </Pressable>
                </View>
            </Box>
        </>
    )
}

const styles = StyleSheet.create({
    card: {
        height: 225,
        width: Dimensions.get('screen').width / 2 - 30,
        backgroundColor: '#fff',
        marginBottom: 20,
        marginHorizontal: 2,
        borderRadius: 10,
        padding: 16,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: 0.1,
        shadowRadius: 8
    },
})