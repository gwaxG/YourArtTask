import "./page.css"

const Image = (p: { imageUrl: string }) => {
  return (
    <div>
      <div className="centrilize">
        <img src={p.imageUrl} className="image" alt="Artwork" />
      </div>
      <div className="centrilize">
        <i className="fas fa-eye icon"> VIEW IN A ROOM</i>
        <i className="fa fa-cube icon"> AR VIEW</i>
      </div>
    </div>
  );
};

export default Image;