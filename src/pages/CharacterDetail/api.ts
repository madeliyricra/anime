import { API } from "constants/envs";

export const getCharacterById = async (characterId: string) => {
  const URL = `${API}/characters/${characterId}/full`
  const response = await fetch(URL);
  const data = await response.json();
  return data;
}