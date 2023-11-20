import "./styles.css";
import Navbar from "./navigation/Navbar";
import Main from "./components/Main";
import MobFooter from "./footer/MobFooter";
export default function App() {
  return (
    <div className="app">
      <Navbar />
      <Main />
      <MobFooter />
    </div>
  );
}
