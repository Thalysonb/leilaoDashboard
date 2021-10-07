import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { LoginForm, SignUpForm } from "./components/organisms";
import Routers from './routers';

const App = () => {
  return (
    <div className="App">
      <Routers />
      <ToastContainer />
    </div>
  );
}

export default App;
