import React from "react";
import "./App.css";
import Card from "./components/layout/Card";
import Primeiro from "./components/Primeiro";
import ComParametro from "./components/ComParametro";
import ComFilhos from "./components/ComFilhos";
import Repeticao from "./components/Repeticao";
import Condicional from "./components/Condicional";
import CondicionalComIf from './components/CondicionalComIf'

export default (props) => (
  <div className="App">
   <Card titulo="06 - Condicional v2">
      <CondicionalComIf numero={10}></CondicionalComIf>
    </Card>

    <Card titulo="05 - Condicional v1">
      <Condicional numero={11}></Condicional>
    </Card>

    <Card titulo="05 - Condicional v1">
      <Condicional numero={11}></Condicional>
    </Card>

    <Card titulo="04 - Repetição">
      <Repeticao></Repeticao>
    </Card>

    <Card titulo="03- Componente com Filhos">
      <ComFilhos>
        <ul>
          <li>Ana</li>
          <li>Bia</li>
          <li>Carlos</li>
          <li>Daniel</li>
        </ul>
      </ComFilhos>
    </Card>

    <Card titulo="02 - Componente com Parametros">
      <ComParametro
        titulo="Esse é o titulo"
        subtitulo="Esse é o subtitulo"
      ></ComParametro>
    </Card>

    <Card titulo="01 - Primeiro Componente">
      <Primeiro></Primeiro>
    </Card>
  </div>
);
