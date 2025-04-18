
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import GoogleButton from '../../components/GoogleButton';

export default function LoginScreen({ navigation }) {
  const handleGoogleLogin = () => {
    navigation.replace('Home');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Roommate Finder</Text>
      <Text style={styles.subText}>Find your perfect match 💜</Text>
      <GoogleButton onPress={handleGoogleLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3e8ff', 
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#3e206d',
    marginBottom: 10,
  },
  subText: {
    fontSize: 16,
    color: '#5e3c91',
    marginBottom: 40,
  },
});
