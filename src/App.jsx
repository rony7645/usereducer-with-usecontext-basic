import "./App.css";
import Demo from "./components/Demo";
import { Store } from "./Store";

function App() {
  return (
    <>
      <Store>
        <Demo />
      </Store>
    </>
  );
}

export default App;
