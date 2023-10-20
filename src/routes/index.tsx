import { links } from "constants/links";
import { CharacterDetail, MovieDetail, Movies } from "pages";
import { BrowserRouter, Route, Routes as Switch } from "react-router-dom";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={links.home} element={<Movies />} />
        <Route path={links.movieDetail} element={<MovieDetail />} />
        <Route path={links.characterDetail} element={<CharacterDetail />} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
