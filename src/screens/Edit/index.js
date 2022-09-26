import { useContext, useState } from "react";
import { View, Text, TextInput, Image, TouchableOpacity, Alert } from "react-native";
import { VideosContext } from "../../contexts/VideosContext";
import styles from "./styles";
import DropDownPicker from 'react-native-dropdown-picker';
import category from "../../utils/category";

export default function Edit({navigation, route}) {
  const [open, setOpen] = useState(false);
  const [id, setId] = useState(route.params.id);
  const [categorySelected, setCategorySelected] = useState(route.params.category);

  const { editVideo, removeVideo } = useContext(VideosContext)

  function handleSave() {
    // verificar se o id e a categoria estão preenchidos
    if (id && categorySelected) {
      // adicionar o vídeo
      editVideo({ id: id,category: categorySelected }, route.params.id);
      // limpar os campos
      setId('');
      setCategorySelected('');
      // voltar para a tela inicial
      navigation.goBack();
    }
    else {
      Alert.alert('Preencha todos os campos');
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastre um vídeo</Text>
      
      <Text style={styles.label}>URL:</Text>
      <TextInput style={styles.input} value={id} onChangeText={setId} placeholder="Ex: 9bZkp7q19f0" />

      <Text style={styles.label}>Categoria:</Text>
      <DropDownPicker
        open={open}
        value={categorySelected}
        items={category}
        setOpen={setOpen}
        setValue={setCategorySelected}
        setItems={setCategorySelected}
        placeholder="Selecione uma categoria"
        style={styles.input}
        searchable={true}
        schema={{
          label: 'name',
          value: 'name'
        }}
        textStyle={{
          fontSize: 16,
          color: '#000',
        }}
        onChangeValue={value => setCategorySelected(value)}
      />

      <Text style={styles.subTitle}>Preview</Text>
      <Image
        source={{ uri: `https://img.youtube.com/vi/${id}/0.jpg` }}
        style={styles.image}
      />

      <TouchableOpacity style={styles.button} onPress={handleSave}>
        <Text style={styles.buttonText}>Alterar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, {backgroundColor: 'red'}]} onPress={() => {
        removeVideo(id);
        navigation.goBack();
      }}>
        <Text style={styles.buttonText}>Deletar</Text>
      </TouchableOpacity>

    </View>
  );
}