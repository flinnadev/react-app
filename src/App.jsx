import Counter from "./components/Counter";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  const isLogin = false;
  const user = {
    spec0ffers: "You have -20% sale fof all laptop",
  };
  return (
    <>
      <Header isLogin={isLogin} />;
      <Main isLogin={isLogin} user={isLogin} />
      <Counter />
    </>
  );
}

export default App;
