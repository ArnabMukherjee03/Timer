import { Timer } from "./Timer/Timer";

const App = ()=>{
  return <div className="container">
     <Timer value={1} maxValue={10}/>
     <Timer value={4} maxValue={20}/>
  </div>
}


export default App;