import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet, FlatList, Image, Dimensions, SafeAreaView, Animated} from 'react-native';


const HomeScreen = () => {

    return(
        <SafeAreaView style={styles.container}>
            <StatusBar hidden />
            <FlatList
                data={images}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingTop: 300}}
                decelerationRate={0}
                snapToInterval={ANCHO_CONTENEDOR}
                scrollEventThrottle={16}
                keyExtractor={(item) => item}
                renderItem={({item, index}) => {
                    return(
                        <View style={{width: ANCHO_CONTENEDOR}}>
                            <View
                                style={{
                                    marginHorizontal: ESPACIO,
                                    borderRadius: 34,
                                    backgroundColor: "#0DCF71", //color verde
                                    alignItems: "center",
                                }}
                            >
                                <Image source={{uri:item}} style={styles.posterImage} />
                            </View>
                        </View>
                    )
                }}
            />
        </SafeAreaView>
    );

};

const images = [
    "https://firebasestorage.googleapis.com/v0/b/prod2-serienetflix.appspot.com/o/images%2Faa'.jpg?alt=media&token=16e3e5e4-5707-48d7-bc45-f9d084173709",
    "https://firebasestorage.googleapis.com/v0/b/prod2-serienetflix.appspot.com/o/images%2Flcdp4.jpeg?alt=media&token=af8f23d9-5499-4af6-b894-34fdf185006a",
    "https://firebasestorage.googleapis.com/v0/b/prod2-serienetflix.appspot.com/o/images%2Flcdp3.png?alt=media&token=4e05ee68-0695-4825-a78f-4eba31ce348c"
];

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const ANCHO_CONTENEDOR = width * 1.2;
const ESPACIO_CONTENEDOR = (width - ANCHO_CONTENEDOR) / 2;
const ESPACIO = 10;
const ALTURA_BACKDROP = height * 0.5;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: "center",
    },
    posterImage: {
        width: '100%',
        height: 200,
        resizeMode: "cover",
        borderRadius: 24,
        margin: 0,
    },
});

export default HomeScreen;