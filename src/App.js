import './App.css';
import {HomePage , AddNotes, NotesPage} from './pages/index';
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path = "/" element = {<HomePage />}>
            <Route path = "/notes" element = {<NotesPage />} />
            <Route path = "/add" element = {<AddNotes />} />
          </Route>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
