import React from "react";
import { View, Text, StyleSheet, Image } from 'react-native';

export default function About() {
    return (
        <View style={styles.container}>
            <Image
                source={{ uri: 'https://media.discordapp.net/attachments/1173672028952334358/1218196525977702420/TAdiAABIAAEAACQCAlCIBgS4kwg5NAAAgAASAABIBAMhMAwZbM0QPbgQAQAAJAAAgAgZQg8P8AnRYAWmhZiEEAAAAASUVORK5CYII.png?ex=6606c8ec&is=65f453ec&hm=06110a54f5d270615b3edd58513d4b12c2ae3d0f5c281e23f974fa857eef0934&=&format=webp&quality=lossless&width=773&height=600' }} 
                style={styles.image}
            />
            <Text style={styles.descricao}>
                Bem-vindo à nossa loja de cosméticos! Somos uma equipe apaixonada por criar produtos inovadores
                de skincare, maquiagem e cuidados para o seu corpo, sempre respeitando a verdadeira essência de sua persona. Make GlowUp, Desde 2012 temos o compromisso de selecionar os melhores produtos para os nossos clientes.
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        backgroundColor: '#F4E6EF', 
    },
    
    image: {
        width: 250,
        height: 200,
        marginBottom: 20,
       
    },
    descricao: {
        textAlign: 'center',
        fontSize: 16,
        lineHeight: 24,
    },
});