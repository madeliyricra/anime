import { Layout, Loading } from "components";
import { useAppSelector } from "hooks";
import { ICharacter } from "interfaces";
import { useLayoutEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCharacterDetail } from "./services";
import {
  About,
  Container,
  Image,
  Information,
  Title,
  Voice,
  VoiceImage,
  VoiceInformation,
  VoiceList,
} from "./styled";

const App = () => {
  const params = useParams();
  const [character, setCharacter] = useState<ICharacter>();
  const [loading, setLoading] = useState(false);
  const { movies } = useAppSelector((state) => state.anime);

  const getCharacter = async () => {
    const mail_id = params.characterId;

    if (!mail_id) return;

    await getCharacterDetail({
      characterId: mail_id,
      setCharacter,
      setLoading,
    });
  };

  useLayoutEffect(() => {
    getCharacter();
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Layout
          title={`Character ${character?.name} (${character?.name_kanji})`}
          backPath={`/anime/${params.movieId}`}
        >
          <Container>
            <About>
              <Image src={character?.images.webp.image_url} />
              <Information>
                <Title>About</Title>
                <p>{character?.about}</p>
              </Information>
            </About>
            <Title>Voice Actors</Title>
            <VoiceList>
              {character?.voices.map((voice) => (
                <Voice key={voice.person.mal_id}>
                  <VoiceImage src={voice.person.images.jpg.image_url} />
                  <VoiceInformation>
                    <p>{voice.person.name}</p>
                    <span>{voice.language}</span>
                  </VoiceInformation>
                </Voice>
              ))}
            </VoiceList>
          </Container>
        </Layout>
      )}
    </>
  );
};

export default App;
