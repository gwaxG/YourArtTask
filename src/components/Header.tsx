import "./main.css"
import { useLocation } from 'react-router-dom';

export const Header = (p: {artworkName: string | undefined}) => {
    const loc = useLocation().pathname;
    
    const links = {
        "home": () => <a className="links" href="/">Home</a>,
        "paintings": () => <a className="links" href="/paintings">Paintings</a>,
    }

    const head = () => {
        if (loc == "/") {
            return <div>{links["home"]()}</div>
        } else if (loc == "/paintings") {
            return <div>{links["home"]()}{">   "}{links["paintings"]()}</div>
        } else if (loc.startsWith("/artwork/")) {
            return  <div>{links["home"]()}{"> "}{links["paintings"]()}{`> Artworks> `}<b style={{color:"black"}}>{` ${p.artworkName}`}</b></div>
        }
        
        return  <div>{links["home"]()}</div>
    }

    return (
        <div className="header">
            {head()}
        </div>
    );
}

export default Header;