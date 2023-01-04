
import './App.css';
import Coin from './features/coin/Coin';
import Counter from './features/counter/counter';


function App() {
 
  return (
    <div className="flex justify-center items-center h-full">
     <Counter></Counter>
   <Coin></Coin>
    </div>
  );
}

export default App;
