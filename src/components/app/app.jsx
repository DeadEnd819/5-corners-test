import React from 'react';
import Main from '../main/main';
import Sprite from '../sprite/sprite';
import Header from '../header/header';
import {useMediaQuery} from 'react-responsive';

function App() {
  const isMobile = useMediaQuery({query: '(max-width: 1023px)'});

  console.log(isMobile);

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
