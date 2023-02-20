import { Provider, useSelector } from "react-redux";
import { store } from "./store";
import Header from "./components/Header";
import { Auth } from "./components/Auth";
import Calculator from "./components/Counter";

function AppContent() {
  const { isAUTOHRIZED } = useSelector((state) => state.auth);
  return (
    <>
      <Header />
      {isAUTOHRIZED ? <Calculator /> : <Auth />}
    </>
  );
}

function App() {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
}
// console.log(store);

export default App;
