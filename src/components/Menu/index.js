import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import styles from "./styles";
import category from "../../utils/category";
import { VideosContext } from "../../contexts/VideosContext";
import { useContext } from "react";

export function Menu(){
  const { setCategorySelected } = useContext(VideosContext);

  return (
    <View style={styles.container}>
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
      >
        {category?.map(item => (
          <TouchableOpacity 
            key={item.id} 
            style={[styles.button, { backgroundColor: item.color }]}
            onPress={() => setCategorySelected(item.name)}  
          >
            <Text style={styles.buttonText}>{item.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}