import React from 'react';
import themeOn from '../../assets/images/themeOn.svg';
import themeOff from '../../assets/images/themeOff.svg';
import { Icone } from '../UI';

const claro = <Icone src={themeOff} alt="Logo de tema claro" />;
const escuro = <Icone src={themeOn} alt="Logo de tema escuro" />;

export default (props) => {
  return props.tema ? escuro : claro;
};
