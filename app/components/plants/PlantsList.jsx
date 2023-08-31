import {useEffect, useState} from "react";
import axios from "axios";
import {API_URL, useAuth} from "../../context/AuthContext";
import {FlatList, View} from "react-native";
import {PlantCard} from "./PlantCard";

export const PlantsList = ({plants}) => {
    return (
        <>
            <FlatList
                numColumns={2}
                columnWrapperStyle={{justifyContent: 'space-between'}}
                style={{marginTop: 8}}
                data={plants}
                renderItem={({item}) => <PlantCard plant={item}/>} keyExtractor={item => item.id}
            />
        </>
    )
}