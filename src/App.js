import './App.css';
import Chart from './components/Chart';
import Dashboard from './components/Dashboard';
import Deposits from './components/Deposits';
import Orders from './components/Orders';

function App() {
  return (
    <div className="App">
      <Chart/>
      <Dashboard/>
      <Deposits/>
      <Orders/>
      
    </div>
  );
}

export default App;
