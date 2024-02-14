import "./App.css";
import { Header } from "./components/Header";
import { Navbar } from "./components/Navbar";
import { Profile } from "./components/Profile";
import { Todo } from "./Todo";

const App = () => {
  return (
    <div className="site-wrapper">
      <Header />
      <Navbar />
      <Profile />
      <Todo />
    </div>
  );
};

export default App;
