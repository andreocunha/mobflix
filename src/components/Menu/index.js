import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import styles from "./styles";

export function Menu(){
  return (
    <View style={styles.container}>
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
      >
        <TouchableOpacity style={[styles.button]}>
          <Text style={styles.buttonText}>Front End</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, { backgroundColor: '#19940F' }]}>
          <Text style={styles.buttonText}>Programação</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, { backgroundColor: '#D82D2D' }]}>
          <Text style={styles.buttonText}>Mobile</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}