import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
var buttonnames = [
  "Home",
  "Travel",
  "Hookers"
]
function createbuttons(){
  let arr = []
  for(let i = 0;i<buttonnames.length;i++){
    arr.push(<button key={buttonnames[i]}>{buttonnames[i]}</button>)
  }
  return (
    arr
  )
}
function App() {
  return(
    <>
    <div id = "header">
      <div id = "buttoncontainer">
      {
       createbuttons ()
      }
        
      </div>
    </div>
    <img id = "bgi" src='https://wallpapers.com/images/hd/4k-beach-with-wooden-bridge-px78bdam931f7ifn.jpg' >
      
    </img>
    </>
  )
}

export default App
