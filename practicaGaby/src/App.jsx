import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Boton from './components/Boton'
import Acordion from './components/Acordion'
import Alert from './components/Alert'
import Badge from './components/Insignia'
import BotonGroup from './components/BotonGroup'
import Collapse from './components/Collapse'
import Dropdown from './components/Dropdown'
import ListGroup from './components/Listgroup'
import Modal from './components/Modal'
import Pagination from './components/Pagination'
import Popover from './components/Popover'
import Progres from './components/Progres'
import Scrollspy from './components/Scrollspy'
import Spinner from './components/Spiner'
import Tooltip from './components/Tooltip'



function App() {
  

  return (
    <>
    <Boton
    titulo={"bonton1"}/>
    <Acordion
    titulo1={"item 1"}
    titulo2={"item 2"}
    titulo3={"item 3"}
    texto1={" lol This is the first item's accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow."}
    texto2={"This is the second item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow."}
    texto3={"This is the third item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow."}
    />
    <Alert
    texto={"esto es una alertaaaaaaaaaaaaa"}
    />

    <Badge
    titulo={"esto es un"}
    badge={"badge"}
    />

    <BotonGroup
    b1={"priemr boton"}
    b2={"segundoooo"}
    b3={"y el 3rooooooo"}
    />

    <Collapse
    boton={"dale click"}
    texto={"tutututututututututututututututuututututuutututuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu"}
    />

    <Dropdown/>
    <ListGroup/>
    <Modal/>
    <Pagination/>
    <Popover/>
    <Progres/>
    <Scrollspy/>
    <Spinner/>
    <Tooltip/>


    </>
  )
}

export default App
