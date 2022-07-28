import React from "react";
import { Icone } from "./UI"
import alimentacao from "../assets/images/alimentacao.svg";
import saude from "../assets/images/saude.svg";
import utilidades from "../assets/images/utilidades.svg";
import transporte from "../assets/images/transporte.svg"
import outros from "../assets/images/outros.svg";

export default (tipo) => {
  const Imagens = {
    "Restaurante" : <Icone src={alimentacao} alt="Logo de um restaurante"/>,
    "Saude": <Icone src={saude} alt="Logo de transporte" />,
    "Transporte": <Icone src={transporte} alt="Logo de transporte" />,
    "Utilidades": <Icone src={utilidades} alt="Logo de utilidades" />
  }

  return Imagens[tipo] || <Icone src={outros} alt="Logo que representa outros" />
}
