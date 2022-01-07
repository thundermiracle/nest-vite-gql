import Tweets from "./components/Tweets";
import MainLayout from "./layouts/MainLayout";

function App() {
  return (
    <MainLayout>
      <header>
        <h2>All your tweets are here!</h2>
        <Tweets />
      </header>
    </MainLayout>
  );
}

export default App;
