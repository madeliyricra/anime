import { useAppSelector, useDebounce } from "hooks";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { actionSetSearch } from "redux/actions/anime";
import { handleMovies } from "./services";
import { Container, Title } from "./styled";

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
    navigate(`/${mal_id}`);
  }

  return (
    <Container>
      <input type="search" onChange={(e) => actionSetSearch(e.target.value)} />
      <Title>Peliculas de Anime</Title>
      {loading ? (
        <p>Cargando...</p>
      ) : (
        movies.map((movie) => <p key={movie.mal_id} onClick={() => handleDetail(movie.mal_id)}>{movie.title}</p>)
      )}
    </Container>
  );
};

export default App;
