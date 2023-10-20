import { getCharacterById } from "./api";

export const getCharacterDetail = async ({
  characterId,
  setCharacter,
  setLoading
}: {
  characterId: string;
  setCharacter: Function;
  setLoading: Function;
}) => {
  try {
    setLoading(true);
    const response = await getCharacterById(characterId);

    if(response?.message){
      alert(response?.message);
      return;
    }

    setCharacter(response.data);
    
  } catch (error: any) {
    console.error("Error: ", error);

  } finally {
    setLoading(false);
  }
};

