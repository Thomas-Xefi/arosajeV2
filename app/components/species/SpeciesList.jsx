import {useEffect, useState} from "react";
import axios from "axios";
import {API_URL} from "../../context/AuthContext";
import {FlatList, View} from "react-native";
import {SpeciesCard} from "./SpeciesCard";

export const SpeciesList = () => {
    const [species, setSpecies] = useState([])

    useEffect(() => {
        (async () => {
            const result = await axios.get(`${API_URL}/species`);
            setSpecies(result.data)
        })()
    }, [])
    return (
        <>
            <View>
                <FlatList
                    horizontal
                    style={{marginTop: 8}}
                    data={species}
                    renderItem={({item}) => <SpeciesCard species={item} />} keyExtractor={item => item.id}
                />
            </View>
        </>
    )
}