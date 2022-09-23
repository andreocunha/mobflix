import { Text, TouchableOpacity } from "react-native";
import styles from "./styles";

export function AddButton(){
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>+</Text>
    </TouchableOpacity>
  );
}