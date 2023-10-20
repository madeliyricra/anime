import { Layout, Loading, Movie } from "components";
import { useAppSelector, useDebounce } from "hooks";
import { useEffect } from "react";
import { actionSetSearch } from "redux/actions/anime";
import { handleMovies } from "./services";
import { Container, MoviesContainer, Search } from "./styled";

const App = () => {
  const { movies, search, loading } = useAppSelector((state) => state.anime);
  const searchDebounce = useDebounce(search, 1000);
  
  const getListMovies = async () => {
    await handleMovies({
      search,
    });
  };

  useEffect(() => {
    getListMovies();
  }, [searchDebounce]);


  return (
    <Layout title="Peliculas de Anime">
      <Container>
        {loading ? (
          <Loading />
        ) : (
          <>
            <Search
              type="search"
              placeholder="Buscar película..."
              onChange={(e) => actionSetSearch(e.target.value)}
            />
            <MoviesContainer>
              {movies.map((movie) => (
                <Movie
                  key={movie.mal_id}
                  movie={movie}
                />
              ))}
            </MoviesContainer>
          </>
        )}
      </Container>
    </Layout>
  );
};

export default App;
