import Header from "./components/Header";
import PostList from "./components/PostList";
import "./styles/blog.css";

function App() {
  return (
    <>
      <Header />
      <main>
        <PostList />
      </main>
    </>
  );
}

export default App;