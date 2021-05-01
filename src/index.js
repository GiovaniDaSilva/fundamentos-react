import React from 'react'
import reactDom from 'react-dom'
import './index.css'
import Primeiro from './components/Primeiro'
import ComParametro from './components/ComParametro'

reactDom.render(
    <div>
        <Primeiro ></Primeiro>

        <ComParametro titulo='Esse é o titulo'
            subtitulo='Esse é o subtitulo'></ComParametro>

    </div>,
    document.getElementById('root')
)