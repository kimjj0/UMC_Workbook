import { useState, useEffect } from 'react';
import axios from 'axios';

const useMovieData = (url, movieId = null ) => {
  const [movieData, setMovieData] = useState(null);

  useEffect(() => {
    const fetchMovieData = async () => {
      if (!url) return;

      try {
        const endpoint = movieId ? `${url}/${movieId}` : url;
        const response = await axios.get(endpoint, {
          params: { language: 'en-US', page: '1' },
          headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNmFmOGQ5ZjZhOWQ3YzRhYmQ0ODA4N2I1OTQyNTY0ZSIsInN1YiI6IjY2NDJmMThhMjJjMzFjZjI0MTZhYTEzMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.UbujFtNvKpQ1kmOfSSyGvVbIeh-XAJ2CFpGSK148STQ'
          }
        });
        const data = response.data;

        if(data.results){
          setMovieData(data.results);
        } else {
          setMovieData(data);
        }
        
      } catch (error) {
        console.error(error);
      }
    };
    
    fetchMovieData();
  }, [url, movieId]); 

  return movieData;
};

export default useMovieData;
