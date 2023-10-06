import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
var buttonnames = [
  {
    "Label" : "Home",
    "Link" :"https://www.youtube.com/watch?v=dQw4w9WgXcQ&pp=ygUJcmljayByb2xs"
  },
  {
    "Label" : "Travel",
    "Link" :"https://www.youtube.com/watch?v=dQw4w9WgXcQ&pp=ygUJcmljayByb2xs"
  },
  {
    "Label" : "Cheese",
    "Link" :"https://www.youtube.com/watch?v=dQw4w9WgXcQ&pp=ygUJcmljayByb2xs"
  },
  { 
    "Label" : "Piiza",
    "Link" :"https://www.youtube.com/watch?v=dQw4w9WgXcQ&pp=ygUJcmljayByb2xs"
  }
]
function Clicked(l){
  console.log("hi")
}
function createbuttons(){
  let arr = []
  for(let i = 0;i<buttonnames.length;i++){
    arr.push(<button key={buttonnames[i].Label} className =  "buttons" onMouseDown  = "Clicked() " >
    </button>)
  }
  return (
    arr
  )
}
function App() {
  return(
    <>
    <div id = "header">
      <div   id = "buttoncontainer">
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
