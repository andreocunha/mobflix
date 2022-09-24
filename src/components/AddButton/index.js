import { Text, TouchableOpacity } from "react-native";
import styles from "./styles";

export function AddButton({ navigation }){
  return (
    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Register')}>
      <Text style={styles.buttonText}>+</Text>
    </TouchableOpacity>
  );
}