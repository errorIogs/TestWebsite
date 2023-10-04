import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
var metarray = [];
function loop(){
  let arr = []
  for(let i = 0;i<30;i++){
    let cn = ""
    if(i%2 == 0){
      cn = "Red"
    }else{
      cn = "Blue"
    }
    arr.push(<img src="https://i.pinimg.com/originals/3c/32/56/3c32567ab206c7c3b575e559d5c8851a.jpg" className={cn} key={i} onClick={()=>console.log("hi")}></img>)
    
  }
  return arr
}
function loop2(){
  let arr = []
  for(let i = 0;i<10;i++){
    arr.push(
      <div className="card">

        {
          loop()
        }
        
      </div>
    )
  }
  console.log(arr)
  return arr
}
function App() {
  var [count, setCount] = useState(0)
  console.log(metarray)
  return (
    <div className="App">
      
      {
        loop2()
      }
      
    </div>
  )
}

export default App
