import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Knowledge from "./components/Knowledge/Knowledge";
import Profile from "./components/Profile/Profile";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Knowledge></Knowledge>
    </div>
  );
}

export default App;
