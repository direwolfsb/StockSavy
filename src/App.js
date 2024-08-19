import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./pages/home/home";
import StockPredictor from "./pages/stockPredictor/stockPredictor";
import 'bootstrap/dist/css/bootstrap.min.css';
import Analysis from "./pages/analysis/analysis";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/analysistool" element={<Analysis/>}/>
        <Route path="/stockpredictor" element={<StockPredictor/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
