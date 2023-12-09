import { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Modal } from 'react-native';
import Detalhes from '../Detalhes';

export default function Filmes({ data }) {
    const [modal, SetModal] = useState(false)
    return (

        <View style={styles.cards}>
            <Text style={styles.title}>{data.nome}</Text>

            <Image
                source={{ uri: data.foto }}
                style={styles.imgs} />
            <View style={styles.areabtn}>
                <TouchableOpacity style={styles.btn} onPress={() => SetModal(true)}>
                    <Text style={styles.TextLeia}>LEIA MAIS</Text>
                </TouchableOpacity>
            </View>

            <Modal transparent={true} animationType='slide' visible={modal}>
                <Detalhes filme={data} voltar={() => SetModal(false)} />
            </Modal>
        </View>


    );
}

const styles = StyleSheet.create({
    cards: {
        flex: 1,
        margin: 15,
        elevation: 1,
        borderColor: 'black'
    },
    title: {
        fontSize: 18,
        padding: 15,
        color: 'black'
    },
    imgs: {
        height: 250,
        zIndex: 2
    },
    areabtn: {
        zIndex: 9,
        marginTop: -45,
        alignItems: 'flex-end'
    },
    btn: {
        width: 100,
        backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center',
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        opacity: 2
    },
    TextLeia: {
        fontSize: 15,
        color: 'white',
        fontWeight: 'bold'
    }

})