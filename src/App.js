import Navbar from "./components/Navbar";
import PostDetails from "./components/PostDetails";
import PostContextProvider from "./context/PostContext";
function App() {
  return (
    <div className="App">
      <PostContextProvider>
           <Navbar/>
           <PostDetails />
      </PostContextProvider>
    </div>
  );
}

export default App;