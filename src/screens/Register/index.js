import { useContext, useState } from "react";
import { View, Text, TextInput, Image, TouchableOpacity, Alert } from "react-native";
import { VideosContext } from "../../contexts/VideosContext";
import styles from "./styles";
import DropDownPicker from 'react-native-dropdown-picker';
import category from "../../utils/category";

export default function Register({ navigation }) {
  const [open, setOpen] = useState(false);
  const [id, setId] = useState('');
  const [categorySelected, setCategorySelected] = useState('');

  const { addVideo } = useContext(VideosContext)

  function handleAddVideo() {
    // verificar se o id e a categoria estão preenchidos
    if (id && categorySelected) {
      // adicionar o vídeo
      addVideo({
        id: id,
        category: categorySelected
      });
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

      <TouchableOpacity style={styles.button} onPress={handleAddVideo}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
}