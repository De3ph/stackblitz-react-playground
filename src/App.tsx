import { cart } from './patterns/singelton';
import Child from './Child';
function App() {
  console.log(cart.id);
  return (
    <>
      <div className="App">Main</div>
      <Child />
    </>
  );
}

export default App;
