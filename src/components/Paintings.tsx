export const Paintings = () => {
    return <div className="container-fluid paintings">
        <div>
            <button className="main-btn" onClick={() => {window.location.href='/artwork/0'}}><h3>Artwork 0</h3></button>
        </div>
        <div>
            <button className="main-btn" onClick={() => {window.location.href='/artwork/1'}}><h3>Artwork 1</h3></button>
        </div>
    </div>
}

export default Paintings;