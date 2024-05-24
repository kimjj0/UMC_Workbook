import { useState, useEffect } from 'react';
import axios from 'axios';
import Spinner from '/src/assets/Spinner1.gif';

const useMovieData = (url) => {
  const [movieData, setMovieData] = useState(null);

  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        const response = await axios.get(url, {
          params: { language: 'en-US', page: '1' },
          headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNmFmOGQ5ZjZhOWQ3YzRhYmQ0ODA4N2I1OTQyNTY0ZSIsInN1YiI6IjY2NDJmMThhMjJjMzFjZjI0MTZhYTEzMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.UbujFtNvKpQ1kmOfSSyGvVbIeh-XAJ2CFpGSK148STQ'
          }
        }); 
        setMovieData(response.data.results);
      
      } catch (error) {
        console.error(error);
      }
    };
    
    fetchMovieData();
  }, [url]); 

  return movieData;
};

export default useMovieData;
