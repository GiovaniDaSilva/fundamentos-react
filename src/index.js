import React from 'react'
import reactDom from 'react-dom'
import './index.css'
import Primeiro from './components/Primeiro'
import ComParametro from './components/ComParametro'
import ComFilhos from './components/ComFilhos'

reactDom.render(
    <div>
        <Primeiro ></Primeiro>

        <ComParametro titulo='Esse é o titulo'
            subtitulo='Esse é o subtitulo'></ComParametro>

        <ComFilhos>
            <ul>
                <li>Ana</li>
                <li>Bia</li>
                <li>Carlos</li>
                <li>Daniel</li>
            </ul>
        </ComFilhos>

    </div>,
    document.getElementById('root')
)