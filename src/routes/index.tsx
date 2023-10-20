import { MovieDetail, Movies } from "pages";
import { BrowserRouter, Route, Routes as Switch } from "react-router-dom";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" element={<Movies />} />
        <Route path="/:movieId" element={<MovieDetail />} />
        <Route path="/:movieId/character/:characterId" element={<MovieDetail />} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
