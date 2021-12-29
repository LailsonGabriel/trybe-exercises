import './App.css';
import RenderPersons from './RenderPersons';
import people from './data'
import OrderTwo from './OrderTwo';
import Prices from './Prices';

function App() {
  return (
    <div>
      <RenderPersons people={ people } />
      <OrderTwo prices={ Prices }/>
    </div>
  );
}

export default App;
