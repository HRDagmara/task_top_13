import React from 'react';
import Nav from 'react-bootstrap/Nav';
import styles from "./_navbar.scss";

function NavBar() {
    return (<div className={styles}>
        <Nav id="nav" variant="pills" defaultActiveKey="/promocje">
            <Nav.Item className="nav-item">
                <Nav.Link className="nav-link" href="/home">O Nas</Nav.Link>
            </Nav.Item>
            <Nav.Item >
                <Nav.Link eventKey="link-1">Aktualności</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-2">Koszty dostawy</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/promocje">Promocje</Nav.Link>
            </Nav.Item>
        </Nav>
    </div>
    )
}

export default NavBar;


