
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Cruddata from "./Curddata"
import Empcreate from './Empcreate';
import Empedit from './Empedit';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
     <Route path="/" element={<Cruddata/>}/>
     
     <Route path="/empdata/:empid" element={<Empedit/>}/>
     
     <Route path="/empadd" element={<Empcreate/>}/>
     
     </Routes>
          </BrowserRouter>
    </div>
  );
}

export default App;
