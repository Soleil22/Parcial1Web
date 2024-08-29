import { useState } from 'react'
import './App.css'
import InputOnlyOption from './components/inputOnlyOption/inputOnlyOption'

function App() {
  return (
    <>
    <InputOnlyOption tituloCate="Categoria 1" text="Desayunito" price="20 pesitos"></InputOnlyOption>
    <InputOnlyOption tituloCate="Categoria 2" text="Hotelito" price="200 pesitos"></InputOnlyOption>
    <InputOnlyOption tituloCate="Categoria 3" text="Destinito" price="2000 pesitos"></InputOnlyOption>
    </>
  )
}

export default App
