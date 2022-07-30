import React from 'react';
import { IconeComTema } from './UI';
import alimentacao from '../assets/images/alimentacao.svg';
import saude from '../assets/images/saude.svg';
import utilidades from '../assets/images/utilidades.svg';
import transporte from '../assets/images/transporte.svg';
import outros from '../assets/images/outros.svg';

export default (tipo) => {
  const Imagens = {
    Restaurante: (
      <IconeComTema src={alimentacao} alt="Logo de um restaurante" />
    ),
    Saude: <IconeComTema src={saude} alt="Logo de transporte" />,
    Transporte: <IconeComTema src={transporte} alt="Logo de transporte" />,
    Utilidades: <IconeComTema src={utilidades} alt="Logo de utilidades" />,
  };

  return (
    Imagens[tipo] || (
      <IconeComTema src={outros} alt="Logo que representa outros" />
    )
  );
};
