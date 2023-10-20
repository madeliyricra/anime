import { useLayoutEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieDetail } from "./services";

const App = () => {
  const params = useParams();
  const [characters, setCharacters] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const getMovie = async () => {
    const mail_id = params.movieId;
    console.log(params);

    if (!mail_id) return;

    await getMovieDetail({ mail_id, setCharacters, setLoading });
  };

  useLayoutEffect(() => {
    getMovie();
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h1>Movie Detail</h1>
          <p>Movie ID: {params.movieId}</p>
          {characters.map((character, index) => {
            return (
              <div key={index}>
                <p>Character ID: {character?.character?.mal_id}</p>
                <p>Character Name: {character?.character?.name}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default App;
