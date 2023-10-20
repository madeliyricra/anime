import { API } from "constants/envs";
import { Provider } from "react-redux";
import store from "redux/store";
import Routes from "./routes";

function App() {
  console.log(API)
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

export default App;
