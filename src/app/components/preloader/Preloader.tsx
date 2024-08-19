// components/PreloaderStyled.tsx
import React from 'react';
import styled from 'styled-components';
import { PacmanLoader } from 'react-spinners';

// Contenedor que ocupa toda la pantalla y centra el contenido
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Ocupa toda la altura de la ventana */
  width: 100vw; /* Ocupa toda la anchura de la ventana */
  background-color: #fff; /* Opcional: color de fondo para el contenedor */
`;

const PreloaderStyled: React.FC = () => {
  return (
    <Container>
      <PacmanLoader
        color="black"
        cssOverride={{}}
        loading
        margin={2}
        size={40}
        speedMultiplier={1}
      />
    </Container>
  );
};

export default PreloaderStyled;
