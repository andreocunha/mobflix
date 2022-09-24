import { View, Text, TouchableOpacity, Image, Linking } from "react-native"
import styles from "./styles"
import category from "../../utils/category";
import Icon from 'react-native-vector-icons/Feather';

export function CardVideo({ data, edit }){
  if (!data) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={[styles.tag, { backgroundColor: 
          // get color from category
          category.find(item => item.name === data.category)?.color
        }]}>
          <Text style={styles.tagText}>{data.category}</Text>
        </View>
        <TouchableOpacity onPress={edit}>
        <Icon name="edit" size={20} color="#fff" />
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={() => Linking.openURL(`https://www.youtube.com/watch?v=${data.id}`)}
        style={styles.image}
      >
        <Image
          source={{ uri: `https://img.youtube.com/vi/${data.id}/0.jpg` }}
          style={styles.image}
        />
      </TouchableOpacity>
    </View>
  )
}