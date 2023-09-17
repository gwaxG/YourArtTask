import { IArtwork } from "../../lib/artwork";
import {useState} from "react"
import "./page.css"

const Info = (p: { artwork: IArtwork }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="description container">
        <button className="descr-btn" onClick={() => setIsExpanded(!isExpanded)}><h4 >SUBJECT, STYLE, MEDIUM, MATERIALS</h4> </button>
        {isExpanded && <div className="subject-style-medium-materials">
        <table>
          <tr>
            <td>SUBJECT</td>
            <td>{p.artwork.subjects.join(', ')}</td>
          </tr>
          <tr>
            <td>STYLE</td>
            <td>{p.artwork.styles.join(', ')}</td>
          </tr>
          <tr>
            <td>MEDIUM</td>
            <td>{p.artwork.mediums.join(', ')}</td>
          </tr>
          <tr>
            <td>MATERIALS</td>
            <td>{p.artwork.materials.join(', ')}</td>
          </tr>
        </table>
      </div>}
      <hr/>
    </div>
  );
};


export default Info;