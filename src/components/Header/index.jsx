import React from 'react';

import { Container } from './styles';
import cashImg from '../../assets/cash.png';

export function Header() {
  return (
    <Container>
      <div>
        <img src={ cashImg } alt="Logo" />
        <h1>Conversor de Moedas</h1>
      </div>
    </Container>
  )
}
