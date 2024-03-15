import React from "react";
import {View,Text, StyleSheet, Pressable, Image} from 'react-native';


export default function Info1({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.maior}>Conheça nossas outras sedes:</Text>
            <View style={styles.imageContainer}>
                <Image
                    style={styles.image}
                    source={{ uri: 'https://images.mnstatic.com/35/12/3512901f3613c31ebafa862274b05ccc.jpg' }}
                />
                <Text style={styles.imageDescription}>Sede em Maceió, região nordeste do país</Text>
            </View>
            <View style={styles.imageContainer}>
                <Image
                    style={styles.image}
                    source={{ uri: 'https://observatoriodoturismo.es.gov.br/Media/observatorio/_Profiles/c4d8c6e6/823d9508/vila%20velha_terceira%20ponte_convento_tadeu%20bianconi.JPG?v=637782709803408760' }}
                />
                <Text style={styles.imageDescription}>Sede em Espírito Santo, região sudeste do país </Text>
            </View>
            <View style={styles.imageContainer}>
                <Image
                    style={styles.image}
                    source={{ uri: 'https://www.passagenspromo.com.br/blog/wp-content/uploads/2022/01/Cidades-do-Mato-Grosso-do-Sul-melhores.jpg' }}
                />
                <Text style={styles.imageDescription}>Sede em Mato Grosso do Sul, região centro oeste do país</Text>
            </View>
            <Pressable style={styles.botao} onPress={() => navigation.goBack()}>
                <Text style={styles.textoBotao}>Voltar para o Blog</Text>
            </Pressable>
        </View>
        
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    botao: {
        marginVertical: 10,
        padding: 10,
        backgroundColor: 'pink',
        borderRadius: 5,
    },
    textoBotao: {
        color: 'white',
        fontWeight: 'bold',
    },
    imageContainer: {
        marginBottom: 20,
    },
    image: {
        width: 300,
        height: 200,
        marginBottom: 10,
        alignItems: 'center',
    },
    imageDescription: {
        textAlign: 'center',
    },

    maior: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
});