import {Card, Block} from 'galio-framework'
import {StyleSheet} from "react-native";
import {Box, Text} from "@gluestack-ui/themed";

export function SpeciesCard({species}) {
    return (
        <>
            <Box style={styles.card}>
                <Text style={{color: '#000'}}>{species.name}</Text>
            </Box>
        </>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#72c269',
        margin: 8,
        borderRadius: 8,
        padding: 16,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: 0.1,
        shadowRadius: 8
    },
})