import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import RegisteredCustomers from './pages/RegisteredCustomers';
import Register from './pages/Register';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Home } />
      <Route exact path="/login" component={ Login } />
      <Route exact path="/registered" component={ RegisteredCustomers } />
      <Route exact path="/register" component={ Register } />
    </Switch>
  );
}

export default App;
