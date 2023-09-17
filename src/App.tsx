import { Routes, Route } from 'react-router-dom';
import './App.css'
import Painting from './components/Painting'
import Home from './components/Home'
import Artwork from './components/Artwork'
import Header from './components/Header'

const App = () => {
  return (
     <>
        <Header/>
        <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/artwork" element={<Artwork />} />
           <Route path="/painting" element={<Painting />} />
        </Routes>
     </>
  );
 };

export default App
