import { View, Text, ScrollView } from "react-native";
import styles from "./styles";
import * as SplashScreen from 'expo-splash-screen';
import { useFonts, BebasNeue_400Regular } from '@expo-google-fonts/bebas-neue';
import { useContext, useEffect } from "react";
import { Menu } from "../../components/Menu";
import { Banner } from "../../components/Banner";
import { CardVideo } from "../../components/CardVideo";
import { AddButton } from "../../components/AddButton";
import { VideosContext } from "../../contexts/VideosContext";

SplashScreen.preventAutoHideAsync();

export default function Home({ navigation }) {
  const { filteredVideos } = useContext(VideosContext);

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
        {filteredVideos?.map((item) => (
          <CardVideo 
            key={item.id} 
            data={item} 
            edit={() => navigation.navigate('Edit', { id: item.id, category: item.category })}
          />
        ))}
      </ScrollView>
      <AddButton navigation={navigation}/>
    </View>
  );
}