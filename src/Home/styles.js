import { StyleSheet, StatusBar } from "react-native";
import globalColors from "../globalStyles";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: globalColors.grayDark,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: StatusBar.currentHeight + 10,
  },
  title: {
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 32,
    lineHeight: 38,
    color: globalColors.blue,
  },
  containerVideos: {
    width: '100%',
    paddingHorizontal: 25,
    gap: 50,
  },
});

export default styles;