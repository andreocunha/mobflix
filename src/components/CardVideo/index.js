import { View, Text, TouchableOpacity, Image, Linking } from "react-native"
import styles from "./styles"

export function CardVideo({ id, color }){
  if (!id) {
    return null;
  }
  return (
    <TouchableOpacity style={styles.container}
      onPress={() => 
        Linking.openURL(`https://www.youtube.com/watch?v=${id}`)
      }
    >
      <View style={[styles.button, { backgroundColor: color }]}>
        <Text style={styles.buttonText}>Mobile</Text>
      </View>
      <Image
        source={{ uri: `https://img.youtube.com/vi/${id}/0.jpg` }}
        style={{ width: '100%', height: 150 }}
      />
    </TouchableOpacity>
  )
}