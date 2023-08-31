import {StyleSheet} from "react-native";
import {Box, Text, Image} from "@gluestack-ui/themed";

export function PlantCard({plant}) {
    return (
        <>
            <Box style={styles.card}>
                <Image size="xl" borderRadius="$md" source={{uri: 'https://picsum.photos/700'}}/>
                <Text style={{color: '#000', maxWidth: 100}}>{plant.name}</Text>
            </Box>
        </>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        margin: 8,
        borderRadius: 8,
        padding: 16,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: 0.1,
        shadowRadius: 8
    },
})