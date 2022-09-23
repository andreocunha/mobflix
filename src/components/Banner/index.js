import { View, Text, TouchableOpacity, Image, Linking } from "react-native"
import styles from "./styles"

export function Banner(){
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://img.youtube.com/vi/1ERDjPlAA2A/0.jpg' }}
        style={{ width: '100%', height: 150 }}
      />
      <TouchableOpacity style={styles.button}
        onPress={() => 
          Linking.openURL('https://www.youtube.com/watch?v=1ERDjPlAA2A')
        }
      >
        <Text style={styles.buttonText}>Assistir agora</Text>
      </TouchableOpacity>
    </View>
  )
}