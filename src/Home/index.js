import { View, Text, ScrollView } from "react-native";
import styles from "./styles";
import * as SplashScreen from 'expo-splash-screen';
import { useFonts, BebasNeue_400Regular } from '@expo-google-fonts/bebas-neue';
import { useEffect } from "react";
import { Menu } from "../components/Menu";
import { Banner } from "../components/Banner";
import data from "../utils/data";
import { CardVideo } from "../components/CardVideo";
import { AddButton } from "../components/AddButton";

SplashScreen.preventAutoHideAsync();

export default function Home() {
  let [fontsLoaded] = useFonts({
    BebasNeue_400Regular,
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={[styles.title, { fontFamily: 'BebasNeue_400Regular' }]}>MOBFLIX</Text>
      <Banner />
      <Menu />
      <ScrollView style={styles.containerVideos}>
        {data.map((item) => (
          <CardVideo key={item.id} id={item.id} color={item.color} />
        ))}
      </ScrollView>
      <AddButton />
    </View>
  );
}