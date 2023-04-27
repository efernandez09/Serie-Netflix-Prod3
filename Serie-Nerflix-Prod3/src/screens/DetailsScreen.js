import { useState, useEffect} from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native'
import { collection, doc, onSnapshot } from 'firebase/firestore';
import { db } from '../database/firebase';

const DetailsScreen = ({}) => {

    // Consturctores
    const navigation = useNavigation();
    const route = useRoute();

    // States
    const [actorDetails, SetActorDetails] = useState([]);

    // Actor name, pasado por el mavigation
    const { name } = route.params;

    useEffect(() => { 

        // Creamos la referencia a la coleción que almacena los actores
        const actorRef = collection(db, 'actors');
        
        const subscriber = onSnapshot(actorRef, QuerySnapshot => {

            // Creamos un array para almacenar los actores antes de asignarlos
            // al estado 'actors'.
            const actors = [];

            QuerySnapshot.docs.forEach(doc => {
                // Recogemos cada uno de los actores y hacemos push al array
                // que hemos declarado anteriormente.
                if (doc.data() === name) {
                    actors.push(doc.data());    
                } else {
                    console.log('No se ha podido encontrar el documento');
                }
            });

            // Asignamos al estado el array en el que hemos almacenado todos
            // los actores, para que estos datos sean accesibles para el resto
            // de la pantalla.
            SetActorDetails(actors);

            // Comprobamos que recogemos correctamente los actores de la bbdd
            // console.log(actors)

        })

        console.log(actorDetails)


    }, [])

    return(
        <View>
            <Text style={style.title}> {name} </Text>

            {/* Navegación a details */}

            <TouchableOpacity 
            style={style.button}
            // onPress={() => navigation.navigate('Player')}
            > 
                <Text style={style.buttonText}> 
                    View Player 
                </Text> 
            
            </TouchableOpacity>
            
        </View>
    );

}

const style = StyleSheet.create({
    
    title: {
        fontSize: 30,
        textAlign: 'center',
        marginTop: '20%'
    },

    button: {
        backgroundColor: 'gray',
        padding: 10,
        marginTop: '20%',
        width: '50%',
        alignSelf: 'center',
        borderRadius: 10
    },

    buttonText: {
        fontSize: 15,
        textAlign: 'center',
        color: 'white',
    },

});

export default DetailsScreen;