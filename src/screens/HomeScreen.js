import {View , Text, StyleSheet, TouchableOpacity } from 'react-native';

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Find Your Perfect Roommate!</Text>
            <Text style={styles.subtext}>Connect with people who match your lifestyle.</Text>

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Get Started</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: 'ivory',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    heading: {
        fontSize: 26,
        fontWeight: 'bold',
        color: 'indigo',
        fontFamily: 'Poppins',
        marginBottom: 10,
    },
    subtext: {
        fontSize: 16,
        color: 'slategray',
        textAlign: 'center',
        marginBottom: 20,
    },
button: {
    backgroundColor: 'coral',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
},
    buttonText: {
        fontSize :18,
        fontWeight: 'bold',
        color: 'white',
    },
});

export default HomeScreen;