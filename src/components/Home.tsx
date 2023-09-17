import "./main.css"

export const Home = () => {
    return <>
        <div className="center">
            <h3>You can follow buttons to find the solution of YourArt front end test.</h3>
            <button className="main-btn" onClick={() => {window.location.href='/paintings'}}><h3>Paintings</h3></button>
        </div>
    </>
}

export default Home;