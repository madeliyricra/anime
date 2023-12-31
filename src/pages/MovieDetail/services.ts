import { getCharactersByIdMovie, getMovieById } from "./api";

export const getMovieDetail = async ({
  movieId,
  setCharacters,
  setMovie,
  setLoading
}: {
  movieId: string;
  setCharacters: Function;
  setMovie: Function;
  setLoading: Function;
}) => {
  try {
    setLoading(true);
    const response = await getMovieById(movieId);
    const responseCharacters = await getCharactersByIdMovie(movieId);

    if(response?.message){
      alert(response?.message);
      return;
    }

    if(response?.responseCharacters){
      alert(response?.responseCharacters);
      return;
    }

    setMovie(response?.data || []);
    setCharacters(responseCharacters.data);
    
  } catch (error: any) {
    console.error("Error: ", error);

  } finally {
    setLoading(false);
  }
};

