import { useState, useEffect } from 'react';
import axios from 'axios';

const useMovieData = (url, movieId = null, page = 1) => {
  const [movieData, setMovieData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovieData = async () => {
      setLoading(true);
      if (!url) return;
      try {
        const endpoint = movieId ? `${url}/${movieId}` : url;
        const response = await axios.get(endpoint, {
          params: { language: 'en-US', page },
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
      } finally {
        setLoading(false);
      }
    };
    
    fetchMovieData();
  }, [url, page, movieId]); 

  return {movieData, loading};
};

export default useMovieData;
