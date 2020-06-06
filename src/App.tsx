import * as React from "react"
import './App.css'
import MyClass from './components/MyClass'
import MyComp from "./components/MyComp"

class App extends React.Component {
  render(){
    return (
      <div className = "App">
        <MyComp name={"Le Batisseur"} isMarried ={true} kid= {2} />
        <MyClass  isMarried ={false}/>
        
      </div>
    )
  }
}
export default App;