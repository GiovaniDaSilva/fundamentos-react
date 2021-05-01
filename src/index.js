import React from 'react'
import reactDom from 'react-dom'
import './index.css'
import Card from './components/layout/Card'
import Primeiro from './components/Primeiro'
import ComParametro from './components/ComParametro'
import ComFilhos from './components/ComFilhos'

reactDom.render(
    <div>

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
            <ComParametro titulo='Esse é o titulo'
                subtitulo='Esse é o subtitulo'></ComParametro>
        </Card>

        <Card titulo="01 - Primeiro Componente">
            <Primeiro ></Primeiro>
        </Card>






    </div>,
    document.getElementById('root')
)