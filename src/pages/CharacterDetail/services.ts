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

    setCharacter(response.data);
    
  } catch (error: any) {
    console.error("Error: ", error);

  } finally {
    setLoading(false);
  }
};

