import CreateAccount from "./components/CreateAccount";
import CreatePost from "./components/CreatePost";
import PostsList from "./components/PostsList";

function App() {
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold text-center my-8">Instagram DApp</h1>
      <CreateAccount />
      <CreatePost />
      <PostsList />
    </div>
  );
}

export default App;
