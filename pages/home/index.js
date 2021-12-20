import React, { useState, useEffect } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import style from './style.js'
export default function Home({ navigation }) {

    const [lista, setlista] = useState([

    ])

    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon", {
            "method": "GET",
            "headers": {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(resp => {
            return resp.json()
        }).then(data => {
            setlista(data.results);
        }).catch(err => {
        });
    }, []);

    return (
        <View style={style.pag}>
            {lista.map((item, index) =>
                <TouchableOpacity style={style.menu} key={index} onPress={() => { navigation.navigate('Detalhes', item) }}>
                    <Image style={style.icone} source={require('../../assets/pokebola.png')}></Image>
                    <Text style={style.texto1}>{item.name}</Text>
                </TouchableOpacity>
            )}
        </View>
    )
}