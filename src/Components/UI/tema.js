import {
  fundoClaro,
  conteudoClaro,
  conteudoEscuro,
  fundoEscuro,
  textoFundoClaro,
  textoFundoEscuro,
} from './variaveis';

export const temaEscuro = {
  body: fundoEscuro,
  content: conteudoEscuro,
  text: textoFundoEscuro,
  filter: 'invert(100)',
};

export const temaClaro = {
  body: fundoClaro,
  content: conteudoClaro,
  text: textoFundoClaro,
};
