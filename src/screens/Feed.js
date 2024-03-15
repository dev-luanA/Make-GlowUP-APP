import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function Feed() {
    return (
        <View style={styles.container}>
            <Text>Fique por dentro de todos os novos lançamentos: </Text>
            <Image source={{ uri: 'https://m.media-amazon.com/images/I/81b30YFev1L._AC_SL1500_.jpg' }} style={styles.image} />
            <Image source={{ uri: 'https://m.media-amazon.com/images/I/61OguDes-JL._AC_SX522_.jpg' }} style={styles.image} />
            <Image source={{ uri: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRY6LrJQf8ZJ5eddi1BhVynz1tj85J1NtlHriyrsAkcQgHtemSuhHbtM5wM9xb39J3zLFHQE94wBbUPablG2prNIuDfNT81kHmd_-zsQYs&usqp=CAE' }} style={styles.image} />
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
        width: 100,
        height: 100,
        marginVertical: 10,
        borderRadius: 70
    },
});
