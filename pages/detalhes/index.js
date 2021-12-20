import React, { useEffect } from 'react'
import { View, Text, TouchableOpacity} from 'react-native'
import style from './style.js'


export default function Detalhes({navigation, route}) {
    const { name, ability} = route.params;

    useEffect(() => {
        let url = 'https://pokeapi.co/api/v2/pokemon/' + name;
        
        fetch(url)
        .then(resp => { return resp.status })
        .then(data => {
            if(data == 200) {
                navigation.navigate("home");
            }
        });
    })

    return (
        <View>
            <View style={style.pag2}>
                <TouchableOpacity style={style.card}>
                <Text style={style.texto2}>Nome: {name}</Text>
                <Text style={style.texto2}>Habilidade: {ability}</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}