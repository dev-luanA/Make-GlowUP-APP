import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

export default function Blog({ navigation }) {
    return(
        <View style={styles.container}>
            <Text>Página Blog</Text>
            <Pressable style={styles.botao} 
            onPress={() => navigation.navigate("Info1")}>
                <Text style={styles.textoBotao}>Abra a tela info1</Text>
            </Pressable>

            <Pressable style={styles.botao} 
            onPress={() => navigation.navigate("Info2")}>
                <Text style={styles.textoBotao}>Abra a tela info2</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    botao: {
        padding: 20,
        width: 200,
        height: 40,
        backgroundColor: "#FF0000",
        justifyContent: 'center',
        alignItems: 'center',
    },
    textoBotao: {
        color: "white",
        fontSize: 20,
    },
})