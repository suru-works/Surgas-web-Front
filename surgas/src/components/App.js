import '../styles/App.css';
import Header from './base/Header';
import Home from './specific/Home';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes >
      </BrowserRouter>
    </div>
  );
}

export default App;