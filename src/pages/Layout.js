import { Outlet, Link } from "react-router-dom"


const Layout = () => {

    function randomColor() {
        let tblColors = ['PapayaWhip', 'Pink', 'Peru', 'OldLace', 'SkyBlue', 'LightGreen']
        return tblColors[Math.floor(Math.random() * 6)]
    }
    const styles = {
        color: randomColor(),
    }
    const styles2 = {
        backgroundColor: randomColor()
    }

    return (
        <div>
            <nav style={styles}>
                <ul style={styles2}>
                    <li>
                        <Link to="/">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/About">
                            About
                        </Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </div>
    )
};

export default Layout;