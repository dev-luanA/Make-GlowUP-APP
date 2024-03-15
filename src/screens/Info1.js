import React from "react";
import {View,Text, StyleSheet, Pressable, Image} from 'react-native';

export default function Info1({navigation}){
    return(
        <View style={styles.container}>
         <Text style={styles.maior}>Conheça a fundadora da empresa:</Text>
        <View style={styles.espacoImagem}>
            <Image
                style={styles.imagem}
                source={{ uri: 'https://media.discordapp.net/attachments/1173672028952334358/1218199279831875694/lu.jpg?ex=6606cb7d&is=65f4567d&hm=c1f8b7b04ab2c68f899d19a5aa67a7a5d43f87493540b549d63f2bea822751df&=&format=webp&width=400&height=400' }}
            />
              <Text style={styles.descricao}>Luana Aparecida Tavares é uma micro empreendedora que fundou a Make GlowUp em 2012. Com uma paixão pela indústria da beleza desde jovem, Luana sempre sonhou em criar uma marca que não apenas oferecesse produtos de alta qualidade, mas também inspirasse confiança e empoderamento para todos os seus clientes. Atualmente Luana está com 26 anos de idade e mora na cidade de Caçapava, no estado de São Paulo, região sudeste do país.</Text>
        </View>
        <Pressable
            style={styles.botao}
            onPress={() => navigation.goBack()}>
            <Text style={styles.textoBotao}>Voltar para o Blog</Text>
        </Pressable>
    </View>
);
}const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    botao:{
        padding: 20,
        width: 200,
        height: 40,
        backgroundColor: '#CD76A5', 
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
    },

    textoBotao: {
        color: "white",
        fontSize: 20,
    }, 

    espacoImagem: {
        marginVertical: 10,
    },
    imagem: {
        width: 200,
        height: 200,
        resizeMode: 'cover', 
    },

    maior: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },

    descricao: {
        textAlign: 'center',
        fontSize: 16,
        lineHeight: 24,
    },
});
