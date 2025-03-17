import "./App.css";
import Demo from "./components/Demo";
import { PostProvider } from "./context/PostContext";

function App() {
  return (
    <>
      <PostProvider>
        <Demo />
      </PostProvider>
    </>
  );
}

export default App;
