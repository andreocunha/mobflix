import { StyleSheet } from "react-native";
import globalColors from "../../globalStyles";

const styles = StyleSheet.create({
  button: {
    backgroundColor: globalColors.purple,
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
  buttonText: {
    color: globalColors.white,
    fontSize: 30,
    fontWeight: '300',
  },
});

export default styles;