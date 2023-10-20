import { Layout, Movie } from "components";
import { useAppSelector, useDebounce } from "hooks";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { actionSetSearch } from "redux/actions/anime";
import { handleMovies } from "./services";
import { Container, MoviesContainer, Search } from "./styled";

const App = () => {
  const { movies, search, loading } = useAppSelector((state) => state.anime);
  const searchDebounce = useDebounce(search, 1000);
  const navigate = useNavigate();

  const getListMovies = async () => {
    await handleMovies({
      search,
    });
  };

  useEffect(() => {
    getListMovies();
  }, [searchDebounce]);

  const handleDetail = (mal_id: number) => {
    navigate(`/anime/${mal_id}`);
  };

  return (
    <Layout title="Peliculas de Anime">
      <Container>
        <Search 
          type="search"
          placeholder="Buscar película..."
          onChange={(e) => actionSetSearch(e.target.value)}
        />
        {loading ? (
          <p>Cargando...</p>
        ) : (
          <MoviesContainer>
            {movies.map((movie) => (
              <Movie
                key={movie.mal_id}
                movie={movie}
                handleDetail={() => handleDetail(movie.mal_id)}
              />
            ))}
          </MoviesContainer>
        )}
      </Container>
    </Layout>
  );
};

export default App;
