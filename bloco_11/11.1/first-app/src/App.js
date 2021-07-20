import logo from './logo.svg';
import './App.css';

const appointments = ['Estudar', 'Lavar os pratos', 'Passear com o Dog', 'Ir no mercado', 'IR PULAR DE PARAQUEDAS'];


const Task = (value) => {
  return (
    appointments.map((tasks) => <li>{tasks}</li>)
  );
}

function App() {
  return (
    Task('Golf')
  );
}

export default App;
