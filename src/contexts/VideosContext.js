import { createContext, useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

export const VideosContext = createContext({})

import data from '../utils/data';

export function VideosProvider( {children} ) {
  const [videos, setVideos] = useState([]);
  const [categorySelected, setCategorySelected] = useState('Mobile');
  const filteredVideos = videos.filter(video => video.category === categorySelected);

  useEffect(() => {
    async function loadVideos() {
      const videosStorage = await AsyncStorage.getItem('@mobflix:videos');
      if (videosStorage) {
        setVideos(JSON.parse(videosStorage));
      }
    }
    loadVideos();
  }, []);

  async function saveVideos(newVideos) {
    await AsyncStorage.setItem('@mobflix:videos', JSON.stringify(newVideos));
    setVideos(newVideos);
  }

  // funcao para adicionar um novo video
  function addVideo(video) {
    const newVideos = [...videos, video];
    setVideos(newVideos);

    // salvar os videos no async storage
    saveVideos(newVideos);
  }

  // funcao para editar um video
  function editVideo(video, oldId) {
    const newVideos = videos.map(item => {
      if (item.id === oldId) {
        return video;
      }
      return item;
    });
    setVideos(newVideos);

    // salvar os videos no async storage
    saveVideos(newVideos);
  }

  // funcao para remover um video
  function removeVideo(id) {
    const newVideos = videos.filter(video => video.id !== id);
    setVideos(newVideos);

    // atualizar o async storage
    saveVideos(newVideos);
  }

  return (
    <VideosContext.Provider value={{
      videos,
      categorySelected,
      filteredVideos,
      setCategorySelected,
      addVideo,
      editVideo,
      removeVideo,
    }}>
      {children}
    </VideosContext.Provider>
  )
}