import { IArtwork } from "../../lib/artwork";
import {useState} from 'react'
import "./page.css"

const Description = (p: { description: string }) => {
    const [isExpanded, setIsExpanded] = useState(false);
  
    return (
      <div className="description container">
          <button className="descr-btn" onClick={() => setIsExpanded(!isExpanded)}><h4>DESCRIPTION</h4> </button>
          {isExpanded && <p>{p.description}</p>}
          <hr/>
      </div>
    );
  };

export default Description;