import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import Clipboard from '@/assets/images/clipboard.png';
import { router, useRouter } from "expo-router";

const HomeScreen = () => {
  const router =useRouter();
  return (
    <View style={styles.container}>
      <Image source= {Clipboard} style={styles.image} />
      <Text style={styles.title}>Welcome to Notes App.</Text>
      <Text style={styles.subtitle}>Capture Your Thoughts Anytime.</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push('/notes')}
      >
        <Text style={styles.buttonText}>Get Started</Text>
        
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: '#f8f9fa',
  },
  image:{
    width: 100,
    height: 100,
    marginBottom: 20,
    borderRadius: 10,
  },
  title:{
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  subtitle:{
    fontSize: 16,
    textAlign: 'center',
    color: '#666',
    marginBottom: 10,
  },
  button:{
    backgroundColor: "#546A79",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
    alignItems: 'center'
  },
  buttonText:{
    color: '#e7eced',
    fontSize: 18,
    fontWeight: "bold",
  }
});

export default HomeScreen