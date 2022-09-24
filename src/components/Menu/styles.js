import { StyleSheet } from "react-native";
import globalColors from "../../globalStyles";

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 70,
    paddingLeft: 20,
    marginTop: 10,
  },
  title: {
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 32,
    lineHeight: 38,
    color: globalColors.blue,
  },
  button: {
    backgroundColor: globalColors.blue,
    width: 120,
    height: 35,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginHorizontal: 10
  },
  buttonText: {
    color: globalColors.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default styles;