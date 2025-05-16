import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Form from './views/Form';
import Datas from './views/Datas';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      {/* Navigasi opsional */}
      {/* <nav style={{ display: 'flex', gap: '1rem', padding: '1rem' }}>
        <Link to="/">Form</Link>
        <Link to="/datas">Datas</Link>
      </nav> */}

      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/datas" element={<Datas />} />
      </Routes>
    </Router>
  );
}

export default App;
