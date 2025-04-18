
import React from 'react';
import { TouchableOpacity, Image, Text, StyleSheet } from 'react-native';

export default function GoogleButton({ onPress }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Image
        source={{ uri: 'https://img.icons8.com/color/48/google-logo.png' }}
        style={styles.logo}
      />
      <Text style={styles.text}>Sign in with Google</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    backgroundColor: '#e6e6e6',
    padding: 14,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
    shadowColor: '#000',
    marginTop: 20,
  },
  logo: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  text: {
    fontSize: 16,
    color: '#3e206d',
    fontWeight: 'bold',
  },
});
