import { View, Text, TouchableOpacity, Image, Linking } from "react-native"
import styles from "./styles"
import category from "../../utils/category";

export function CardVideo({ data }){
  if (!data) {
    return null;
  }
  return (
    <TouchableOpacity style={styles.container}
      onPress={() => 
        Linking.openURL(`https://www.youtube.com/watch?v=${data.id}`)
      }
    >
      <View style={[styles.button, { backgroundColor: 
        // get color from category
        category.find(item => item.name === data.category)?.color
      }]}>
        <Text style={styles.buttonText}>{data.category}</Text>
      </View>
      <Image
        source={{ uri: `https://img.youtube.com/vi/${data.id}/0.jpg` }}
        style={styles.image}
      />
    </TouchableOpacity>
  )
}