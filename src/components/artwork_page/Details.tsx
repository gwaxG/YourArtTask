import { IArtwork } from "../../lib/artwork";
import "./page.css"

const capitalize = (s: string) => 
  s && s[0].toUpperCase() + s.slice(1);

const Details = (p: { artwork: IArtwork }) => {
  return (
    <div className="artwork-details">
      <h3><b>{p.artwork.title}</b></h3>
      <div style={{display: "flex"}}>
        <h5 style={{paddingRight: "1em", color: "orange"}}>{p.artwork.artistShort.fullname}</h5>
        <h5 style={{color: "gray"}}>{capitalize(p.artwork.artistShort.country)}</h5>
      </div>
      <p>{capitalize(p.artwork.category.toLocaleLowerCase())}, {p.artwork.creationYear}</p>
      <p>{p.artwork.dimensions.width} W x {p.artwork.dimensions.height} H x {p.artwork.dimensions.depth} D in</p>
      <h5 style={{padding: "5px"}}><b>{p.artwork.price.toLocaleString()} </b><i className="fas fa-euro-sign"/> </h5>
      <button className="center rounded-btn btn-black">Acquire</button>
      <button className="center rounded-btn btn-white">Make an offer</button>
      <h6 style={{color: "gray"}}><i className="fas fa-hourglass-start"></i> PRE-RESERVE FOR 24 HOURS</h6>
      <p style={{fontSize: "small"}}><i style={{marginRight: "2em"}} className="fas fa-check"/>XXX <i className="fas fa-euro-sign"/> estimated delivery fee for France </p>
      <p style={{fontWeight: 600}}>In order to obtain an accurate delivery fee, please enter your country of residence and zip code:</p>
      <div style={{display: "flex"}}>
        <input style={{marginRight: "10%"}} className="inp" type="text" value="France"/>
        <input className="inp" type="text" value="75001"/>
      </div>
      <p style={{marginTop: "1em", fontWeight: 600, fontSize: "small"}}><i style={{marginRight: "1em"}} className="fas fa-truck mirror"/> Delivery fee is YYY <i className="fas fa-euro-sign"/> </p>
      <p style={{marginTop: "3em", fontWeight: 600, fontSize: "small"}}><i style={{marginRight: "1em"}} className="fas fa-map-pin"/> Free pickup in <b>Brussels, Belgium</b> </p>
      <p style={{marginTop: "1em", fontWeight: 600, fontSize: "small"}}><i style={{marginRight: "1em"}} className="fas fa-check fa-2x"/> Try 14 days at home for free </p>
    </div>
  );
};


export default Details;