import { useState, useEffect } from 'react'
import { eventos } from '../data/eventos';

const useInitialState = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    let data = eventos

    setVideos(data)
  }, [])
  return videos;
}

export default useInitialState;