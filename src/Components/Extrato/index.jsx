/* eslint-disable no-lone-blocks */
import React from "react";
import { extratoLista } from "../../info";
import Itens from "../Itens";
import { Box, Button } from "../UI";

export const Extrato = () => {
  return (
    <Box>
      {extratoLista.updates.map(({type, value, from, date}) => {
        return(
          <Itens type={type} value={value} from={from} date={date}/>
        )
      })}
      <Button href="https://google.com">Ver Mais</Button>
    </Box>
  )

}
