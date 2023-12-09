import React from "react";
import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";


export default function Detalhes(props) {
    return (
        <View style={styles.container}>

            <View style={styles.containerModal}>
                <TouchableOpacity style={styles.btnBack} onPress={props.voltar}>
                    <Text style={{fontSize: 18, fontWeight: 'bold',color: 'white'}}>Voltar</Text>
                </TouchableOpacity>
                <Text style={styles.title}>{props.filme.nome}</Text>
                <Text style={styles.sinopse}>Sinopse: </Text>
                <Text style={styles.descricao}>{props.filme.sinopse}</Text>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginLeft: 10,
        marginRight: 10,
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    containerModal: {
        height: '80%',
        backgroundColor: 'black',
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
    },
    btnBack: {
        backgroundColor: 'red',
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        padding: 10
    },
    title: {
        fontSize: 28,
        color: 'white',
        padding: 10,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    sinopse: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
        margin: 5
    },
    descricao: {
        margin: 5,
        fontSize: 17,
        color: 'white'
    }
})