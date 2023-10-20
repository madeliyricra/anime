import { API } from "constants/envs";

export const getMovieById = async (movieId: string) => {
  const URL = `${API}/anime/${movieId}`
  const response = await fetch(URL);
  const data = await response.json();
  return data;
}

export const getCharactersByIdMovie = async (movieId: string) => {
  const URL = `${API}/anime/${movieId}/characters`
  const response = await fetch(URL);
  const data = await response.json();
  return data;
}