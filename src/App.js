import Calculater from './components/Counter';
import{ Provider} from "react-redux"
import {store} from "./store"
import Header from './components/Header';
import { Auth } from './components/Auth';
function App() {
  return (
    <Provider store={store}>
      <Header/>
      <Calculater />
      <Auth/>
    </Provider>
  );
}

export default App;
