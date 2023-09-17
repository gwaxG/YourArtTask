import { Routes, Route } from 'react-router-dom';
import {useState} from "react"
import './index.css'
import Paintings from './components/Paintings'
import Home from './components/Home'
import Artwork from './components/Artwork'
import Header from './components/Header'

const App = () => {
  const [artworkName, setArtworkName] = useState("")

  return (
     <>
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <Header artworkName={artworkName}/>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/artwork/:id" element={<Artwork setArtworkName={setArtworkName} />} />
                <Route path="/paintings" element={<Paintings />} />
              </Routes>
            </div>
          </div>
        </div>
     </>
  );
 };

export default App
