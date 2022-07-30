import React, { useState } from 'react';

import { ThemeProvider } from 'styled-components';
import Cabecalho from './Components/Cabecalho';
import Container from './Components/Container';
import { GlobalStyle } from './Components/GlobalStyle';
import { temaClaro, temaEscuro } from './Components/UI/tema';
import { BtnTema } from './Components/UI';
import SwitchTema from './Components/SwitchTema';

function App() {
  const [tema, setTema] = useState(false);

  const toggleTema = () => {
    setTema((tema) => !tema);
  };

  return (
    <ThemeProvider theme={tema ? temaEscuro : temaClaro}>
      <GlobalStyle />
      <BtnTema onClick={toggleTema}>
        <SwitchTema tema={tema} />
        <p>Modo noturno</p>
      </BtnTema>
      <Cabecalho />
      <Container />
    </ThemeProvider>
  );
}

export default App;
