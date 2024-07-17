import './App.css';
import HomePage from './pages/HomePage';
import AddNotes from './pages/AddNotes';
import Notes from './pages/AddNotes'; 
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path = "/" element = {<HomePage />}>
            <Route path = "/notes" element = {<Notes />} />
            <Route path = "/add" element = {<AddNotes />} />
          </Route>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
