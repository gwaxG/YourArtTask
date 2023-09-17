import { useLocation } from 'react-router-dom';

export const Header = () => {
    const location = useLocation();

    return (
        <div>
            Current path is: {location.pathname}
        </div>
    );
}

export default Header;