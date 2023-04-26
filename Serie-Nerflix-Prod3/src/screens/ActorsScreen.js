import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native'

const ActorsScreen = () => {

    const navigation = useNavigation();

    return(
        <View>
            <Text style={style.title}> Actros Screen </Text>

            {/* Navegación a details */}

            <TouchableOpacity 
            style={style.button}
            onPress={() => navigation.navigate('Details')}
            > 
                <Text style={style.buttonText}> 
                    View Details 
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


export default ActorsScreen;