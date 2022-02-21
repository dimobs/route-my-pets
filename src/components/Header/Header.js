import {Link} from 'react-router-dom';

const Header = ({
    isAuthenticated,
    user
}) => {
    return(
<header id="site-header">
            <nav className="navbar">
                <section className="navbar-dashboard">
                    <Link to="/">Dashboard</Link>
                    <div id="guest">
                        <a className="button" href="/login">Login</a>
                        <Link to='/register' className="button">Register</Link>
                    </div>
                    <div id="user">
                        <span>Welcome, {user}</span>
                        <Link className="button" to="my-pets">My Pets</Link>
                        <Link className="button" to="/create">Add Pet</Link>
                        <Link className="button" to="/logout">Logout</Link>
                    </div>
                </section>
            </nav>
        </header>
    )
}

export default Header;