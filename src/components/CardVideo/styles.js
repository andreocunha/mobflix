import { StyleSheet } from "react-native";
import globalColors from "../../globalStyles";

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 150,
    marginTop: 20,
    marginVertical: 40,
    alignItems: 'flex-start',
  },
  button: {
    backgroundColor: globalColors.blue,
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10
  },
  buttonText: {
    color: globalColors.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default styles;