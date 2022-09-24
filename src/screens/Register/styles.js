import { StyleSheet } from "react-native";
import globalColors from "../../globalStyles";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: globalColors.grayDark,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingHorizontal: 25,
  },
  title: {
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 35,
    color: globalColors.white,
    marginBottom: 20,
  },
  subTitle: {
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 25,
    color: globalColors.white,
  },
  label: {
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 16,
    color: globalColors.white,
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: globalColors.blue,
    borderRadius: 8,
    paddingHorizontal: 20,
    marginTop: 10,
    marginBottom: 20,
    fontSize: 16,
    color: globalColors.white,
  },
  button: {
    backgroundColor: globalColors.blue,
    width: '100%',
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40
  },
  buttonText: {
    color: globalColors.white,
    fontSize: 18,
    fontWeight: '500',
  },
  image: {
    width: '100%',
    height: 180,
    borderRadius: 8,
    backgroundColor: '#2E333B',
  }
});

export default styles;