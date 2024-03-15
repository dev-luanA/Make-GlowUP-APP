import React from "react";
import { View, Text, StyleSheet, Image } from 'react-native';

export default function DrawerRoutes() {
    return (
        <View style={styles.container}>
            <Text style={styles.maior}>Bem vindo(a)!</Text>
            <Text>Faça sua primeira compra, ou visite nosso Blog, clicando na lateral esquerda superior de sua tela :)</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F4E6EF',
    },

    maior: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
});