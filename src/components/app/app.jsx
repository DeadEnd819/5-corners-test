import Main from '../main/main';
import Sprite from '../sprite/sprite';
import Header from '../header/header';

function App() {
  return (
    <>
      <Sprite />
      <div className="wrapper">
        <Header />
        <Main />
      </div>
    </>
  );
}

export default App;
