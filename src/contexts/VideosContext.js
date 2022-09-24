import { createContext, useState } from 'react'

export const VideosContext = createContext({})

import data from '../utils/data';

export function VideosProvider( {children} ) {
  const [videos, setVideos] = useState(data);
  const [categorySelected, setCategorySelected] = useState('Mobile');
  const filteredVideos = videos.filter(video => video.category === categorySelected);

  // funcao para adicionar um novo video
  function addVideo(video) {
    setVideos([...videos, video]);
  }

  return (
    <VideosContext.Provider value={{
      videos,
      categorySelected,
      filteredVideos,
      setCategorySelected,
      addVideo
    }}>
      {children}
    </VideosContext.Provider>
  )
}