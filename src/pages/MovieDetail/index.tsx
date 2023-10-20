import { Character, Layout, Loading, Movie } from "components";
import { links } from "constants/links";
import { useAppSelector } from "hooks";
import { IMovie } from "interfaces";
import { useLayoutEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ICharacterDetail } from "./props";
import { getMovieDetail } from "./services";
import {
  CharacterContainer,
  CharacterList,
  Container,
  DetailContainer,
  Information,
  Recommendations,
  RecommendationsContainer,
  Title,
} from "./styled";

const App = () => {
  const params = useParams();
  const [characters, setCharacters] = useState<ICharacterDetail[]>([]);
  const [movie, setMovie] = useState<IMovie>();
  const [loading, setLoading] = useState(false);
  const { movies } = useAppSelector((state) => state.anime);

  const getMovie = async () => {
    const mail_id = params.movieId;

    if (!mail_id) return;

    await getMovieDetail({
      movieId: mail_id,
      setCharacters,
      setMovie,
      setLoading,
    });
  };

  useLayoutEffect(() => {
    getMovie();
  }, [params]);

  return (
    <Layout title={`${movie?.type ?? ''} ${movie?.title ?? ''}`} backPath={links.home}>
      {loading ? (
        <Loading />
      ) : (
        <Container>
          <DetailContainer>
            <div>
              <Information>
                <img src={movie?.images.webp.image_url} />
                <div>
                  <p><strong>Duration:</strong> {movie?.duration}</p>
                  <p><strong>Type:</strong> {movie?.type}</p>
                  <p>
                  <strong>Genres:</strong>
                    {movie?.genres?.map((gender, key) => (
                      <span key={key}>{gender.name} | </span>
                    ))}
                  </p>
                </div>
              </Information>
              <Title>Synopsis</Title>
              <p>{movie?.synopsis}</p>
            </div>
            <CharacterContainer>
              <Title>Characters</Title>
              <CharacterList>
                {characters.map((character) => {
                  return (
                    <Character
                      key={character.character.mal_id}
                      characterDetail={character}
                      movieId={Number(params.movieId)}
                    />
                  );
                })}
              </CharacterList>
            </CharacterContainer>
          </DetailContainer>
          <RecommendationsContainer>
            <Title>Recommendations</Title>
            <Recommendations>
              {movies?.length > 0 ? (
                movies?.slice(1, 12)?.map((movie) => {
                  if (movie.mal_id === Number(params.movieId)) return null;
                  return <Movie key={movie.mal_id} movie={movie} />;
                })
              ) : (
                <p>It was not found</p>
              )}
            </Recommendations>
          </RecommendationsContainer>
        </Container>
      )}
    </Layout>
  );
};

export default App;
