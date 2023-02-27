import { Link } from "react-router-dom";

function HeaderComponent() {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Sign In</Link>
                    </li>
                    <li>
                        <Link to="/info">Info</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default HeaderComponent;
