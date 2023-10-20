import { MovieDetail, Movies } from "pages";
import { BrowserRouter, Route, Routes as Switch } from "react-router-dom";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/anime" element={<Movies />} />
        <Route path="/anime/:movieId" element={<MovieDetail />} />
        <Route path="/anime/:movieId/character/:characterId" element={<MovieDetail />} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
