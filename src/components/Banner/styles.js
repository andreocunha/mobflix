import { StyleSheet } from "react-native";
import globalColors from "../../globalStyles";

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 150,
    marginTop: 20,
    marginBottom: 20,
  },
  button: {
    backgroundColor: globalColors.blue,
    width: 120,
    height: 35,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    position: 'absolute',
    bottom: 20,
  },
  buttonText: {
    color: globalColors.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default styles;