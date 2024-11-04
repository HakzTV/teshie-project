
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './Pages/HomePage';
import UnderConstructionPage from './Pages/PageConstruction';



function App() {


  return (
    <Router>
    <Routes>
    <Route path="/" element={<Homepage />} />
    <Route path="/aboutUs" element={<UnderConstructionPage />} />
    <Route path="/contact" element={<UnderConstructionPage />} />

        
    </Routes>
  </Router>
  )
}

export default App
